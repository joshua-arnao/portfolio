import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '16px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 800,
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '34px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: '24px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
    },
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#252525',
      light: '#252525',
    },
    secondary: { main: '#FFF' },
    text: {
      primary: '#FFF',
      secondary: '#000',
      other: '#FFFFF1',
    },
    background: {
      primary: '#88CCCA',
      secondary: { main: '#FBD38D', light: '#333' },
      other: { primary: '#FF3CAC', secondary: '#C71585' },
      nav: 'rgba(37, 37, 37, 0.50)',
      countdown: 'rgba(255, 255, 255, 0.16)',
      hover: 'rgba(136, 204, 202, 0.10)',
    },
    link: {
      main: '#FFF',
    },
    frontend: {
      main: '#F24E1E',
    },
    productdesigner: {
      main: '#8B5CF6',
    },
    softskill: {
      main: '#10B981',
    },
  },
});
