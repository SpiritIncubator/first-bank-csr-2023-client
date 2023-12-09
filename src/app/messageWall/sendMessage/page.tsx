'use client'
import React from 'react';
import Image from 'next/image';
import { Box, Button, Container } from '@mui/material';
import ColorPicker from '@/components/ColorPicker';
import Modal from '@mui/material/Modal';
import colors from '@/constants/colors';
import ErrorModal from './components/ErrorModal'
import { useTheme } from '@mui/material/styles';
import { error } from 'console';

export default function SendMessage() {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errorModalOpen, setErrorModalOpen] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const theme = useTheme();

  const mobileContainerStyle = {
    maxWidth: '390px',
    margin: '0 auto', // Center the container
    padding: '80px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
  };

  const onSubmit = () => {
    if (!name) {
      setErrorMessage('請輸入你的名字')
    }
    if (message.length < 10) {
      setErrorMessage('請輸入最少十個字')
    }

  }

  const onConfirmError = () => {
    setErrorMessage('')
  }

  return (
    <Container maxWidth="sm" sx={mobileContainerStyle}>
      <Box sx={{
        width: "230px",
        height: "240px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Image
          src="/assets/bird_books.png"
          alt="bird_books"
          objectFit='contain'
          fill
          style={{ marginBottom: "16px" }} />
      </Box>
      <Box sx={{
        width: "250px",
        height: "60px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Image
          src="/assets/sendMessage_title.svg"
          alt="sendMessage_title"
          objectFit='contain'
          fill
          style={{ marginBottom: "16px" }} />
      </Box>
      <Box sx={{
        width: "240px",
        height: "45px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Image
          src="/assets/sendMessage_subTitle.svg"
          alt="sendMessage_subTitle"
          objectFit='contain'
          fill
          style={{ marginTop: "-12px" }} />
      </Box>

      <Box sx={{
        width: "342px",
        height: "5px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
        marginTop: "60px",
        marginBottom: "20px"
      }}>
        <Image
          src="/assets/divider.svg"
          alt="divider"
          objectFit='contain'
          fill />
      </Box>

      <Box
        component="form"
        sx={{
          width: '100%',
          marginBottom: '40px',
          '& .input-base': {
            width: '100%',
            padding: '20px 24px',
            fontSize: '1rem',
            borderRadius: '20px',
            border: `2px solid ${colors.brown1}`,
            backgroundColor: colors.brown,
            margin: '8px 0',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'border-color 0.2s ease-in-out',
            letterSpacing: '1.28px',
            '&:focus': {
              borderColor: colors.brown4,
            },
            '&::placeholder': {
              color: 'rgba(0, 0, 0, 0.6)',
            },
          },
          '& .textarea-base': {
            letterSpacing: '1.28px',
            width: '100%',
            padding: '20px 24px',
            fontSize: '1rem',
            borderRadius: '20px',
            border: `2px solid ${colors.brown1}`,
            backgroundColor: colors.brown,
            resize: 'none',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'border-color 0.2s ease-in-out',
            '&:focus': {
              borderColor: colors.brown4,
            },
          },
          '& .input-base::placeholder, & .textarea-base::placeholder': {
            color: colors.brown2, // Theme color for placeholder
            opacity: 1, // Full opacity
          },
        }}
      >
        <Box sx={{
          width: "202px",
          height: "30px",
          margin: '0 auto',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: "10px",
          display: 'flex'
        }}>
          <Image
            width="129"
            height="38"
            src="/assets/sendMessage_write.svg"
            alt="sendMessage_write"
            style={{ marginRight: '8px' }}
          />
          <Image
            width="65"
            height="38"
            src="/assets/sendMessage_content.svg"
            alt="sendMessage_content"

          />
        </Box>
        <textarea
          placeholder="請寫下你會如何在生活中實踐永續，或是今天的觀展心得吧！（字數限制50字） "
          className="textarea-base"
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Box sx={{
          width: "202px",
          height: "30px",
          margin: '0 auto',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: "10px",
          marginTop: "30px",
          display: 'flex'
        }}>
          <Image
            width="129"
            height="38"
            src="/assets/sendMessage_writeName.svg"
            alt="sendMessage_writeName"
            style={{ marginRight: '8px' }}
          />
          <Image
            width="45"
            height="38"
            src="/assets/sendMessage_name.svg"
            alt="sendMessage_name"

          />
        </Box>
        <input
          type="text"
          placeholder="請留下你的大名吧！"
          className="input-base"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Continue with your form elements and submit button */}
      </Box>

      <ColorPicker
        onColorChange={(color: string) => console.log(color)}
        defaultColor="#F8E47E"
      />

      <Box sx={{
        width: "200px",
        height: "67px",
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
        marginTop: "50px",
        cursor: 'pointer'
      }}
        onClick={onSubmit}>
        <Image
          src="/assets/sendMessage_confirm.svg"
          alt="divider"
          fill />
      </Box>

      {errorMessage &&
        <ErrorModal
          message={errorMessage}
          open={!!errorMessage}
          onConfirm={onConfirmError} />}
    </Container >
  );
}

