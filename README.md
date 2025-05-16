# Modern Portfolio Website

A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio features a customizable theme system, smooth animations with Framer Motion, and a modern UI design.

## Features

- 🎨 Multiple theme options (Light, Dark, Cyberpunk, FC25, Beach)
- 📱 Fully responsive design for all device sizes
- ✨ Smooth animations and transitions using Framer Motion
- 🔍 SEO optimized with Next.js metadata
- 🧩 Modular component architecture
- 🌐 Interactive project showcases
- 📊 Skills visualization
- 📝 Ready-to-use blog section

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **Linting**: ESLint, Prettier
- **State Management**: React Context API with Next Themes

## Getting Started

### Prerequisites

- Node.js (>=18.18.0 recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── blog/             # Blog page
│   ├── components/       # App-specific components
│   ├── contact/          # Contact page
│   ├── projects/         # Projects pages
│   ├── resume/           # Resume page
│   └── layout.tsx        # Root layout
├── components/           # Shared components
│   ├── ui/               # UI components
│   └── ...               # Other shared components
├── lib/                  # Utilities and data
│   ├── data.ts           # Profile data
│   ├── resumeData.ts     # Resume data
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── ...                   # Config files
```

## Customization

### Personal Information

Update your personal information in `lib/data.ts` and `lib/resumeData.ts`.

### Themes

The site includes five themes:

- `light` - Clean light theme
- `dark` - Modern dark theme
- `cyberpunk` - Vibrant cyberpunk theme with neon accents
- `fc25` - Retro-inspired theme with amber accents
- `beach` - Calm beach theme with blue/cyan colors

Modify themes in the `app/page.tsx` file.

### Projects

Add your projects in the `components/FeaturedProjects.tsx` file.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run check-format` - Check formatting

## License

MIT

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
