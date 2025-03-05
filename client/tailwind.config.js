const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Sports-themed color palette
        primary: {
          DEFAULT: '#003366', // Deep navy blue - represents professionalism
          light: '#004d99',
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#FF6B00', // Energetic orange - represents vitality
          light: '#FF8533',
          dark: '#CC5500',
        },
        accent: {
          DEFAULT: '#FFD700', // Athletic gold - represents achievement
          light: '#FFE44D',
          dark: '#CCB100',
        },
        surface: {
          DEFAULT: '#1a1a1a', // Dark background for dashboard
          light: '#2d2d2d',
          dark: '#141414',
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80')",
        'login-pattern': "url('https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: '#003366',
            foreground: '#FFFFFF',
          },
          secondary: {
            DEFAULT: '#FF6B00',
            foreground: '#FFFFFF',
          }
        },
      },
    },
  })],
};