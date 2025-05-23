// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button'
// import {
//   Button,
//   Avatar,
//   Container,
//   BottomNavigation,
//   BottomNavigationAction
// } from '@mui/material';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export const NavBar = () => {
//   // const [value, setValue] = useState(0)
//   // console.log('VALUE ->', value)
//   // Lee el valor inicial del sessionStorage o usa 0 si no está presente
//   const storedValue = sessionStorage.getItem('navBarValue') || 0;
// const [value, setValue] = useState(parseInt(storedValue, 10));

//   // Actualiza el sessionStorage cuando cambia el valor
//   useEffect(() => {
//     sessionStorage.setItem('navBarValue', value);
//   }, [value]);

//   return (
//     <Box
//       sx={{ flexGrow: 1 }}
//       position='fixed'
//       style={{ width: '100%', zIndex: '2' }}
//     >
//       <AppBar
//         position='static'
//         style={{
//           boxShadow: 'none',
//           background: 'rgba(37, 37, 37, 0.50)',
//           backdropFilter: 'blur(8px)',
//           alignItems: 'center'
//         }}
//       >
//         <Toolbar
//           disableGutters
//           style={{ width: '768px', display: 'flex', padding: '0px 8px' }}
//         >
//           <Container
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '24px',
//               margin: '0px',
//               padding: '0px'
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <Avatar
//                 src='/assets/photos/logojac.png'
//                 sx={{ width: 24, height: 24 }}
//               />
//               <Typography variant='h1' component='div'>
//                 Joshua Arnao C.
//               </Typography>
//             </Box>

//             <Box sx={{ width: 300 }}>
//               <BottomNavigation
//                 showLabels
//                 onChange={(e, newValue) => {
//                   setValue(newValue);
//                 }}
//                 style={{
//                   background: 'none',
//                   color: '#fff',
//                   display: 'flex',
//                   justifyContent: 'flex-start'
//                 }}
//               >
//                 <BottomNavigationAction
//                   label='About'
//                   style={
//                     value === 0
//                       ? {
//                           background: '#88CCCA',
//                           color: '#000',
//                           padding: '0px'
//                         }
//                       : { background: 'none', color: '#fff' }
//                   }
//                   component={Link}
//                   to='/'
//                 />

//                 <BottomNavigationAction
//                   label='Projects'
//                   style={
//                     value === 1
//                       ? { background: '#88CCCA', color: '#000' }
//                       : { background: 'none', color: '#fff' }
//                   }
//                   component={Link}
//                   to='/projects'
//                 />
//               </BottomNavigation>
//             </Box>
//           </Container>

//           <Button
//             variant='contained'
//             size='large'
//             style={{
//               boxShadow: 'none',
//               background: '#FBD38D',
//               color: '#000',
//               paddingLeft: '33px'
//             }}
//             startIcon={
//               <LightModeIcon style={{ width: '24px', marginRight: '0px' }} />
//             }
//           />
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

import { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { useIsSmallScreen } from '../../hook/useSmallScreen';

import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme } from '../../theme';

export const NavBar = ({ toggleTheme, currentTheme }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Almacena el valor de la página actual en el almacenamiento local
    localStorage.setItem('navBarValue', value);
  }, [value]);

  useEffect(() => {
    // Cuando la ubicación cambie, actualiza el valor basado en la ruta actual
    switch (true) {
      case location.pathname === '/':
        setValue(0);
        break;
      case location.pathname.startsWith('/projects'):
        setValue(1);
        break;
      default:
        setValue(0); // Valor predeterminado para otras rutas
        break;
    }
  }, [location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setValue(value === 1 ? 1 : 0);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    setValue(value === 0 ? 0 : 1);
  };

  const isSmallScreen = useIsSmallScreen();

  const { primary, text, background } = currentTheme.palette;
  return (
    <Box
      sx={{ flexGrow: 1 }}
      position='fixed'
      style={{ width: '100%', zIndex: '2' }}
    >
      <AppBar
        position='static'
        style={{
          boxShadow: 'none',
          background: background.nav,
          backdropFilter: 'blur(8px)',
          alignItems: 'center'
        }}
      >
        <Toolbar
          disableGutters
          style={{
            width: isSmallScreen ? '100%' : '600px',
            display: 'flex',
            padding: '0px 8px'
          }}
        >
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              margin: '0px',
              padding: '0px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar
                src='/assets/photos/logojac.png'
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant='h1' component='div'>
                Joshua Arnao C.
              </Typography>
            </Box>

            {/* Menú */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end'
              }}
            >
              <IconButton
                aria-label='night'
                style={{ color: background.secondary.main }}
                onClick={toggleTheme}
              >
                {currentTheme === darkTheme ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>

              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    // Estilo para el contenedor del menú desplegable
                    background: primary.main // Cambia el color del fondo del menú desplegable
                  }
                }}
              >
                <MenuItem
                  component={Link}
                  to='/'
                  onClick={handleCloseNavMenu}
                  style={
                    value === 0
                      ? {
                          background: background.primary,
                          color: text.secondary
                        }
                      : { background: 'none', color: text.primary }
                  }
                >
                  About
                </MenuItem>
                <MenuItem
                  component={Link}
                  to='/projects'
                  onClick={handleCloseNavMenu}
                  style={
                    value === 1
                      ? {
                          background: background.primary,
                          color: text.secondary
                        }
                      : { background: 'none', color: text.primary }
                  }
                >
                  Projects
                </MenuItem>
              </Menu>
            </Box>

            {/* Páginas */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                width: '300px'
              }}
            >
              <BottomNavigation
                showLabels
                onChange={(e, newValue) => {
                  setValue(newValue);
                }}
                style={{
                  background: 'none',
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                <BottomNavigationAction
                  label='About'
                  style={
                    value === 0
                      ? {
                          background: background.primary,
                          color: text.secondary,
                          padding: '0px'
                        }
                      : { background: 'none', color: text.primary }
                  }
                  component={Link}
                  to='/'
                />

                <BottomNavigationAction
                  label='Projects'
                  style={
                    value === 1
                      ? {
                          background: background.primary,
                          color: text.secondary
                        }
                      : { background: 'none', color: text.primary }
                  }
                  component={Link}
                  to='/projects'
                />
              </BottomNavigation>
            </Box>
          </Container>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <Button
              variant='contained'
              size='large'
              style={{
                boxShadow: 'none',
                background: background.secondary.main,
                color: primary.main,
                paddingLeft: '33px'
              }}
              startIcon={
                currentTheme === darkTheme ? (
                  <LightModeIcon
                    style={{ width: '24px', marginRight: '0px' }}
                  />
                ) : (
                  <DarkModeIcon style={{ width: '24px', marginRight: '0px' }} />
                )
              }
              onClick={toggleTheme}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
