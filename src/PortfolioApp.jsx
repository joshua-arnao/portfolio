import { Box } from '@mui/material';
import { AppTheme } from './theme';
import { PortfolioRoutes } from './portfolio/routes/PortfolioRoutes';

export const PortfolioApp = () => {
  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'primary.main',
          color: 'secondary.main'
        }}
      >
        <PortfolioRoutes />
      </Box>
    </AppTheme>
  );
};
