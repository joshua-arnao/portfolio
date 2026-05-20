import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';
import { useIsSmallScreen } from '/src/hook/useSmallScreen';

export const PortfolioLayout = ({ toggleTheme, currentTheme }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: currentTheme.palette.background.default,
        minHeight: '100vh',
      }}
    >
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />

      <Box
        component='main'
        style={{
          marginTop: '80px',
          marginBottom: '60px',
          width: '100%',
          maxWidth: isSmallScreen ? '100%' : '600px',
          padding: isSmallScreen ? '0 16px' : '0 24px',
        }}
      >
        <Outlet currentTheme={currentTheme} />
      </Box>
    </Box>
  );
};
