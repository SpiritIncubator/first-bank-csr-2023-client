'use client'
import React from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SendMessage() {
  // Use MUI's useTheme hook to access the current theme if you need to reference the theme in your styles
  const theme = useTheme();

  const mobileContainerStyle = {
    maxWidth: '600px',
    margin: '0 auto', // Center the container
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`, // You can customize this color
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper, // You can customize this color
  };

  // Replace any 'color' prop with your specific color if needed
  return (
    <Container maxWidth="sm" sx={mobileContainerStyle}>
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
