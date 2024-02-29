import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { styled, useTheme } from '@mui/material/styles';

interface ColorOptionProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColorOption = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<ColorOptionProps>(({ theme, color, isSelected }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: color,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: '2px solid transparent', // Hide border by default
  position: 'relative',
  margin: '10px', // Margin around the circle to create space for the ring
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-10px', // Positions the pseudo-element outside of the color circle
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    borderRadius: '50%',
    border: isSelected ? `2px solid #B1AAA2` : '2px solid #E9E3D8',
    boxSizing: 'border-box',
  },
}));

interface ColorPickerProps {
  onColorChange: (color: string) => void;
  defaultColor: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange, defaultColor }) => {
  const theme = useTheme();
  const [selectedColor, setSelectedColor] = React.useState(defaultColor);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  const colors = ['#F8E47E', '#BBE691', '#ADE6E6', '#F3B8D4'];

  return (
    <>
      <Box sx={{ display: 'flex', gap: '20px', marginBottom: '10px' }} justifyContent="center">
        {colors.map((color) => (
          <ColorOption
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </Box>
      <Box sx={{
        width: "260px",
        height: "30px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <Image
          src="/assets/colorPicker_select_color.svg"
          alt="colorPicker_select_color"
          fill />
      </Box>
      <Box sx={{
        width: "278px",
        height: "30px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <Image
          src="/assets/stage5_choose_color.svg"
          alt="stage5_choose_color"
          fill />
      </Box>
    </>
  );
};

export default ColorPicker;
