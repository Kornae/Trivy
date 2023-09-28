import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ColorInversionFooter() {
    return (
        <Sheet
            variant="solid"
            sx={{
                bgcolor: `#f8f9fa`,
                flexGrow: 1,
                p: 2,

            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>


                <IconButton variant="plain" color='neutral'>
                    <a id='link' href='https://github.com/Kornae'><GitHubIcon /></a>
                </IconButton>
                <IconButton variant="plain" color='neutral'>
                    <a id='link' href='https://www.linkedin.com/in/kornae-m-a69a3b125/'> <LinkedInIcon /></a>
                </IconButton>

            </Box>
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
                            <ListSubheader>Topics</ListSubheader>
                            <List>
                                <ListItem>
                                    Educational
                                </ListItem>
                                <ListItem>
                                    Entertainment
                                </ListItem>
                                <ListItem>
                                    Misc
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                            <ListSubheader>Other Projects</ListSubheader>
                            <List sx={{ '--ListItemDecorator-size': '32px' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src="/static/branding/product-core-dark.svg"
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        <a id='link' href='https://petsi-kornae.vercel.app/'>Petsi</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src="/static/branding/product-advanced-dark.svg"
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        <a id='link' href='https://italy-ten.vercel.app/'>Italy</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src="/static/branding/product-toolpad-dark.svg"
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        <a id='link' href='https://weather-rho-olive.vercel.app/'>Weather</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src="/static/branding/product-designkits-dark.svg"
                                                width="24"
                                            />
                                        </ListItemDecorator>
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