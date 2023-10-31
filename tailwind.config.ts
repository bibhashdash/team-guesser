import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
     whiteTranslucent: 'rgba(248,248,248,0.61)',
     white100: '#f8f8f8',
     green200: '#1cb700',
     green400: '#188100',
     gray50: 'rgba(218,218,218,0.06)',
      black100: '#626262',
      black200: '#4d4d4d',
      black300: '#2d2d2d',
      red500: '#ec0202',
      yellow500: '#ffc100',
      blue500: '#0079cb',
      orange500: '#d75d00',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      }
    },
  },
  plugins: [],
}
export default config
