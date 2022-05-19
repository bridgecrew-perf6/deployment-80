import {Typography} from '@mui/material'
import "./App"

const MuiTypography = () => {
  return (
    <div className='app'>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>


      <Typography variant='subtitle1'>Sub Title1</Typography>
      <Typography variant='subtitle2'>Sub Title2</Typography>


      <Typography variant='body1'>loreum impsum</Typography>
      <Typography variant='body2'>loreum impsum</Typography>
    </div>
  )
}

export default MuiTypography
