import Image from 'next/image';
import Box from '@mui/material/Box';

import LoadingIcon from '/@/app/_assets/images/questionLoading.svg';

export default function Loading() {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
      <Image width={100} height={100} src="../../_assets/images/questionLoading.svg" alt="loading" />
      {/* loading.. */}
    </Box>
  )
}