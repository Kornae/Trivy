import * as React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Sheet from '@mui/joy/Sheet';

export default function ColorInversionFooter() {

    let Instagram = () => {
        window.location = 'https://www.instagram.com/2kmer/?hl=en'
    }

    let Twitter = () => {
        window.location = 'https://twitter.com/2kmer_?lang=en'
    }

    let GitHub = () => {
        window.location = 'https://github.com/Kornae'
    }

    return (
        <Sheet
            variant="solid"
            sx={{
                bgcolor: `transparent;`,
                flexGrow: 1,
                p: 2,
                height: '100%',
            }}
        >
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="navbar-brand brand" id="logo" href="#"> <span onClick={Instagram} style={{ margin: '0px 3px' }}><InstagramIcon fontSize="small" /></span> <span onClick={Twitter} style={{ margin: '0px 3px' }}><XIcon fontSize="small" /></span> <span onClick={GitHub} style={{ margin: '0px 3px' }}><GitHubIcon fontSize="small" /></span></span>
            <Divider sx={{ my: 2 }} />

            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { md: 'flex-start' },
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}

                >
                    <List
                        size="sm"
                        orientation="horizontal"
                        wrap
                        sx={{ flexGrow: 0, '--ListItem-radius': '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                            <ListSubheader sx={{ fontFamily: 'Montserrat', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>©2024 Trivy</ListSubheader>
                        </ListItem>
                    </List>

                </Box>
            </div>
        </Sheet>
    );
}