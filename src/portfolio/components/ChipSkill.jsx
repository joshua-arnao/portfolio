import { Chip } from '@mui/material';

export const ChipSkill = ({ label, colorCategory = '', currentTheme }) => {
  const { frontend, productdesigner, softskill } = currentTheme.palette;
  const standarCategory = colorCategory.toLowerCase();

  console.log('standarCategory', standarCategory);

  return (
    <Chip
      label={label}
      style={{
        borderColor:
          standarCategory === 'productdesigner'
            ? `${productdesigner.main}`
            : standarCategory === 'tech&tools'
            ? `${frontend.main}`
            : standarCategory === 'softskill'
            ? `${softskill.main}`
            : 'none',
      }}
      variant='outlined'
    />
  );
};
