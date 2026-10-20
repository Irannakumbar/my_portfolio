/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#090b10', // Deep obsidian canvas
          900: '#0e1219', // Card surface
          850: '#141923', // Elevated surface
          800: '#1c2331', // Border / subtle highlight
          700: '#2a3449', // Focus / active stroke
        },
        brand: {
          indigo: '#4f46e5',
          'indigo-light': '#6366f1',
          cobalt: '#2563eb',
          sky: '#38bdf8',
          slate: '#64748b',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'subtle-fade': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
