import { Chip } from '@mui/material';

<<<<<<< HEAD
export const ChipSkill = ({ label, currentTheme }) => {
  const { primary, text } = currentTheme.palette;
  return (
    <Chip
      label={label}
      style={{ backgroundColor: primary, color: text.other }}
=======
export const ChipSkill = ({ label, colorCategory = '', currentTheme }) => {
  const { frontend, productdesigner, softskill } = currentTheme.palette;
  const standarCategory = colorCategory.toLowerCase();

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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
    />
  );
};
