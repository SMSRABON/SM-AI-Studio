# 🚀 SM AI Studio

### Turn Your Imagination Into Images with AI

**SM AI Studio** is a free AI-powered image generation web application built with Cloudflare Workers AI and the FLUX.1 Schnell model.

Simply enter a text prompt and generate AI images in seconds. The application features a clean, responsive interface and a simple daily credit system.

<p align="center">
  <a href="https://sm-ai-studio.mdawalsheikh.workers.dev/">
    <strong>🌐 Live Demo — Try SM AI Studio</strong>
  </a>
</p>

---

## 🌐 Live Application

**Live Website:**  
https://sm-ai-studio.mdawalsheikh.workers.dev/

**GitHub Repository:**  
https://github.com/SMSRABON/SM-AI-Studio

---

## ✨ Features

- 🎨 **AI Image Generation** — Generate images from text prompts.
- ⚡ **Fast Generation** — Powered by Cloudflare Workers AI.
- 🧠 **FLUX.1 Schnell Model** — Advanced AI image generation.
- 🆓 **50 Free Daily Credits** — Daily image-generation credits per browser.
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile devices.
- 🚀 **Serverless Architecture** — Deployed using Cloudflare Workers.
- 🔐 **No Login Required** — Start generating without creating an account.
- 🌍 **Global Access** — Accessible through the internet.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | UI design and styling |
| JavaScript | Frontend functionality |
| Node.js | Development environment |
| Cloudflare Workers | Serverless backend |
| Cloudflare Workers AI | AI inference |
| FLUX.1 Schnell | Image generation model |
| Wrangler | Cloudflare development and deployment |

---

## 📸 How to Use

1. Visit the [SM AI Studio website](https://sm-ai-studio.mdawalsheikh.workers.dev/).
2. Enter your desired image prompt.
3. Submit your prompt to generate an image.
4. Wait for the AI model to process your request.
5. View your generated image.

---

## 🎁 Free Daily Credits

SM AI Studio provides **50 free image-generation credits per browser per local calendar day**.

- One successful image generation uses one credit.
- Credits reset according to the browser's local calendar date.
- No account registration is required.

**Important:** The displayed credit balance is stored in browser `localStorage`. Clearing browser data or switching browsers/devices may reset the displayed balance. This is a client-side convenience feature, not secure server-side usage enforcement.

Actual AI usage remains subject to Cloudflare Workers AI account limits, availability, and applicable policies.

---

## 📦 Installation & Setup

Want to run SM AI Studio on your local computer? Follow these steps.

### Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/)
- npm
- A [Cloudflare account](https://dash.cloudflare.com/)
- Cloudflare Workers AI access

### 1. Clone the Repository

```bash
git clone https://github.com/SMSRABON/SM-AI-Studio.git
```

### 2. Open the Project Directory

```bash
cd SM-AI-Studio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Login to Cloudflare

```bash
npx wrangler login
```

Complete the browser authentication process.

### 5. Run the Development Server

```bash
npm run dev
```

Open the following address in your browser:

```text
http://127.0.0.1:8787
```

---

## 🚀 Deployment to Cloudflare Workers

You can deploy your own version of SM AI Studio using Cloudflare Workers.

### Step 1: Login

```bash
npx wrangler login
```

### Step 2: Deploy

```bash
npm run deploy
```

Wrangler will deploy your application to Cloudflare Workers.

Make sure your Cloudflare account has Workers AI access enabled and the project configuration is correct.

---

## 📁 Project Structure

```text
SM-AI-Studio/
│
├── public/
│   └── index.html
│
├── src/
│   └── index.js
│
├── .gitignore
├── package.json
├── wrangler.jsonc
└── README.md
```

### File Description

- `public/index.html` — Frontend interface and application UI.
- `src/index.js` — Cloudflare Worker backend and API logic.
- `package.json` — Project metadata and npm scripts.
- `wrangler.jsonc` — Cloudflare Workers configuration.
- `.gitignore` — Files excluded from Git.
- `README.md` — Project documentation.

---

## ⚙️ Available Commands

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server |
| `npm run deploy` | Deploy to Cloudflare Workers |

---

## 🔮 Future Improvements

Planned features and possible enhancements:

- 🖼️ Generated image gallery
- 📥 Image download improvements
- 🎨 Additional AI image models
- 👤 User authentication
- ☁️ Cloud-based image storage
- 📊 Server-side credit management
- ✨ More customization options

---

## 👨‍💻 Developer

**MD Awal Sheikh**

🎓 Computer Science & Engineering  
🏛️ Northern University of Business and Technology Khulna

**GitHub:** [@SMSRABON](https://github.com/SMSRABON)

---

## ⭐ Support the Project

If you like SM AI Studio, please consider giving this repository a ⭐ Star on GitHub.

Your support helps the project grow and motivates future development.

**Repository:**  
https://github.com/SMSRABON/SM-AI-Studio

---

## 📄 License

No license has been specified yet. All rights are reserved by the project owner unless a license is added to this repository.

---

<p align="center">
  <strong>🚀 SM AI Studio</strong><br>
  <em>Turn Your Imagination Into Images.</em><br><br>
  Made with ❤️ by MD Awal Sheikh
</p>
