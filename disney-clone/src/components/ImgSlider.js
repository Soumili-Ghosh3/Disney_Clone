import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
     
    return (
        <Carousel>
            Image Slider
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)``
