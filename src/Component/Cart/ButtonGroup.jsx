import React from 'react'
import { Button, styled, Box, ButtonGroup } from '@mui/material'
const Component = styled(ButtonGroup)`
margin-top:30px
`

const StyledButton = styled(Button)`
border-radius:50%
`
const ButtedGroup = () => {
    return (
        <Component>
            <StyledButton>-</StyledButton>
            <StyledButton>1</StyledButton>
            <StyledButton>-</StyledButton>
        </Component>
    )
}

export default ButtedGroup