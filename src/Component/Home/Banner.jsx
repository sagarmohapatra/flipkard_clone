import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../Contant/data';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: 280,
    [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        height: 180
    }
}))

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = () => {
    return (
        <ThemeProvider theme={theme}>
            <Carousel responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                slidesToSlide={1}
            >
                {
                    bannerData.map(data => (
                        <Image src={data.url} alt="banner" />
                    ))
                }
            </Carousel>
        </ThemeProvider>
    )
}

export default Banner