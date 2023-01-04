import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Box, height } from '@mui/system';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Countdown from 'react-countdown';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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
const Component = styled(Box)`
margim-top:10px;
background:#ffffff;
`
const Deal = styled(Box)`
padding:15px 20px;
display:flex;

`
const Timer = styled(Box)`
display:flex;
margi-left:10px;
align-item:center;
color:#7f7f7f;
`
const DealText = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const ViewAllButton = styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
font-weight:600;
`
const Image = styled("img")({
    width: "auto",
    height: 150
})

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;

`

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const render = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
    }
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {timer && <Timer>
                    <img src={timerURL} alt="timer" style={{ width: "24px" }} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={render} />
                </Timer>}
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}

                centerMode={true}
                keyBoardControl={true}
            >

                {
                    products.map(data => (
                        <Link to={`product/${data.id}`} style={{ textDecoration: "none" }}>
                            <Box style={{ padding: "25px 15px " }}>
                                <Image src={data.url} alt="product" />
                                <Text style={{ fontweight: 600, color: "#212121" }}>{data.title.shortTitle}</Text>
                                <Text style={{ color: "green" }}>{data.discount}</Text>
                                <Text style={{ color: "#212121", opacity: ".6 " }}>{data.tagline}</Text>

                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Component >
    )
}

export default Slide