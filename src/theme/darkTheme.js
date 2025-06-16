import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#252525',
<<<<<<< HEAD
      light: '#252525'
=======
      light: '#252525',
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
    },
    secondary: { main: '#FFF' },
    text: {
      primary: '#FFF',
      secondary: '#000',
<<<<<<< HEAD
      other: '#FFFFF1'
=======
      other: '#FFFFF1',
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
    },
    background: {
      primary: '#88CCCA',
      secondary: { main: '#FBD38D', light: '#333' },
<<<<<<< HEAD
      nav: 'rgba(37, 37, 37, 0.50)',
      countdown: 'rgba(255, 255, 255, 0.16)'
    },
    link: {
      main: '#FFF'
    }
  }
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
});
