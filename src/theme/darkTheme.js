import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
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
    mode: 'dark',
    primary: {
      main: '#252525',
      light: '#252525'
    },
    secundary: { main: '#FFF' },
    text: {
      primary: '#FFF',
      secundary: '#000',
      other: '#FFFFF1'
    },
    background: {
      primary: '#88CCCA',
      secundary: { main: '#FBD38D', light: '#333' },
      other: {primary:'#FF3CAC', secundary:'#C71585'},
      nav: 'rgba(37, 37, 37, 0.50)',
      countdown: 'rgba(255, 255, 255, 0.16)',
      hover: 'rgba(136, 204, 202, 0.10)'
    },
    link: {
      main: '#FFF'
    }
  }
});
