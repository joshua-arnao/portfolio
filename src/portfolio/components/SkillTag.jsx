import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const SkillTag = ({ uniqueType, currentTheme }) => {
  const { frontend, productdesigner, softskill } = currentTheme.palette;
  const standarUniqueType = uniqueType.toLowerCase();

  return (
    <Box display='flex' flexDirection='row' alignItems='center' gap='4px'>
      <Box
        classname='circle'
        style={{
          width: '5px',
          height: '5px',
          background:
            standarUniqueType === 'tech&tools'
              ? `${frontend.main}`
              : standarUniqueType === 'productdesigner'
              ? `${productdesigner.main}`
              : standarUniqueType === 'softskill'
              ? `${softskill.main}`
              : 'none',
          borderRadius: '50%',
        }}
      ></Box>
      <Typography variant='caption' component='div'>
        {uniqueType}
      </Typography>
    </Box>
  );
};
