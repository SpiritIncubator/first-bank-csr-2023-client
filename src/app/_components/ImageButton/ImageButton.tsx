import { useState } from 'react'
import { Box, BoxProps } from '@mui/material'
import Image from 'next/image';

interface ImageButtonProps {
  onClick: () => void,
  src: string,
  activeImageSrc?: string
}

export default function ImageButton({ onClick, src, activeImageSrc, ...boxProps }: ImageButtonProps & BoxProps) {
  const [confirmImageSrc, setConfirmImageSrc] = useState(src);

  const handleMouseDownOnConfirm = () => {
    setConfirmImageSrc(activeImageSrc || src);
  };

  const handleMouseUpOnConfirm = () => {
    setConfirmImageSrc(src);
  };


  return <Box sx={{
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    ...boxProps
  }}
    onClick={onClick}
    onMouseDown={handleMouseDownOnConfirm}
    onMouseUp={handleMouseUpOnConfirm}
    onMouseLeave={handleMouseUpOnConfirm}
    onTouchStart={handleMouseDownOnConfirm}
    onTouchEnd={handleMouseUpOnConfirm}>
    <Image
      src={confirmImageSrc}
      alt="image button"
      fill />
  </Box>
}