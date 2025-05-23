import { Chip } from '@mui/material';

export const ChipSkill = ({ label, currentTheme }) => {
  const { primary, text } = currentTheme.palette;
  return (
    <Chip
      label={label}
      style={{ backgroundColor: primary, color: text.other }}
    />
  );
};
