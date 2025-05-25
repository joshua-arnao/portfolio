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
      main: '#fff',
      light: '#252525'
    },
    secundary: { main: '#252525' },
    text: {
      primary: '#000',
      secundary: '#fff',
      other: '#333'
    },
    background: {
      primary: '#73AAA8',
      secundary: { main: '#333', light: '#FBD38D' },
      other:{primary:'#C71585', secundary:'#FF3CAC'},
      nav: 'rgba(255, 255, 255, 0.35)',
      countdown: 'rgba(0, 0, 0, 0.16)',
      hover: 'rgba(136, 204, 202, 0.10)'
    }
  }
});
