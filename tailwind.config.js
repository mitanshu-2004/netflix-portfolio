/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-dark-gray': '#221F1F',
        'netflix-light-gray': '#e5e5e5',
        'netflix-medium-gray': '#595959',
        'netflix-card-hover': 'rgba(0,0,0,0.75)',
      },
      fontFamily: {
        'netflix': ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        netflixShine: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(100%)'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-in-out': 'fadeInOut 3s ease-in-out forwards',
        'scale-up': 'scaleUp 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
        'shine': 'shine 1.5s linear forwards'

      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}