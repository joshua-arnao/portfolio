import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';
import { useIsSmallScreen } from '/src/hook/useSmallScreen';

export const PortfolioLayout = ({ toggleTheme }) => {
  const isSmallScreen = useIsSmallScreen();

  console.log('dato', toggleTheme);

  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <NavBar toggleTheme={toggleTheme} />

      <Box
        component='main'
        style={{
          margin: '100px 0px ',
          width: isSmallScreen ? '360px' : '533px' // Ajusta el ancho según el tamaño de la pantalla
        }}
      >
        {/* {children} */}
        <Outlet />
      </Box>
    </Box>
  );
};
