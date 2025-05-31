import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
      'm-[1.2]',
      'm-[0.8]',
      'p-[0.5]',
      'p-1',
    'p-2', // only needed here if you're generating it dynamically
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        intro: "url('/backs/damn.jpg')",
        leaves: "url('/backs/leaves.jpeg')",
        clouds: "url('/backs/clouds.jpg')",
        glass: "url('/backs/glass.jpeg')",
        building: "url('/backs/italybuilding.jpg')",
        stands: "url('/backs/offseasonstands.jpg')",
        disciples: "url('/backs/disciples.jpg')",
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {transform: "scale(0.95)" },
          "100%": {ransform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
      require('@nauverse/tailwind-dot-grid-backgrounds'),
      require('@codaworks/react-glow/tailwind')

  ],
} satisfies Config;
