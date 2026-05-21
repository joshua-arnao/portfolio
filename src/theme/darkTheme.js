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
      fontSize: '28px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '22px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontSize: '11px',
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
    primary: { main: '#121212' },
    secondary: { main: '#FBD38D' },
    text: {
      primary: '#FFFFFF',
      secondary: '#888888',
      tertiary: '#555555',
    },
    background: {
      default: '#121212',
      paper: '#1a1a1a',
      surface: '#1e1e1e',
      nav: 'rgba(18, 18, 18, 0.85)',
      hover: 'rgba(255,255,255,0.04)',
    },
    // Sistema de etapas
    stage: {
      java: {
        main: '#378ADD',
        light: '#85B7EB',
        bg: '#0c1a2e',
        border: '#185FA5',
      },
      ux: {
        main: '#5DCAA5',
        light: '#9FE1CB',
        bg: '#0d1f1a',
        border: '#1D9E75',
      },
      designer: {
        main: '#7F77DD',
        light: '#AFA9EC',
        bg: '#16102e',
        border: '#534AB7',
      },
      softskill: {
        main: '#E8A838',
        light: '#F5CC7F',
        bg: '#2a1f0a',
        border: '#8C6420',
      },
      ai: {
        main: '#F97316',
        light: '#FED7AA',
        bg: '#2a1500',
        border: '#C2410C',
      },
    },
    divider: '#222222',
    border: {
      primary: '#333333',
      secondary: '#2a2a2a',
    },
    accent: {
      amber: '#FBD38D',
      teal: '#5DCAA5',
    },
  },
});
