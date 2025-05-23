import { useMediaQuery } from '@mui/material';

export const useIsSmallScreen = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return isSmallScreen;
};
