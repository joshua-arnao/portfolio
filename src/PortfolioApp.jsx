import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { AppTheme, darkTheme, lightTheme } from './theme';
import { PortfolioRoutes } from './portfolio/routes/PortfolioRoutes';
import { useEffect, useState } from 'react';

export const PortfolioApp = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('preferredTheme');
    if (storedTheme) {
      setCurrentTheme(storedTheme === 'light' ? lightTheme : darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
    localStorage.setItem(
      'preferredTheme',
      currentTheme === darkTheme ? 'light' : 'dark'
    );
  };

  return (
    <AppTheme theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'primary.main',
          color: 'secondary.main'
        }}
      >
        <PortfolioRoutes
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
      </Box>
    </AppTheme>
  );
};
