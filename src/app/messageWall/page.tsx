

import { Box, Button, Paper, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';


interface NoteProps {
  color: string;
  text: string;
}

const notesData = [
  { id: 1, color: 'lightblue', text: 'Note 1' },
  { id: 2, color: 'lightgreen', text: 'Note 2' },
  { id: 3, color: 'yellow', text: 'Note 3' },
  // ... add more notes here
];


const Note: React.FC<NoteProps> = ({ color, text }) => (
  <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
    <Paper style={{ padding: '1rem', backgroundColor: color, height: '100%' }} elevation={3}>
      <Typography>{text}</Typography>
    </Paper>
  </Grid>
);

const MessageWall: React.FC = () => (
  <>
    {/* Image container */}
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        paddingY: '1rem', // adds padding top and bottom
      }}
    >
      <Image
        src="https://placehold.co/600x400" // The path to your image
        alt="Decorative"
        objectFit="cover"
        width="600"
        height="400"
      />
    </Box>

    {/* Title */}
    <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
      Your Title Here
    </Typography>

    {/* Notes grid container */}
    <Box
      sx={{
        px: { xs: 1, sm: 2, md: 3, lg: 4 }, // Responsive horizontal padding
        py: 2 // Fixed vertical padding
      }}
    >
      <Grid container spacing={2}>
        {notesData.map((note) => (
          <Note key={note.id} color={note.color} text={note.text} />
        ))}
      </Grid>
    </Box>
  </>
);

export default MessageWall;
