import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import Image from 'next/image';
import colors from '@/constants/colors';
import Paper from '@mui/material/Paper';
import ZoomBounce from '@/app/_components/Transitions/ZoomBounce';
import FadeIn from '@/app/_components/Transitions/FadeIn';

export default function ConfirmSubmit({
  message,
  name,
  onConfirm,
  onReject,
  noteColor = '#F8E47E',
  readyToSubmit
}: {
  message: string,
  name: string,
  onConfirm: () => void
  onReject: () => void
  noteColor: string,
  readyToSubmit: boolean
}) {
  return (
    <Box maxWidth="600px" sx={{
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',

      p: 2
    }}>
      <ZoomBounce trigger={readyToSubmit} width='100%'>
        <Paper elevation={3} sx={{
          bgcolor: noteColor,
          padding: '24px 32px',
          mb: '40px',
          width: '100%',
          maxWidth: '360px',
          aspectRatio: '1 / 1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          wordBreak: 'break-word',
          color: colors.brown4,
          boxShadow: '0px 10px 15px 0px rgba(89, 74, 57, 0.08)'
        }}>
          <Typography variant="h6" component="div" sx={{
            fontWeight: '700',
            letterSpacing: '1.84px',
          }}>
            {message}
          </Typography>
          <Typography sx={{
            position: 'absolute',
            fontWeight: '500',
            bottom: '24px',
            letterSpacing: '1.6px',
            fontSize: '20px',
            right: '32px', // Align with the right padding of the Paper
          }}>
            {name}
          </Typography>
        </Paper>
      </ZoomBounce>
      <FadeIn delay={0.4}>
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
        <Box
          sx={{
            width: "175px",
            height: "38px",
            margin: '0 auto',
            overflow: 'hidden',
            position: 'relative',
            px: "56px"
          }}>
          <Image
            fill
            src="/assets/sendMessage_confirmSubmit_title.svg"
            alt="is the content confirmed title" />
        </Box>
        <Box
          sx={{
            width: "220px",
            height: "38px",
            margin: '0 auto',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '40px',
            marginTop: '-8px'
          }}>
          <Image
            fill
            src="/assets/sendMessage_confirmSubmit_subtitle.svg"
            alt="is the content confirmed subtitle" />
        </Box>
      </FadeIn>

      <FadeIn delay={0.9}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '320px' }}>
          <ImageButton
            src="/assets/sendMessage_confirmSubmit_yes.svg"
            activeImageSrc="/assets/sendMessage_confirmSubmit_yes_active.svg"
            onClick={onConfirm}
            {
            ...{
              width: "140px",
              height: "57px",
              margin: '0 auto',
              marginBottom: '40px',
              marginTop: '-8px',
              marginRight: '20px',
            }}

          />

          <ImageButton
            src="/assets/sendMessage_confirmSubmit_no.svg"
            activeImageSrc="/assets/sendMessage_confirmSubmit_no_active.svg"
            onClick={onReject}
            {
            ...{
              width: "140px",
              height: "57px",
              margin: '0 auto',
              marginBottom: '40px',
              marginTop: '-8px',
            }}

          />
        </Box>
      </FadeIn>
    </Box >
  )
}