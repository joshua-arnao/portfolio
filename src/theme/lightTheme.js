import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '16px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 800,
      lineHeight: 1.25
    },
    h2: {
      fontSize: '34px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25
    },
    h3: {
      fontSize: '24px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25
    },
    subtitle1: {
      fontSize: '12px', 
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: 1.2,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: 1.2,
      textTransform: 'uppercase'
    }
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
      light: '#252525'
    },
    secondary: { main: '#252525' },
    text: {
      primary: '#000',
      secondary: '#fff',
      other: '#333'
    },
    background: {
      primary: '#73AAA8',
      secondary: { main: '#333', light: '#FBD38D' },
      other:{primary:'#C71585', secondary:'#FF3CAC'},
      nav: 'rgba(255, 255, 255, 0.35)',
      countdown: 'rgba(0, 0, 0, 0.16)',
      hover: 'rgba(136, 204, 202, 0.10)'
    },
    frontend: {
      main: '#3B82F6'
    },
    productdesigner:{
      main: '#8B5CF6'
    },
    softskill: {
      main: '#10B981'
    }
  }
});
