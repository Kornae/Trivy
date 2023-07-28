import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import entertainment from './Entertainment';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


const Carousel = () => {
    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <button type="button">Previous</button>,
        nextArrow: <button type="button">Next</button>,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };


    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 350,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 250,

        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.07,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
     
        },
    }));

    const ImageSrc = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '40px'

        },

    }));

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,

    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.3,
        transition: theme.transitions.create('opacity'),
        [theme.breakpoints.down('sm')]: {
            borderRadius: '40px'

        },

    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),

    }));

    return (
        <div className="carousel-container" >
            <Slider {...settings}>

                {entertainment.map((image) => {
                    return (

                      
                        <ImageButton
                            focusRipple
                            key={image.title}

                        >
                    
                            <ImageSrc style={{ backgroundImage: `url(${image.img})` }}  />


                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <a href={`/explore?${image.title}`} key={image.title}>                       
                            <Image>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >

                                    <Button style={{ color: 'inherit' }}>{image.title}</Button>
                                    <ImageMarked className="MuiImageMarked-root" />
                                </Typography>
                            </Image>
                            </a>
                        </ImageButton>
                       
                    )
                })}


            </Slider>
        </div>
    );
};

export default Carousel;
