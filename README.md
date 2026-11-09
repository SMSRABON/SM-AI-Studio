# SM AI — Responsive AI Image Generator

A responsive text-to-image website powered by Cloudflare Workers AI and FLUX.1 Schnell.

## Highlights
- Responsive layout for phones, tablets, laptops and desktop browsers
- Stable interface with no decorative blinking/pulsing animations
- Reduced-motion accessibility support
- Text-to-image with seven prompt styles
- Preview, download and browser-local recent history
- Server-side Workers AI binding; no API key in frontend
- Free-tier-only setup; no paid fallback configured
- Footer credit: **Made By MD AWAL SHEIKH**

## Free-tier note
The Cloudflare Workers AI Free plan has a daily Neurons allowance. Usage is not unlimited. If it is exhausted, generation may pause until the allowance resets. Do not enable paid billing if you want to keep the project free.

Pricing: https://developers.cloudflare.com/workers-ai/platform/pricing/
Model: https://developers.cloudflare.com/workers-ai/models/flux-1-schnell/

## Requirements
- Windows 10/11, macOS or Linux
- Node.js LTS (20+ recommended)
- VS Code
- Free Cloudflare account

## Run on your computer
1. Extract the ZIP file.
2. Open the extracted `SM-AI-v2` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `node -v` and `npm -v` to verify Node.js/npm are installed.
5. Install dependencies:

   ```bash
   npm install
   ```

6. Sign in to Cloudflare:

   ```bash
   npx wrangler login
   ```

7. Start local development:

   ```bash
   npm run dev
   ```

8. Open the local URL shown by Wrangler (usually `http://localhost:8787`).

## Deploy free to Cloudflare
1. Keep the same project folder open in the VS Code terminal.
2. Run:

   ```bash
   npm run deploy
   ```

3. Wrangler will publish the Worker and print your `workers.dev` URL.
4. Open that URL on your phone or computer to test the live website.

## Important
- Workers AI uses your Cloudflare account binding; no separate image API key is needed.
- The browser history is stored on each visitor's own device only. It is not a shared cloud gallery.
- The simple cooldown in this starter is best-effort per Worker isolate, not strong global abuse prevention. Add Turnstile and durable rate limiting before promoting it widely.
- This starter has no user accounts or admin dashboard.
- Do not enable paid billing or paid add-ons if you want to stay strictly free.
