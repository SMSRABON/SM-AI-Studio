
const MODEL = "@cf/black-forest-labs/flux-1-schnell";

const STYLES = {
  realistic: "photorealistic, realistic lighting, highly detailed",
  anime: "beautiful anime illustration, expressive character design",
  "3d": "high quality 3D render, detailed materials, studio lighting",
  cartoon: "colorful cartoon illustration, friendly shapes",
  digital: "polished digital art, rich detail, professional composition",
  watercolor: "soft watercolor painting, delicate brush textures",
  fantasy: "epic fantasy concept art, magical atmosphere"
};

// Lightweight per-isolate cooldown.
// This is not a global rate limiter or authentication system.
const recent = new Map();

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Health check
    if (
      request.method === "GET" &&
      url.pathname === "/api/health"
    ) {
      return json({
        ok: true,
        name: "SM AI",
        model: MODEL,
        mode: "Cloudflare Workers AI"
      });
    }

    // Image generation
    if (
      request.method === "POST" &&
      url.pathname === "/api/generate"
    ) {
      const origin = request.headers.get("Origin");

      if (origin && origin !== url.origin) {
        return json({
          error: "Cross-origin request blocked."
        }, 403);
      }

      const ip =
        request.headers.get("CF-Connecting-IP") || "unknown";

      const now = Date.now();

      if (now - (recent.get(ip) || 0) < 8000) {
        return json({
          error: "Please wait a few seconds before generating again."
        }, 429);
      }

      let body;

      try {
        body = await request.json();
      } catch {
        return json({
          error: "Invalid request. Please try again."
        }, 400);
      }

      const prompt =
        typeof body.prompt === "string"
          ? body.prompt.trim()
          : "";

      const style =
        typeof body.style === "string"
          ? body.style
          : "realistic";

      const negative =
        typeof body.negativePrompt === "string"
          ? body.negativePrompt.trim().slice(0, 300)
          : "";

      // Prompt validation
      if (prompt.length < 3 || prompt.length > 1800) {
        return json({
          error: "Prompt must be between 3 and 1,800 characters."
        }, 400);
      }

      // Style validation
      if (!Object.prototype.hasOwnProperty.call(STYLES, style)) {
        return json({
          error: "Please choose a valid image style."
        }, 400);
      }

      // Cooldown
      recent.set(ip, now);

      if (recent.size > 1000) {
        for (const [key, time] of recent) {
          if (now - time > 10 * 60 * 1000) {
            recent.delete(key);
          }
        }
      }

      const finalPrompt = [
        prompt,
        STYLES[style],
        negative ? `Avoid: ${negative}` : ""
      ]
        .filter(Boolean)
        .join(". ");

      try {
        // FIX: Removed unsupported seed parameter.
        const result = await env.AI.run(MODEL, {
          prompt: finalPrompt,
          steps: 4
        });

        if (!result || !result.image) {
          console.error(
            "Workers AI returned no image:",
            JSON.stringify(result)
          );

          return json({
            error: "The image model returned no image. Please try again."
          }, 502);
        }

        return json({
          ok: true,
          image: `data:image/jpeg;base64,${result.image}`,
          model: MODEL
        });

      } catch (error) {
        const message = String(error?.message || error);

        console.error(
          "Workers AI generation error:",
          message
        );

        if (/limit|quota|neuron|exceed/i.test(message)) {
          return json({
            error: "The free AI allowance may be exhausted. Please try again later."
          }, 429);
        }

        return json({
          error: "Image generation is temporarily unavailable. Please try again later."
        }, 503);
      }
    }

    // Serve frontend assets
    return env.ASSETS.fetch(request);
  }
};
