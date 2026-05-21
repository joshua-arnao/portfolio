import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
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
    mode: 'light',
    primary: { main: '#FFFFFF' },
    secondary: { main: '#854F0B' },
    text: {
      primary: '#111111',
      secondary: '#555555',
      tertiary: '#888888',
    },
    background: {
      default: '#F5F5F0',
      paper: '#FFFFFF',
      surface: '#F0EFE9',
      nav: 'rgba(245, 245, 240, 0.85)',
      hover: 'rgba(0,0,0,0.04)',
    },
    stage: {
      java: {
        main: '#185FA5',
        light: '#0C447C',
        bg: '#E6F1FB',
        border: '#B5D4F4',
      },
      ux: {
        main: '#1D9E75',
        light: '#085041',
        bg: '#E1F5EE',
        border: '#9FE1CB',
      },
      designer: {
        main: '#534AB7',
        light: '#3C3489',
        bg: '#EEEDFE',
        border: '#C5C2F0',
      },
      softskill: {
        main: '#8C6420',
        light: '#5C3D08',
        bg: '#FEF3DC',
        border: '#F5CC7F',
      },
      ai: {
        main: '#C2410C',
        light: '#7C2D12',
        bg: '#FFF7ED',
        border: '#FDBA74',
      },
    },
    divider: '#E5E5E0',
    border: {
      primary: '#DDDDDD',
      secondary: '#EEEEEE',
    },
    accent: {
      amber: '#854F0B',
      teal: '#1D9E75',
    },
  },
});
