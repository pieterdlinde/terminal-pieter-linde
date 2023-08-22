import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...{
        "light": {
          "background": "#FBF1C9",
          "foreground": "#3C3836",
          "yellow": "#D79921",
          "green": "#98971A",
          "gray": "#7C6F64",
          "blue": "#458588",
          "red": "#CA2124"
        },
        "dark": {
          "background": "#2E3440",
          "foreground": "#E5E9F0",
          "yellow": "#5E81AC",
          "green": "#A3BE8C",
          "gray": "#88C0D0",
          "blue": "#EBCB8B",
          "red": "#BF616A"
        }
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
