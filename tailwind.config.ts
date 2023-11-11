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
     white50: '#cbcbcb',
     white100: '#f8f8f8',
     green200: '#1cb700',
     green400: '#188100',
     gray50: 'rgba(218,218,218,0.06)',
      black50: 'rgba(176,176,176,0.46)',
      black100: '#626262',
      black200: '#4d4d4d',
      black250: '#3d3d3d',
      black300: '#2d2d2d',
      red500: '#ec0202',
      yellow500: '#ffc100',
      blue300: '#54b4ff',
      blue500: '#0079cb',
      orange500: '#d75d00',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'scale-down-then-up': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-up-then-down': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'bounce-once': 'bounce 0.3s cubic-bezier(0, 0, 0.2, 1) 1',
        'ping-once': 'ping 0.3s cubic-bezier(0, 0, 0.2, 1) 1',
        'button-pressed': 'scale-down-then-up 0.3s cubic-bezier(0, 0, 0.2, 1) 1',
        'game-over-squares': 'scale-up-then-down 0.3s cubic-bezier(0, 0, 0.2, 1) 1',
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        display: ["Orbitron"],
      }
    },
  },
  plugins: [],
}
export default config
