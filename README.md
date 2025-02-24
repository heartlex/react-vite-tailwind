# React 19 + Vite 6 + Tailwind 4 Starter

This is a modern and lightweight starter template for building React applications with **Vite 6**, **React 19**, and **Tailwind CSS 4**. It comes with **HMR (Hot Module Replacement)** enabled and utilizes **SWC** for fast compilation.

## 🚀 Features

- **⚡ Vite 6** - Super fast development environment
- **⚛️ React 19** - Latest React version with improved performance
- **🎨 Tailwind CSS 4** - Modern utility-first styling
- **🔥 HMR (Hot Module Replacement)** - Fast reloads during development
- **⚡ SWC Compiler** - High-speed JavaScript/TypeScript compilation
- **📂 Clean File Structure** - Organized and easy to scale

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/heartlex/react-vite-tailwind.git
cd react-vite-tailwind
npm install
```

## 🛠 Usage

### Development

Run the development server with HMR enabled:

```sh
npm run dev
```

### Production

Build the project for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## 🎨 Tailwind CSS Configuration

Tailwind CSS is pre-configured. You can customize styles in `tailwind.config.js`:

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## 🏗 Project Structure

```
📦 react-vite-tailwind
├── 📂 src
│   ├── 📄 main.tsx (Entry point)
│   ├── 📄 App.tsx (Main component)
│   ├── 📂 components (Reusable UI components)
│   ├── 📂 assets (Static assets)
│   ├── 📂 styles (Global styles)
├── 📄 index.html (Root HTML file)
├── 📄 package.json (Dependencies and scripts)
├── 📄 tailwind.config.js (Tailwind configuration)
├── 📄 vite.config.ts (Vite configuration)
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork, open an issue, or submit a PR.

## 📜 License

This project is licensed under the **MIT License**.

---

Happy coding! 🎉
