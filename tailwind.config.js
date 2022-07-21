module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
		extend: {
      colors: {
        light: {
          'primary': '#EBF3FA',
          'secondary': '#E3EDF7',
          'dark': '#5b0eeb'
        },
        opera: {
          'primary': '#6d5dfc',
          'light': '#8abdff',
          'dark': '#5b0eeb'
        },
        gray: {
          'light-1': '#E4EBF5',
          'light-2': '#c8d0e7',
          'light-3': '#bec8e4',
          'dark': '#9baacf'
        },
      },
      opacity: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        80: '.8',
        100: '1',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%)',
        'button-curved-default': 'radial-gradient(315.18% 315.18% at -124.11% -101.79%, #B9CCE2 11.1%, #FFFFFF 85.21%), #E3EDF7',
      },
      boxShadow: {
        main: '-16px -16px 40px rgba(255, 255, 255, 0.8), 16px 4px 64px rgba(18, 61, 101, 0.3), inset -8px -6px 80px rgba(255, 255, 255, 0.18)',
        'button-curved-default': '-4px -2px 16px rgba(255, 255, 255, 0.7), 4px 2px 16px rgba(136, 165, 191, 0.38)',
        'button-curved-pressed': 'inset -4px -4px 16px rgba(255, 255, 255, 0.8), inset 4px 4px 12px rgba(136, 165, 191, 0.4)',
        up: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff',
        down: 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff',
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out 0s 1 normal forwards running',
        'fade-out': 'fade-out 200ms ease-in 0s 1 normal forwards running',
        expand: 'expand 400ms linear 0s 1 normal forwards running',
        'slide-in': 'slide-in 400ms linear 0s 1 normal forwards running',
        'slide-out': 'slide-out 400ms linear 0s 1 normal forwards running',
        collapse: 'collapse 400ms linear 0s 1 normal forwards running'
      },
      spacing: {
        0.5: '0.125rem', // 2px
        1.25: '0.3125rem', // 5px
        1.5: '0.375rem', // 6px
        1.75: '0.4375rem', // 7px
        2.4: '0.6rem', // 9.6px
        2.5: '0.625rem', // 10px
        3: '0.75rem', // 12px
        3.5: '0.875rem', // 14px
        5: '1.25rem', // 20px
        5.5: '1.375rem', // 22px
        6: '1.5rem', // 24px
        6.25: '1.5625rem', // 25px
        7.5: '1.875rem', // 30px
        8.75: '2.1875rem', // 35px
        10: '2.5rem', // 40px
        11: '2.75rem', // 44px
        12.5: '3.125rem', // 50px
        15: '3.75rem', // 60px
        17.5: '4.375rem', // 70px
        21: '5.25rem', // 84px
        23.75: '5.9375rem', // 95px
        25: '6.25rem', // 100px
        27.5: '6.875rem', // 110px
        30: '7.5rem', // 120px
        37.5: '9.375rem', // 150px
        40: '10rem', // 160px
        55: '13.75rem', // 220px
        60: '15rem', // 240px
      },
      fontSize: {
        xxxs: '0.75rem', // 12px
        xxs: '0.8125rem', // 13px
        xs: '0.875rem', // 14px
        sm: '0.9375rem', // 15px
        '2xxl': '1.75rem' // 28px
      },
      minHeight: {
        slide: '32.5rem'
      },
      minWidth: {
        badge: '1.25rem',
        dropdown: '17.5rem'
      },
      maxWidth: {
        '1/6': '16.66%',
        '1/4': '25%',
        '1/3': '33.33%',
        '1/2': '50%',
        '2/3': '66.66%',
        '3/4': '75%',
        '5/6': '83.33%',
      },
      margin: {
        '1/12': '8.3333333%'
      },
      inset: {
        '1/2': '50%',
        full: '100%'
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20'
      },
      transitionProperty: {
        width: 'width'
      }
    },
	},
	plugins: [],
};
