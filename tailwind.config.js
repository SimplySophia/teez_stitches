/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
    darkMode: 'class', // ✅ Enables class-based dark mode

  };
  