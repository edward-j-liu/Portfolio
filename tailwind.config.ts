import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        building: "url('/backs/italybuilding.jpeg')",
        stands: "url('/backs/offseasonstands.jpg')",
        disciples: "url('/backs/disciples.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
