import React from 'react'
import { Box, styled } from '@mui/system'
import { navData } from '../Contant/data'
import { Typography } from '@mui/material'

const WrapImage = styled(Box)`
display:flex;
margin: 55px 50px 0 50px;
justify-content:space-between
`
const SingleImage = styled(Box)`
padding:12px 8px;
text-align:center
`

const Paragraph = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
    return (
        <WrapImage>
            {
                navData.map(data => (
                    <SingleImage>
                        <img src={data.url} style={{ width: 64 }} />
                        <Paragraph>{data.text}</Paragraph>
                    </SingleImage>
                ))
            }
        </WrapImage>
    )
}

export default Navbar