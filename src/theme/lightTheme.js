import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '16px', // Cambiar el tamaño de los subtítulos h1
      fontFamily: 'Nunito, sans-serif', // Cambiar la fuente
      fontWeight: 800, // Cambiar el peso de los subtítulos h1
      lineHeight: 1.25
    },
    h2: {
      fontSize: '34px', // Cambiar el tamaño de los subtítulos h1
      fontFamily: 'Nunito, sans-serif', // Cambiar la fuente
      fontWeight: 700, // Cambiar el peso de los subtítulos h1
      lineHeight: 1.25
    },
    h3: {
      fontSize: '24px', // Cambiar el tamaño de los subtítulos h1
      fontFamily: 'Nunito, sans-serif', // Cambiar la fuente
      fontWeight: 700, // Cambiar el peso de los subtítulos h1
      lineHeight: 1.25
    },
    subtitle1: {
      fontSize: '12px', // Cambiar el tamaño de los subtítulos h1
      fontWeight: 500, // Cambiar el peso de los subtítulos h1
      lineHeight: 1.6,
      letterSpacing: 1.2,
      textTransform: 'uppercase'
    }
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff'
    },
    secondary: { main: '#252525' },
    link: {
      main: '#252525'
    }
  }
});
