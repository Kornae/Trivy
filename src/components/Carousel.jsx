import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import entertainment from './Entertainment';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GradientCover from './Card';

const Carousel = (props) => {

    const [state, setState] = useState(false)

    function handleClick() {
        setState(true)
    }

    if (state === true) {

    }

    const settings = {
        infinite: true,
        useTransform: true,
        swipe: true,
        autoplay: false,
        focusOnSelect: true,
        autoplaySpeed: 3600,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        cssEase: 'ease',
        centerPadding: '250px',
        prevArrow: <button id='btn' className='slick-prev btns' type="button"><KeyboardArrowLeftIcon sx={{ color: '#616160' }} /></button>,
        nextArrow: <button id='btn' className='slick-next btns' type="button"><NavigateNextIcon sx={{ color: '#616160' }} /></button>,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 0, // Set to 0 for continuous gliding
                    arrows: false,
                    centerPadding: '50px',
                },
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 0,
                    arrows: false,
                    centerPadding: '50px',
                },
            },
        ],
    };


    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 'auto',

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
    return (
        <div className="carousel-container" >
            <Slider {...settings}>
                {
                    entertainment.map((image) => {

                        return (

                            <ImageButton
                                focusRipple
                                key={image.title}
                            >
                                <a onClick={handleClick} id='link' href={`/explore?${image.title}`} key={image.title}>
                                    <GradientCover
                                        cImg={image.img}
                                        title={image.title}
                                        topic={image.category}
                                    />
                                </a>
                            </ImageButton>

                        )
                    })
                }

            </Slider>
        </div>
    );
};

export default Carousel;
