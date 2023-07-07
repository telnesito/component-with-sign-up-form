import { Box } from "@mui/material"
import Info from "./components/Info"
import FormSignUp from "./components/FormSignUp"

function App() {

  return (
    <Box
      gap={'40px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      width={'100%'}
      bgcolor={'hsl(0, 100%, 74%) '}
      height={'auto'}
      minHeight={'800px'}
      boxSizing={'border-box'}
      sx={{
        gap: {
          xl: "0px",
          lg: '0px',
          md: '0px',
          sm: '40px',
          xs: '40px'
        },
        flexDirection: {
          xl: "row",
          lg: 'row',
          md: 'row',
          sm: 'column',
          xs: 'column'
        },
        minHeight: {
          xl: '100vh',
          lg: '100vh',
          md: '100vh',
          sm: '800px',
          xs: '850px'
        },
        backgroundImage: {
          xl: "url('./images/bg-intro-desktop.png')",
          lg: "url('./images/bg-intro-desktop.png')",
          md: "url('./images/bg-intro-desktop.png')",
          sm: "url('./images/bg-intro-mobile.png')",
          xs: "url('./images/bg-intro-mobile.png')"
        }

      }}

    >

      <Info />
      <FormSignUp />

    </Box>
  )
}

export default App
