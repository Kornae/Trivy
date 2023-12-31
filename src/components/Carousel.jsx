import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import entertainment from './Entertainment';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GradientCover from './Card';

const Carousel = () => {

let mouseEnter = () => {

}

    const settings = {
        infinite: true,
        useTransform: true,
        swipe: true,
        autoplay: false,
        focusOnSelect: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // Add this property
        centerPadding: '100px',
        prevArrow: <button id='btn' className='slick-prev btns' type="button"><KeyboardArrowLeftIcon sx={{ color: '#616160' }} /></button>,
        nextArrow: <button id='btn' className='slick-next btns' type="button"><NavigateNextIcon sx={{ color: '#616160' }} /></button>,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: '50px',
                },
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
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
                            onMouseEnter={mouseEnter}
                                focusRipple
                                key={image.title}
                            >
                                <a id='link' href={`/explore?${image.title}`} key={image.title}>
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
