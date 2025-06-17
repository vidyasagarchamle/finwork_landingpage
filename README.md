# Finwork - CA Practice Management Platform

An AI-based CRM and practice management platform designed specifically for Chartered Accountants. Streamline your practice with intelligent automation, client management, and comprehensive tax solutions.

## 🚀 Features

- **Smart Tax Management** - Automate complex tax calculations and track compliance deadlines
- **Complete Client Management** - Manage relationships, communication history, and documents
- **AI-Powered Insights** - Leverage artificial intelligence for predictive analytics
- **Practice Analytics** - Get insights into practice performance and growth opportunities
- **Bank-Grade Security** - Enterprise-level security and compliance standards
- **Document Management** - Securely store, organize, and share documents

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vidyasagarchamle/finwork_landingpage.git
cd finwork_landingpage
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
pnpm build
pnpm start
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vidyasagarchamle/finwork_landingpage)

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 📁 Project Structure

```
finwork-landing/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── header.tsx      # Navigation header
│   │   ├── hero-section.tsx # Landing page hero
│   │   ├── features-section.tsx
│   │   ├── solutions-section.tsx
│   │   ├── pricing-section.tsx
│   │   └── footer-section.tsx
│   └── lib/                # Utilities and configurations
├── public/                 # Static assets
└── components.json         # shadcn/ui configuration
```

## 🎨 Design System

The project uses a custom design system built with:
- Tailwind CSS for styling
- Radix UI for accessible components
- Custom color palette optimized for CA professional services
- Responsive design for all device sizes

## 🔧 Customization

### Adding New Components

1. Use shadcn/ui CLI to add components:
```bash
npx shadcn-ui@latest add [component-name]
```

2. Components are automatically configured with the project's design tokens

### Modifying Colors

Update the color palette in `src/app/globals.css` and `tailwind.config.js`.

## 📄 License

This project is proprietary software. All rights reserved.

## 👨‍💻 Author

**Vidyasagar Chamle**
- Email: vidyasagar.chamle@gmail.com
- GitHub: [@vidyasagarchamle](https://github.com/vidyasagarchamle)

## 🤝 Contributing

This is a private project. For any suggestions or issues, please contact the author directly.

---

Built with ❤️ for Chartered Accountants who want to modernize their practice management.
