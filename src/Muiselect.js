import React from 'react'
import { Stack,Box, MenuItem, TextField,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,Switch} from '@mui/material'

const Muiselect = () => {
    return (
        <Stack className='app'>
            <Stack>
        <Box   width='250px'>
            <TextField label='select-country' select fullWidth>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='AU'>Austraia</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
            </TextField>
        </Box>
        </Stack>
<Stack>
    <Box>
        <FormControl>
            <FormLabel id='job-experience-group-label'>
                Years of Experiance
            </FormLabel>
            <RadioGroup 
            name='job-experience-group'
            aria-labelledby='job-experience-group-label' row>
<FormControlLabel control={<Radio/>} label='0-3' value='0-3'/>
<FormControlLabel control={<Radio/>} label='4-8' value='4-8'/>
<FormControlLabel control={<Radio/>} label='9-15' value='9-15'/>
            </RadioGroup>
        </FormControl>
    </Box>
</Stack><br/>
<Stack>
    <Box>
        <FormControlLabel label='Dark Mode' control={<Switch/>}></FormControlLabel>
    </Box>
</Stack>

</Stack>
       

    )
}

export default Muiselect
