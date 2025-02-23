/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      customDark: {
        "primary": "oklch(0.789 0.154 211.53)",
        "secondary": "oklch(0.985 0 0)",
        "accent": "oklch(0.446 0.03 256.802)",
        "neutral": "oklch(0.373 0.034 259.733)",
        "base-100": "oklch(0.278 0.033 256.848)",
        "ghost": "oklch(0.656 0.241 354.308)"
      },
      customLight: {
        "primary": "oklch(0.789 0.154 211.53)",
        "secondary": "oklch(0.985 0 0)",
        "accent": "oklch(0.928 0.006 264.531)",
        "neutral": "oklch(0.967 0.001 286.375)",
        "base-100": "oklch(0.984 0.003 247.858)",
        "ghost": "oklch(0.656 0.241 354.308)"
      }
    }]
  },
  plugins: [require('daisyui')],
}