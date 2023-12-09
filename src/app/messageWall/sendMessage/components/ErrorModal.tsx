import React from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ConfirmModal({ open, onClose, onConfirm, message }: {
  open: boolean,
  message: string,
  onClose?: () => void,
  onConfirm?: () => void
}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '30px 24px',
    outline: 'none',
    borderRadius: '20px', // Set border radius to 20px
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: 'blur(3px)'
      }}
      componentsProps={{
        backdrop: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }
        }
      }}
    >
      <Box sx={style}>
        <Box
          sx={{
            width: "108px",
            height: "83px",
            margin: '0 auto',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '14px'
          }}>
          <Image
            fill
            src="/assets/sendMessage_confirm_bird.svg"
            alt="bird" />
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: '20px', letterSpacing: '1.28px' }}>
          {message}
        </Box>

        <Box
          onClick={onConfirm}
          sx={{
            width: "130px",
            height: "53px",
            margin: '0 auto',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer'
          }}>
          <Image
            fill
            src="/assets/sendMessage_ok.svg"
            alt="ok" />
        </Box>
      </Box>
    </Modal>
  );
}
