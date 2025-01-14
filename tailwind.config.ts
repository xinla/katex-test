/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        px: '1px',
        0: '0px',
        1: '4px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        '1rem': '0.04rem',
        '2rem': '0.08rem',
        '3rem': '0.12rem',
        '4rem': '0.16rem',
        '5rem': '0.2rem',
        '6rem': '0.24rem',
        '7rem': '0.28rem',
        '8rem': '0.32rem',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
