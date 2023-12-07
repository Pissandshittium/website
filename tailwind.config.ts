import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:  ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        
        'light-text': '#0f0f0f',
        'light-background': '#eee9d8',
        'light-background-secondary': '#beb9a9',
        'light-primary': '#65402f',
        'light-secondary': '#ff757e',
        'light-accent': '#ffdf29',
        'dark-text': '#f0f0f0',
        'dark-background': '#211c1b',
        'dark-background-secondary': '#141413',
        'dark-primary': '#e2ccb4',
        'dark-secondary': '#765456',
        'dark-accent': '#a39974',
      },
      fontFamily:{
        "display":"Unbounded Variable",
        "text":"Inter Variable",
      }
      
    },
  },
  plugins: [],
}
export default config
