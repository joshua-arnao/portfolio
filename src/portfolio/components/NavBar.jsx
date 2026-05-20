import { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Avatar, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme } from '../../theme';
import { useIsSmallScreen } from '../../hook/useSmallScreen';

export const NavBar = ({ toggleTheme, currentTheme }) => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const isSmallScreen = useIsSmallScreen();
  const isDark = currentTheme === darkTheme;

  useEffect(() => {
    switch (true) {
      case location.pathname === '/':
        setValue(0);
        break;
      case location.pathname.startsWith('/projects'):
        setValue(1);
        break;
      default:
        setValue(0);
    }
  }, [location]);

  const { background, text, accent, border } = currentTheme.palette;

  const navLinkStyle = (index) => ({
    fontSize: '12px',
    fontWeight: value === index ? 500 : 400,
    color: value === index ? text.primary : text.secondary,
    background: value === index ? background.hover : 'transparent',
    padding: '5px 14px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.15s',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  });

  return (
    <Box
      position='fixed'
      style={{
        width: '100%',
        zIndex: 100,
        top: 0,
        background: background.nav,
        backdropFilter: 'blur(12px)',
        borderBottom: `0.5px solid ${border.secondary}`,
      }}
    >
      <Box
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: isSmallScreen ? '12px 16px' : '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar
            src='/assets/photos/logojac.png'
            sx={{ width: 22, height: 22 }}
          />
          <Typography
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: text.primary,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Joshua Arnao C.
          </Typography>
        </Box>

        {/* Links */}
        <Box style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
          <Link to='/' style={navLinkStyle(0)}>
            Inicio
          </Link>
          <Link to='/projects' style={navLinkStyle(1)}>
            Proyectos
          </Link>
        </Box>

        {/* Actions */}
        <Box style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <IconButton
            onClick={toggleTheme}
            size='small'
            style={{
              color: text.secondary,
              border: `0.5px solid ${border.primary}`,
              borderRadius: '8px',
              padding: '6px',
            }}
          >
            {isDark ? (
              <LightModeIcon style={{ fontSize: '15px' }} />
            ) : (
              <DarkModeIcon style={{ fontSize: '15px' }} />
            )}
          </IconButton>

          <Button
            variant='outlined'
            size='small'
            href='/assets/cv/joshua-arnao-cv.pdf'
            target='_blank'
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: accent.amber,
              borderColor: accent.amber,
              borderRadius: '8px',
              padding: '4px 12px',
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
