import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { ChipSkill } from './ChipSkill';

export const CardProject = ({ project, isSmallScreen, currentTheme }) => {
  const { title, description, imgCard, tools, type } = project;
  const [isHover, setIsHover] = useState(false);

  // console.log('type', type);
  console.log(type.length);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const { secondary, background, frontend, productdesigner } =
    currentTheme.palette;

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
                border: `2px solid`,
                borderImage: `
                
                linear-gradient(90deg, #ff00cc, #3333ff) 1`,
                padding: '20px 24px',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }
            : {
                border: `2px solid ${background.primary}`,
                padding: '20px 24px',
                transition: 'background-color 0.3s ease',
                backgroundColor: background.hover,
                cursor: 'pointer',
              }
        }
      >
        <Grid
          sm={6}
          style={{
            position: 'relative',
          }}
        >
          <img
            src={imgCard}
            alt='project'
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
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
            padding: isSmallScreen ? '' : '0px 0px 0px 8px',
            textDecoration: 'none',
          }}
        >
          <Box>
            <Typography variant='h6' component='div' color='secondary'>
              {title}
            </Typography>
            <Typography variant='body2' component='div' color='secondary'>
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
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
