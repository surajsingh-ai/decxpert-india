<div align="center">

<img src="public/logo.png" alt="DecXpert Logo" width="80" height="80" />

# DecXpert India

**AI-Powered Radiology Suite — Built for Scale, Designed for India**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-decxpert--india.vercel.app-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white)](https://decxpert-india.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📌 Overview

DecXpert India is the official web platform for [Dectrocel Healthcare and Research Pvt. Ltd.](https://the-decxpert.com) — a MedTech company building Software-as-a-Medical-Device (SaMD) solutions for clinical radiology.

This application serves as the primary interface for showcasing the **DecXpert AI Radiology Suite**, which provides AI-assisted interpretation of chest X-rays and CT scans for high-throughput screening programs across India.

> Built with a React + TypeScript frontend, powered by Vite, and deployed on Vercel.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Linting | ESLint |
| Deployment | Vercel |

---

## 📁 Project Structure

```
decxpert-india/
├── public/                  # Static assets (images, icons, fonts)
├── src/
│   ├── assets/              # Imported assets (SVGs, images)
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page-level components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # Root application component
│   └── main.tsx             # Application entry point
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts           # Vite build configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- `npm` or `bun`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/decxpert-india.git

# Navigate into the project
cd decxpert-india

# Install dependencies
npm install
```

### Development

```bash
# Start the local dev server (http://localhost:5173)
npm run dev
```

### Build & Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

🔗 **Live URL:** [https://decxpert-india.vercel.app](https://decxpert-india.vercel.app/)

| Branch | Environment | Status |
|---|---|---|
| `main` | Production | [![Vercel](https://img.shields.io/badge/deployed-success-brightgreen?style=flat-square&logo=vercel)](https://decxpert-india.vercel.app/) |
| `dev` | Preview | Auto-deployed on PR |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes and commit with a clear message
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request against `main`

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|---|---|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation updates |
| `style:` | Code style / formatting |
| `refactor:` | Code refactoring |
| `chore:` | Maintenance tasks |

---

## 🏢 About Dectrocel

Dectrocel Healthcare and Research Pvt. Ltd. is a MedTech company incubated at the **MedTech Centre of Excellence, SGPGI Lucknow**.

- 🏥 **CDSCO Class 2B** registered medical device software
- 📋 **ISO 13485:2016** certified
- 🔬 Peer-reviewed in *Nature Scientific Reports* (2024)
- 📍 MedTech CoE, SGPGIMS, Raebareli Road, Lucknow – 226014
- ✉️ support@dectrocel.com | 📞 +91 9807194222

---

## 📄 License

This project is proprietary software owned by **Dectrocel Healthcare and Research Private Limited**. All rights reserved.

---

<div align="center">
  <sub>© 2026 Dectrocel Healthcare. Made with ❤️ in Lucknow, India.</sub>
</div>
