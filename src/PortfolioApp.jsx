import { Box, CssBaseline } from '@mui/material';
import { AppTheme, darkTheme, lightTheme } from './theme';
import { PortfolioRoutes } from './portfolio/routes/PortfolioRoutes';
import { useEffect, useState } from 'react';
import { wakeUpServer } from './api/projectsApi';

const PING_INTERVAL = 10 * 60 * 1000;

export const PortfolioApp = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    wakeUpServer();

    const interval = setInterval(() => {
      wakeUpServer();
    }, PING_INTERVAL);

    const storedTheme = localStorage.getItem('preferredTheme');
    if (storedTheme) {
      setCurrentTheme(storedTheme === 'light' ? lightTheme : darkTheme);
    }

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const next = currentTheme === darkTheme ? lightTheme : darkTheme;
    setCurrentTheme(next);
    localStorage.setItem(
      'preferredTheme',
      next === darkTheme ? 'dark' : 'light',
    );
  };

  return (
    <AppTheme theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: currentTheme.palette.background.default,
          color: currentTheme.palette.text.primary,
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
