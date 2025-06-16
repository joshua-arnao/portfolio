import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
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
    mode: 'light',
    primary: {
      main: '#fff',
<<<<<<< HEAD
      light: '#252525'
=======
      light: '#252525',
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
    },
    secondary: { main: '#252525' },
    text: {
      primary: '#000',
      secondary: '#fff',
<<<<<<< HEAD
      other: '#333'
    },
    background: {
      primary: '#88CCCA',
      secondary: { main: '#333', light: '#FBD38D' },
      nav: 'rgba(255, 255, 255, 0.35)',
      countdown: 'rgba(0, 0, 0, 0.16)'
    }
  }
=======
      other: '#333',
    },
    background: {
      primary: '#73AAA8',
      secondary: { main: '#333', light: '#FBD38D' },
      other: { primary: '#C71585', secondary: '#FF3CAC' },
      nav: 'rgba(255, 255, 255, 0.35)',
      countdown: 'rgba(0, 0, 0, 0.16)',
      hover: 'rgba(136, 204, 202, 0.10)',
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
