import { Chip } from "@mui/material";

export const ChipSkill = ({ label, colorCategory = '', currentTheme }) => {
  const { frontend, productdesigner, softskill } = currentTheme.palette;
  const standarCategory = colorCategory.toLowerCase();

  return (
    <Chip
      label={label}
      style={{
        borderColor:
          standarCategory === 'frontend'
            ? `${frontend.main}`
            : standarCategory === 'productdesigner'
            ? `${productdesigner.main}`
            : standarCategory === 'softskill'
            ? `${softskill.main}`
            : "none",
      }}
      variant="outlined"
    />
  );
};
