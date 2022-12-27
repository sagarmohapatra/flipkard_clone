import React from 'react'
import { InputBase, styled, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)`
background:#fff;
width:30.5%;
margin-left:10px;
border-radious:20px;
display:flex
`
const InputSearch = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset
`

const SerachIcon = styled(Box)`
color:blue;
padding-top:5px;
padding-right:10px;
display:flex

`
const Search = () => {
    return (
        <SearchBox >
            <InputSearch
                placeholder='Search for Products,brands and more' />
            <SerachIcon>
                <SearchIcon />
            </SerachIcon>
        </SearchBox>
    )
}

export default Search