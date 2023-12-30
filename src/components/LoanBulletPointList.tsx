'use client'
// BulletPointList.tsx
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const CustomBullet = ({ number }: { number: string }) => {
  return (
    <Box
      sx={{
        width: '76px',
        height: '76px',
        borderRadius: '50%',
        backgroundColor: '#B8C318',
        position: 'relative',
        color: '#594A39',
        fontSize: '52px',
        fontWeight: 500,
        lineHeight: '190%', // 98.8px
        letterSpacing: '4.16px',
      }}
    >
      <Box component="span"
        position="absolute" top="50%" left="50%"
        sx={{
          fontSize: '52px',
          color: "white",
          transform: "translate(-40%, -50%)"
        }}>
        {number}
      </Box>
    </Box>
  );
};

// Define the custom styles for the list items
const listItemStyle = {
  color: '#594A39',
  fontSize: '52px',
  fontWeight: 500,
  lineHeight: '190%', // 98.8px
  letterSpacing: '4.16px',
};

const BulletPointList: React.FC = () => {
  // Replace this array with your actual list items
  const listItems = [
    '購置符合我國「綠建築標章」規範或各縣市政府規範之不動產。',
    '修繕使用之建材符合我國「綠建材標章」規範之產品。',
    '購置符合「節能標章」、「省水標章」或「綠建材標章」之產品，或購置符合政府補助之汽機車等。',
    '購置符合「再生能源熱利用獎勵補助辦法」之產品。',
    '裝置符合各縣市政府補助之「太陽光電系統」之產品。'
  ];

  return (
    <List sx={{ listStyle: 'none', padding: 0 }}>
      {listItems.map((text, index) => (
        <ListItem key={index} sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Box sx={{ mr: "32px" }}>
            <CustomBullet number={`${index + 1}`} />
          </Box>
          <Typography maxWidth="1348px" sx={listItemStyle}>{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default BulletPointList;
