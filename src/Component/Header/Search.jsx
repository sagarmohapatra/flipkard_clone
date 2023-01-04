import React, { useEffect } from 'react'
import { InputBase, styled, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../redux/action/productAction"
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
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
const ListWrraper = styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px
`
const Search = () => {
    const [text, settext] = React.useState("")
    const { products } = useSelector(state => state.getProducts)
    console.log(products);
    const dispatch = useDispatch()
    const getText = (text) => {
        settext(text)
    }
    console.log(text, "any");

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <SearchBox >
            <InputSearch
                placeholder='Search for Products,brands and more' onChange={(e) => getText(e.target.value)}
                value={text}
            />


            <SerachIcon>
                <SearchIcon />
            </SerachIcon>
            {
                text &&
                <ListWrraper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(val => (
                            <ListItem>
                                <Link to={`/product/${val.id}`}
                                    onClick={() => settext("")}
                                    style={{ color: "inherit" }}
                                >
                                    {val.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrraper>
            }
        </SearchBox>
    )
}

export default Search