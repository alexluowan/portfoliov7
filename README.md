# Portfolio v7

A modern portfolio website built with Next.js, featuring a custom cursor implementation and smooth animations.

## Features

- **Custom Cursor**: Interactive cursor with hover effects based on [daybreak-cursor](https://github.com/alvinleung/daybreak-cursor)
- **Project Cards**: Animated project cards with video/image support and badge animations
- **Smooth Scrolling**: Lenis-powered smooth scrolling
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lenis](https://github.com/studio-freight/lenis) - Smooth scrolling

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
components/
├── cursor/          # Custom cursor implementation
│   ├── cursor.ts
│   ├── domRenderer.ts
│   ├── styles.ts
│   └── utils.ts
├── CustomCursor.tsx # React wrapper for cursor
└── projects/
    └── ProjectCard.tsx
```

## Custom Cursor Classes

The cursor responds to different CSS classes:

- `.hover-target-big` - Large hover area (e.g., project cards)
- `.hover-target-small` - Small hover area (e.g., links)
- `.hover-target-arrow` - Arrow indicator
- `.hover-target-text` - Text hover effect

## License

MIT
