import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import entertainment from './Entertainment';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Carousel = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <button id='btn' type="button"><KeyboardArrowLeftIcon sx={{ color: '#616160' }} /></button>,
        nextArrow: <button id='btn' type="button"><NavigateNextIcon sx={{ color: '#616160' }} /></button>,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
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
        height: 480,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 500,

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
                        const img = `url(${image.img})`;

                        return (

                            <ImageButton
                                focusRipple
                                key={image.title}
                            >
                                <a id='link' href={`/explore?${image.title}`} key={image.title}>
                                    <div id='content'>

                                        <div id='image' style={{
                                            backgroundImage: img,

                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}>
                                        </div>

                                        <div id='caption'>
                                            <div>
                                                <a id='link' href={`/explore?${image.title}`} key={image.title}><h6 id='item'>{image.title}</h6></a>

                                                <p id='price'>{image.category}</p>
                                            </div>
                                        </div>
                                    </div>
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
