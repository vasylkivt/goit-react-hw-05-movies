export const theme = {
  colors: {
    accent: '#37b5e1',
    accentSecond: '#3ed3ac',

    black: '#000000',
    white: '#ffffff',
    green: '#4cd137',
    yellow: '#fbc531',
    red: '#e84118',

    textColorLight: '#f5f6fa',
    textColorDark: '#2f3640',
    titleColorLight: '#dcdde1',
    titleColorDark: '#353b48',
    backgroundColorLight: '#F8F8F8',
    backgroundColorDark: ' #062541',

    radialGradient: `radial-gradient(circle at 50% 50%, #f5f6fa 0%, #44bd32 100%)`,

    linearGradient: `linear-gradient(to right, #3ed3ac 0%, #37b5e1 100%)`,
  },
  fontSizes: {
    xSmall: '14px',
    small: '16px',
    medium: '20px',
    large: '28px',
    xLarge: '64px',
  },
  spacing: value => `${4 * value}px`,

  shadows: {
    main: '1px 1px 14px#3ed3ac;',
    small: '1px 1px  5px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
};
