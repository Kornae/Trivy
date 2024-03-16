import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function GradientCover(props) {
    return (
        <Card id="cards" sx={{ height: 'auto', width: 'auto', margin: '0 5px' }}>
            <CardCover >
                <img
                    id='cards'
                    src={props.cImg}
                    srcSet={props.cImg}
                    alt=""
                    onClick={props.click}
                />
            </CardCover>
            <CardCover
                id='cards'
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 40px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 240px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <div className='me-auto'>
                        <div id='card-text'>
                            <Typography sx={{ textAlign: 'left', fontFamily: 'Montserrat' }} level="title-md" textColor="#fff">
                                {props.title}
                            </Typography>
                        </div>
                        <div id='card-text'>
                            <Typography sx={{ textAlign: 'left', fontFamily: 'Montserrat' }} id='category' level="body-sm">
                                {props.topic}
                            </Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}