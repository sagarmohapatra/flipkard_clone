import { AppBar, Toolbar, styled, Box, Typography, IconButton, ListItem, List, ListItemButton, ListItemIcon, ButtonBase } from '@mui/material'
import React from 'react'
import CustomButton from './CustomButton'
import Search from './Search'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';


const StyledHeader = styled(AppBar)`
background:#2874f0;
height:55
`
const ComponentBox = styled(Link)`
margin-left:12%;
line-height:0;
color:white
`

const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic

`

const PlusImage = styled("img")({
  width: 10,
  marginLeft: 2,
  height: 10

})

const CustomButtonWraper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block"
  }
}))



const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setopen] = React.useState(false)
  const handleOpen = () => {
    setopen(true)
  }
  const handleClose = () => {
    setopen(false)
  }

  const list = () => {
    <Box>
      <List>
        <ButtonBase>
          <ListItem button  >


            <CustomButton />

          </ListItem>
        </ButtonBase>
      </List>
    </Box>
  }
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton style={{ color: "inherit" }} onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>
        <Drawer open={open} onClose={handleClose} >
          {list()}

        </Drawer>
        <ComponentBox to="/">
          <img src={logoURL} style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>

            </SubHeading>
            <PlusImage src={subURL} />
          </Box>
        </ComponentBox>
        <Search />
        <CustomButtonWraper>
          <CustomButton />
        </CustomButtonWraper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header