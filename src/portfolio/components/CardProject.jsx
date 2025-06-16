import { Box, Stack, Typography } from '@mui/material';
<<<<<<< HEAD
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useState } from 'react';
import { ChipSkill } from './ChipSkill';
import { darkTheme } from '../../theme/darkTheme';

export const CardProject = ({ project, isSmallScreen, currentTheme }) => {
  const { title, description, imgCard, tools } = project;
  const [isHover, setIsHover] = useState(false);

=======
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { ChipSkill } from './ChipSkill';

export const CardProject = ({ project, isSmallScreen, currentTheme }) => {
  const { title, description, imgCard, tools, type } = project;
  const [isHover, setIsHover] = useState(false);

  // console.log('type', type);
  console.log(type.length);

>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

<<<<<<< HEAD
=======
  const { secondary, background, frontend, productdesigner } =
    currentTheme.palette;

>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        rowGap={1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          !isHover
            ? {
<<<<<<< HEAD
                border:
                  currentTheme === darkTheme
                    ? '1px solid #fff'
                    : '1px solid #333',
                padding: '20px 24px',
                borderRadius: '20px',
                transition: 'background-color 0.3s ease'
              }
            : {
                border:
                  currentTheme === darkTheme
                    ? '1px solid #fff'
                    : '1px solid #333',
                padding: '20px 24px',
                borderRadius: '20px',
                transition: 'background-color 0.3s ease',
                backgroundColor:
                  currentTheme === darkTheme
                    ? 'rgb(255, 255, 255, 0.05)'
                    : 'rgb(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }
        }
      >
        <Grid sm={6} style={{ height: '192px' }}>
          <img
            src={imgCard}
            alt='project'
            style={{ width: '100%', height: '192px', borderRadius: '10px' }}
=======
                border: `2px solid`,
                borderImage: `
                linear-gradient(45deg, ${frontend.main}, ${productdesigner.main}) 1`,
                padding: '20px 24px',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
                width: '328px',
              }
            : {
                border: `2px solid ${background.primary}`,
                padding: '20px 24px',
                transition: 'background-color 0.3s ease',
                backgroundColor: background.hover,
                cursor: 'pointer',
                width: '328px',
              }
        }
      >
        <Grid
          sm={6}
          style={{
            position: 'relative',
            width: '276px',
          }}
        >
          <img
            src={imgCard}
            alt='project'
            style={{
              width: '276px',
              height: '100%',
              borderRadius: '10px',
            }}
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
          />
        </Grid>

        <Grid
          item
          sm={6}
          gap={2}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          id='prueba'
          style={{
<<<<<<< HEAD
            padding: isSmallScreen ? '' : '0px 0px 0px 16px'
=======
            padding: isSmallScreen ? '' : '0px 0px 0px 8px',
            textDecoration: 'none',
            width: '100%',
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
          }}
        >
          <Box>
            <Typography variant='h6' component='div' color='secondary'>
              {title}
            </Typography>
            <Typography variant='body2' component='div' color='secondary'>
<<<<<<< HEAD
              {description}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
            {tools.map((tool, index) => (
              <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
            ))}
=======
              {description.length > 90
                ? `${description.slice(0, 90)}...`
                : description}
            </Typography>
          </Box>

          <Stack direction='row' spacing={0.5} useFlexGap flexWrap='wrap'>
            {tools.slice(0, 3).map((tool, index) => (
              <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
            ))}
            {tools.length > 3 && (
              <ChipSkill key='more' label='...' currentTheme={currentTheme} />
            )}
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
