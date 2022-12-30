import { Typography, Box, Menu, MenuItem, styled } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from "../../Context/DataProvider"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component = styled(Menu)`
margin-top:5px; 
`

const Logout = styled(Typography)`
font-size:14px;
margin-left:20px;
`
const Profile = () => {
    const { accounts, setaccounts } = useContext(DataContext)
    const [open, setopen] = React.useState(false)
    const handleClose = () => {
        setopen(false)
    }
    const handleClick = (e) => {
        setopen(e.currentTarget)
    }
    const LogoutUser = () => {
        setaccounts("")
    }

    return (
        <>
            <Box>
                <Typography onClick={handleClick} style={{ marginTop: 3, cursor: "pointer" }}>{accounts}</Typography>
                <Component

                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}

                >
                    <MenuItem onClick={() => { handleClose(); LogoutUser() }} >
                        <PowerSettingsNewIcon color='primary' fontSize='small' />
                        <Logout>Logout</Logout>
                    </MenuItem>


                </Component>
            </Box>

        </>
    )
}

export default Profile