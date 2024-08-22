/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/components/Todo/Todo.jsx",
    "./src/components/TodoWithReducer/TodoWithReducer.jsx",
    "./src/components/Nav/Nav.jsx"
   ],
  theme: {
    extend: {},
  },
  plugins: [],
}

