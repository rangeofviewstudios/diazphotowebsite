import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        cormorant: ['var(--font-cormorant)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        bg: '#080807',
        surface: '#111110',
        'text-primary': '#EDE8DF',
        muted: '#5A554F',
        accent: '#B8964E',
        border: '#1C1B19',
      },
    },
  },
  plugins: [],
}

export default config
