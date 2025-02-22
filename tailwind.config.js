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
      },
      customLight: {
        "primary": "oklch(0.789 0.154 211.53)",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      }
    }]
  },
  plugins: [require('daisyui')],
}