/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        button: 'var(--color-button)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          project_title: 'var(--color-text-project-primary)',
        },
        fontSize: {
          xs: 'var(--font-size-xs)',
          sm: 'var(--font-size-sm)',
          md: 'var(--font-size-md)',
          lg: 'var(--font-size-lg)',
          base: 'var(--font-size-base)',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  }
}

