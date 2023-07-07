import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const FormSignUp = () => {

  const initialState = {
    firtsName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialState)

  const onSubmitForm = (e) => {
    e.preventDefault()


    console.log(credentials)
    setCredentials(initialState)

  }

  const getCredentials = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <Box
      width={'90%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      gap={'20px'}


    >

      <Box
        height={'80px'}
        boxShadow={'0px 6px 0px #00000040'}
        width={'90%'}
        bgcolor={'hsl(248, 32%, 49%)'}
        display={'flex'}
        alignItems={'center'}
        borderRadius={'10px'}
        justifyContent={'center'}


        sx={{
          transition: 'all .5s',
          "&:hover": {
            transition: 'all .5s',
            boxShadow: '0px 6px 10px #00000040'

          }
        }}
      >
        <Typography
          fontSize={'16px'}
          width={'80%'}
          textAlign={'center'}
          color={'white'}
          fontFamily={'Poppins'}
        ><b>Try it free 7 days</b> then $20/mo. thereafter</Typography>
      </Box>

      <Box
        onSubmit={onSubmitForm}
        component={'form'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'10px'}
        bgcolor={'white'}
        width={'90%'}
        paddingTop={'20px'}
        paddingBottom={'20px'}
        flexDirection={'column'}
        gap={'15px'}
        boxShadow={'0px 6px 0px #00000040'}

      >

        <TextField

          value={credentials.firtsName}
          error={credentials.firtsName ? false : true}
          onChange={({ target }) => getCredentials('firtsName', target.value)}

          autoComplete='off'
          required
          type='text'
          sx={{
            width: '90%'
          }}
          variant='outlined' placeholder='Firts name' />

        <TextField
          error={credentials.lastName ? false : true}
          value={credentials.lastName}
          onChange={({ target }) => getCredentials('lastName', target.value)}

          required
          type='text'

          sx={{
            width: '90%'
          }}
          autoComplete='off' variant='outlined' placeholder='Last name' />

        <TextField


          error={credentials.email ? false : true}
          value={credentials.email}
          onChange={({ target }) => getCredentials('email', target.value)}
          required
          type='email'

          sx={{
            width: '90%'
          }}
          autoComplete='off' variant='outlined' placeholder={'Email Address'} />

        <TextField
          error={credentials.password ? false : true}
          value={credentials.password}
          onChange={({ target }) => getCredentials('password', target.value)}
          required
          sx={{
            width: '90%'
          }}
          type='password'
          autoComplete='off' variant='outlined' placeholder={'Password'} />

        <Button
          type='submit'
          sx={{
            width: '90%',
            padding: '12px',
            bgcolor: 'hsl(154, 59%, 51%)',
            "&:hover": {
              bgcolor: 'hsl(154, 59%, 71%)'
            }
          }}
          variant='contained'>Claim your free trial</Button>

        <Typography
          textAlign={'center'}
          width={'90%'}
          fontFamily={'Poppins'}
          fontWeight={'400'}
          fontSize={'12px'}
          color={'hsl(246, 25%, 77%)'}
        > By clicking the button, you are agreeing to our <span
          style={{
            fontWeight: '700',
            color: 'hsl(0, 100%, 74%) '
          }}
        >Terms and Services</span></Typography>
      </Box>


    </Box>
  )
}

export default FormSignUp