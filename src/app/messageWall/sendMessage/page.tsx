'use client'
import React from 'react';
import Image from 'next/image';
import { Box, TextField, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SendMessage() {
  // Use MUI's useTheme hook to access the current theme if you need to reference the theme in your styles
  const theme = useTheme();

  const mobileContainerStyle = {
    maxWidth: '390px',
    margin: '0 auto', // Center the container
    padding: '80px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper, // You can customize this color
  };

  // Replace any 'color' prop with your specific color if needed
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
        marginBottom: "60px"
      }}>
        <Image
          src="/assets/divider.svg"
          alt="divider"
          objectFit='contain'
          fill />
      </Box>

      {/* You can add custom styles using the `sx` prop as shown below */}
      <TextField
        label="留下你的留言 Content"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          borderColor: 'primary.main', // Use your color here
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.main', // Use your color here
            },
          },
        }}
      />
      <TextField
        label="留聯人名字 Name"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          borderColor: 'primary.main', // Use your color here
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.main', // Use your color here
            },
          },
        }}
      />
      {/* Add your color selection component here */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: 'primary.main', // Use your color here
          '&:hover': {
            bgcolor: 'primary.dark', // Use your color here
          },
        }}
      >
        OK! 送出
      </Button>
    </Container>
  );
}
