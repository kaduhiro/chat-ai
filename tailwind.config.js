module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      animation: {
        'slide-in-elliptic-top-fwd': 'slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'bounce-top': 'bounce-top 0.9s ease   both',
        'vibrate-3': 'vibrate-3 0.5s linear  infinite both',
        heartbeat: 'heartbeat 1.5s ease  infinite both',
      },
      keyframes: {
        'slide-in-elliptic-top-fwd': {
          '0%': {
            transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
            'transform-origin': '50% 100%',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0) rotateX(0) scale(1)',
            'transform-origin': '50% 1400px',
            opacity: '1',
          },
        },
        'bounce-top': {
          '0%': {
            transform: 'translateY(-45px)',
            'animation-timing-function': 'ease-in',
            opacity: '1',
          },
          '24%': {
            opacity: '1',
          },
          '40%': {
            transform: 'translateY(-24px)',
            'animation-timing-function': 'ease-in',
          },
          '65%': {
            transform: 'translateY(-12px)',
            'animation-timing-function': 'ease-in',
          },
          '82%': {
            transform: 'translateY(-6px)',
            'animation-timing-function': 'ease-in',
          },
          '93%': {
            transform: 'translateY(-4px)',
            'animation-timing-function': 'ease-in',
          },
          '25%,55%,75%,87%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out',
          },
          to: {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out',
            opacity: '1',
          },
        },
        'vibrate-3': {
          '0%,to': {
            transform: 'translate(0)',
          },
          '10%,50%,80%': {
            transform: 'translate(-2px, -2px)',
          },
          '20%,60%,90%': {
            transform: 'translate(2px, -2px)',
          },
          '30%,70%': {
            transform: 'translate(-2px, 2px)',
          },
          '40%': {
            transform: 'translate(2px, 2px)',
          },
        },
        heartbeat: {
          '0%': {
            transform: 'scale(1)',
            'transform-origin': 'center center',
            'animation-timing-function': 'ease-out',
          },
          '10%': {
            transform: 'scale(.91)',
            'animation-timing-function': 'ease-in',
          },
          '17%': {
            transform: 'scale(.98)',
            'animation-timing-function': 'ease-out',
          },
          '33%': {
            transform: 'scale(.87)',
            'animation-timing-function': 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out',
          },
        },
      },
    },
  },
  plugins: [],
};
