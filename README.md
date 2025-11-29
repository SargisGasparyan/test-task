# Wallet Chart Live

A real-time cryptocurrency trading platform with live charts, wallet integration, and trading capabilities. Built with modern React and TypeScript for optimal performance and developer experience.

## 🚀 Demo

**Live Demo:** [https://vercel.com/sargis-projects-6d981cb8/test-task](https://vercel.com/sargis-projects-6d981cb8/test-task)

## 🛠️ Tools & Technologies

### Core Framework & Language

- **React 18.3.1** - Modern UI library for building user interfaces
- **TypeScript 5.8.3** - Type-safe JavaScript for better code quality
- **Vite 5.4.19** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **tailwindcss-animate** - Animation utilities for Tailwind

### Data Visualization

- **Recharts 2.15.4** - Composable charting library for React

### Routing & State Management

- **React Router DOM 6.30.1** - Declarative routing for React
- **TanStack Query 5.83.0** - Powerful data synchronization for React

### Form Handling & Validation

- **React Hook Form 7.61.1** - Performant forms with easy validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolver adapters

### Utilities

- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind CSS classes
- **class-variance-authority** - Component variant management
- **date-fns 3.6.0** - Modern JavaScript date utility library

### Development Tools

- **ESLint 9.32.0** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS 8.5.6** - CSS transformation tool
- **Autoprefixer** - CSS vendor prefixing

## ✨ Features

- 📊 **Real-time Trading Charts** - Interactive price charts with multiple time intervals (15S, 1M, 1H, 1D)
- 💰 **Price Display** - Live price updates with change indicators
- 🔗 **Wallet Integration** - Connect and manage wallet with balance tracking
- 📈 **Activity Feed** - Real-time trading activity updates
- 📱 **Responsive Design** - Mobile-first design with bottom navigation
- 🎨 **Modern UI** - Clean, professional interface built with shadcn/ui
- ⚡ **Performance Optimized** - Uses React hooks (useMemo, useCallback) for optimal rendering

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **bun**
- **Git** - [Download](https://git-scm.com/)

### Recommended: Node Version Manager

If you need to manage multiple Node.js versions, use [nvm](https://github.com/nvm-sh/nvm):

```bash
# Install nvm (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js
nvm install 18
nvm use 18
```

## 🚀 Getting Started

### Installation

1. **Clone the repository** (or navigate to the project directory):

```bash
git clone <repository-url>
cd wallet-chart-live
```

2. **Install dependencies**:

```bash
npm install
```

Or using alternative package managers:

```bash
# Using yarn
yarn install

# Using bun
bun install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

The dev server includes:

- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- TypeScript type checking
- ESLint warnings in the console

### Build for Production

Build the application for production:

```bash
npm run build
```

This will:

- Optimize and minify the code
- Generate production-ready assets in the `dist/` directory
- Enable tree-shaking to remove unused code
- Create source maps for debugging

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the production build locally so you can test it before deploying.

### Build for Development

Create a development build:

```bash
npm run build:dev
```

This creates a build with development optimizations (faster builds, source maps enabled).

## 📜 Available Scripts

| Command             | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Start the development server on `http://localhost:8080` |
| `npm run build`     | Build for production (optimized, minified)              |
| `npm run build:dev` | Build for development (faster, with source maps)        |
| `npm run preview`   | Preview the production build locally                    |
| `npm run lint`      | Run ESLint to check code quality                        |

## 📁 Project Structure

```
wallet-chart-live/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── ActivityFeed.tsx
│   │   ├── BottomNavigation.tsx
│   │   ├── PositionDetails.tsx
│   │   ├── PriceDisplay.tsx
│   │   ├── TradingButtons.tsx
│   │   ├── TradingChart.tsx
│   │   ├── TradingPair.tsx
│   │   └── WalletConnect.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                 # Utility functions and types
│   │   ├── helpers.ts      # Helper functions
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── utils.ts        # Utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # This file
```

## 🏗️ Architecture

### Component Organization

- **Pages** (`src/pages/`) - Top-level page components
- **Components** (`src/components/`) - Reusable UI components
- **UI Components** (`src/components/ui/`) - Base components from shadcn/ui
- **Hooks** (`src/hooks/`) - Custom React hooks
- **Lib** (`src/lib/`) - Shared utilities, types, and helpers

### Key Features Implementation

- **Trading Chart**: Uses Recharts for rendering interactive price charts with configurable time intervals
- **State Management**: React hooks (useState, useEffect, useMemo, useCallback) for efficient state management
- **Type Safety**: Comprehensive TypeScript types and enums for better code reliability
- **Performance**: Optimized with memoization and callback optimization

## 🔧 Configuration

### Vite Configuration

The project uses Vite with React SWC plugin for fast compilation. Configuration is in `vite.config.ts`:

- Development server on port 8080
- Path aliases configured (`@/` maps to `src/`)
- React Fast Refresh enabled

### TypeScript Configuration

TypeScript is configured with strict mode enabled. See `tsconfig.json` for details.

### Tailwind Configuration

Tailwind CSS is configured with custom theme variables. See `tailwind.config.ts` for theme customization.

## 📦 Deployment

### Vercel (Recommended)

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Vercel will automatically detect Vite and configure the build

**Build Command:** `npm run build`  
**Output Directory:** `dist`

### Other Platforms

The project can be deployed to any static hosting service:

- **Netlify**: Configure build command as `npm run build` and publish directory as `dist`
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👤 Author

Built with ❤️ for modern cryptocurrency trading interfaces.

---

**Note:** This is a demo application with mock data. For production use, integrate with real trading APIs and implement proper authentication and security measures.
