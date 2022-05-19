import React from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material'
import './App.css'
import { useState } from 'react'
const Textfield = () => {
    const[value,setValue]=useState('')
  return (
      <div className='app'>
   <Stack  spacing={4}>
<Stack spacing={2} direction='row'>
<TextField label='Name'variant='outlined'/>
<TextField label='Name'variant='filled'/>
<TextField label='Name'variant='standard'/>
</Stack>
<Stack  spacing={2} direction='row'>
<TextField label='small secondaray' variant='outlined' size='small' color='secondary'/>

</Stack>
<Stack  spacing={2} direction='row'>
    <TextField label='FormInput' 
    required value={value} 
    onChange={(e)=>setValue(e.target.value)}
     error={!value}
     helperText={(!value)? 'Required':'Do Not Share Your Password With Anyone'}/>
    <TextField label='password'  type='password' helperText='Do not share your password with anyone'/>
    <TextField label='Read only'  InputProps={{readonly:true}}/>
</Stack>
<Stack  spacing={2} direction='row'>
<TextField label='Amount' InputProps={{
    startAdornment:<InputAdornment position='start'>$</InputAdornment>
}} />
<TextField label='weight' InputProps={{
    endAdornment:<InputAdornment position='end'>kg</InputAdornment>
}} />

</Stack>

   </Stack>

   </div>
  )
}

export default Textfield
