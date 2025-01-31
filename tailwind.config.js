/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class', // ✅ Enables class-based dark mode
    theme: {
      extend: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '3rem'
            }
        }
      },
    },
    plugins: [],
  };
  