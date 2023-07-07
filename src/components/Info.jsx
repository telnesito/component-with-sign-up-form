import { Box, Typography } from '@mui/material'
import React from 'react'

const Info = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={'20px'}
      width={'90%'}
      alignItems={'center'}
    >
      <Typography
        fontFamily={'Poppins'}
        fontSize={'22px'}
        sx={{
          fontSize: {
            xl: "40px",
            lg: '40px',
            md: '40px',
            sm: '22px',
            xs: '22px'
          },
          textAlign: {
            xl: "left",
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center'
          },
          width: {
            xl: "70%",
            lg: '70%',
            md: '70%',
            sm: '70%',
            xs: '70%'
          }


        }}
        color={'white'}
        fontWeight={'700'}
        textAlign={'center'}
      >Learn to code by watching other</Typography>
      <Typography

        sx={{
          textAlign: {
            xl: "left",
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center'
          },
          width: {
            xl: "70%",
            lg: '70%',
            md: '70%',
            sm: '90%',
            xs: '90%'
          }
        }}


        fontWeight={400}
        color={'white'}
        fontSize={'16px'}

        fontFamily={'Poppins'}
        textAlign={'center'}

      >See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers thinks is invaluable</Typography>

    </Box>
  )
}

export default Info