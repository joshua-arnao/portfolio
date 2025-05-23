import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useState } from 'react';
import { ChipSkill } from './ChipSkill';
import { darkTheme } from '../../theme/darkTheme';

export const CardProject = ({ project, isSmallScreen, currentTheme }) => {
  const { title, description, imgCard, tools } = project;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

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
            padding: isSmallScreen ? '' : '0px 0px 0px 16px'
          }}
        >
          <Box>
            <Typography variant='h6' component='div' color='secondary'>
              {title}
            </Typography>
            <Typography variant='body2' component='div' color='secondary'>
              {description}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
            {tools.map((tool, index) => (
              <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
