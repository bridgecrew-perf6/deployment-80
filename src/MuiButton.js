import React from 'react'
import './App.css';
import {Stack, Button,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'


const MuiButton = () => {
  return (
    <div className='app'>
        <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
      <Button variant='text'>Text</Button>
      <Button variant='contained' href='http://google.com'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      </Stack>
<Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>primary</Button>
    <Button variant='contained' color='secondary'>secondary</Button>
    <Button variant='contained' color='warning'>warning</Button>
    <Button variant='contained' color='error'>Error</Button>
    <Button variant='contained' color='info'>InFo</Button>
    <Button variant='contained' color='success'>Success</Button>
</Stack>

<Stack display='block' spacing={2} direction='row'>
    <Button variant='contained'size='small'>small</Button>
    <Button variant='contained'size='medium' onClick={()=>alert('Clicked Medium')}>medium</Button>
    <Button variant='contained'size='large' disableRipple>large</Button>
</Stack>
<Stack spacing={2} direction='row'>
<Button variant='contained'startIcon={<SendIcon/>} disableElevation>send</Button>
<Button variant='contained'endIcon={<SendIcon/>}>send</Button>
<IconButton aria-label='send' color='success' size='large'>
    <SendIcon/>
</IconButton>
</Stack>
<Stack direction='row'>
<ButtonGroup 
variant='contained' 
orientation='vertical'
size='small'
color='secondary'
aria-aria-label='alignment button group'>
<Button onClick={()=> alert('Left Button')}>left</Button>
<Button >medium</Button>
<Button >right</Button>
</ButtonGroup>
</Stack>
<Stack direction='row'>
  <ToggleButtonGroup aria-label='text-formatting'
  size='small'
  color='primary'
  orientation='vertical'
  exclusive>
    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
  </ToggleButtonGroup>

</Stack>

      </Stack>

      
    </div>
  )
}

export default MuiButton
