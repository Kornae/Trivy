import * as React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';

export default function ColorInversionFooter() {
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
                        sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
                    >
                        <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                            <ListSubheader sx={{ fontFamily: 'Montserrat'}}>Topics</ListSubheader>
                            <List>
                                <ListItem sx={{ fontFamily: 'Montserrat' }}>
                                    Educational
                                </ListItem>
                                <ListItem sx={{ fontFamily: 'Montserrat' }}>
                                    Entertainment
                                </ListItem>
                                <ListItem sx={{ fontFamily: 'Montserrat' }}>
                                    Misc
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                            <ListSubheader sx={{ textAlign: 'left', fontFamily: 'Montserrat' }}>Other Projects</ListSubheader>
                            <List sx={{ '--ListItemDecorator-size': '32px' }}>
                                <ListItem>
                                    <ListItemButton>

                                        <a id='link' href='https://petsi-kornae.vercel.app/'>Petsi</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>

                                        <a id='link' href='https://italy-ten.vercel.app/'>Italy</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>

                                        <a id='link' href='https://weather-rho-olive.vercel.app/'>Weather</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>

                                        <a id='link' href='https://minimo-five.vercel.app/'>Minimo</a>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
            </div>
        </Sheet>
    );
}