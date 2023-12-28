import { Box } from '@mui/material'
import Image from 'next/image';


const FinalPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ mb: "10px" }}>
        <Image
          src="/assets/bird_books.svg"
          alt="A bird with books"
          width={230} height={240} />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Image
          src="/assets/finalPage_title.svg"
          alt="A bird with books"
          width={336}
          height={76}
        />
      </Box>

    </Box>
  );
};

export default FinalPage;