import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/cor';

// import { lightTheme } from './index';

export const AppTheme = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
