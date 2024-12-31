import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    perspective: {
      '1000': '1000px',
    },
    rotate: {
      'y-3': 'rotateY(3deg)',
    }
  },
},
plugins: [],

} satisfies Config;
