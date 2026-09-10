/** Colour values live in src/styles/theme.css as raw RGB channels so that a
 *  single edit there re-themes both the utility classes and the hand-written
 *  CSS. The <alpha-value> placeholder keeps opacity modifiers working
 *  (e.g. bg-neon-500/10). */
const ink = (shade) => `rgb(var(--ink-${shade}) / <alpha-value>)`
const neon = (shade) => `rgb(var(--neon-${shade}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: ink(50),
          100: ink(100),
          200: ink(200),
          300: ink(300),
          400: ink(400),
          500: ink(500),
          600: ink(600),
          700: ink(700),
          800: ink(800),
          850: ink(850),
          900: ink(900),
          950: ink(950),
        },
        neon: {
          50: neon(50),
          100: neon(100),
          200: neon(200),
          300: neon(300),
          400: neon(400),
          500: neon(500),
          600: neon(600),
          700: neon(700),
          800: neon(800),
          900: neon(900),
          950: neon(950),
        },
        todo: 'rgb(var(--signal-todo) / <alpha-value>)',
        danger: 'rgb(var(--signal-danger) / <alpha-value>)',
        info: 'rgb(var(--signal-info) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
        neon: 'var(--shadow-neon)',
      },
      maxWidth: {
        page: 'var(--page-max)',
      },
    },
  },
  plugins: [],
}
