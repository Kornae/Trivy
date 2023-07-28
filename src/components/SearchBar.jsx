

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import entertainment from './Entertainment';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export default function ControlledOpenSelect(props) {
    const [open, setOpen] = React.useState(false);



    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>

            <FormControl id='searchBar' sx={{ width: '75%', padding: '10px' }}>
            
                <InputLabel sx={{padding:'10px'}} id="demo-controlled-open-select-label"><BlurOnIcon /> Search </InputLabel>
                <Select onClick={props.click}
          
                    variant='standard'
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
     
                    label="All"

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>

                    {entertainment.map(items => {

                        const redirect = () => {
                            
                            window.location = `/explore?${items.title}`

                        }

                        return (



                            <MenuItem onClick={() => setTimeout(redirect, 500)} value={items.title}><span style={{padding:'10px'}}>{items.logo}</span>{items.title}</MenuItem>

                        )

                    })}

                </Select>
            </FormControl>
        </div>
    );
}