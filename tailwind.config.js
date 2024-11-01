/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroPattern': " linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      animation: {
        'fade-in': 'fade-out 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

