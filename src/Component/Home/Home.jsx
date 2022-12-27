import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { styled } from '@mui/system'
import { Box } from '@mui/material'
const Component = styled(Box)`
padding:20px 10px;
background:#ffffff
`
const Home = () => {
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
            </Component>

        </>
    )
}

export default Home