module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['text-teal', 'order-4', 'order-5']
    }
  },
  theme: {
    fontFamily: {
      sans: ['Arial', 'Microsoft JhengHei', 'sans-serif']
    },
    maxHeight: {
      16: '4rem'
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      colors: {
        primary: {
          light: '#ffd943',
          default: '#ffb01c'
        },
        secondary: {
          light: '#ffe3d7',
          default: '#ff6d2d',
          dark: '#99411b'
        },
        black: '#1e1e1e',
        gray: {
          100: '#faf9f5',
          200: '#f0f0f0',
          300: '#ebebeb',
          400: '#dcdcdc',
          500: '#b4b4b4',
          600: '#969696',
          700: '#615a50',
          800: '#424242',
          900: '#212121'
        },
        blue: {
          dark: '#36568d',
          light: '#798fa7',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#0882ec',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365'
        },
        pink: {
          default: '#eaac9d',
          light: '#fef0f0'
        },
        yellow: {
          light: '#fdf6e9',
          default: '#b49d73',
          dark: '#776e60',
          darker: '#97614f'
        },
        teal: '#107893',
        red: {
          default: '#ff0000',
          light: '#e70404'
        }
      },
      height: {
        90: '90px',
        100: '100px',
        110: '110px',
        150: '150px'
      },
      inset: {
        '-2': '-0.5rem',
        25: '25%',
        50: '50%',
        75: '75%',
        100: '100%',
        '-50': '-50%',
        '-100': '-100%'
      },
      zIndex: {
        '-10': '-10',
        100: '100'
      },
      boxShadow: {
        10: '0 0 10px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  variants: {},
  plugins: []
}
