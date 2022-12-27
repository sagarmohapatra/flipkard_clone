import React, { useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { authentication } from '../../service/api'
import DataContext from "../Context/DataProvider"


const Component = styled(Box)`
height:70vh;
width:90vh;

`
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:70vh;
width:30%;
padding:45px 35px;
height:321%;
& >p,&>h5{
    color:#ffffff;
    font-weight:600
}

`

const Wrraper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div, & button, & >p(
    margin-top:20px
)
`
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
border-radious:2px;
height:48px;
margin-top:29px


`

const RequestOtp = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
border-radious:2px;
height:48px;
box-shadow:0 2px 4px rgb(0 0 0/20%);
margin-top:11px
`
const Text = styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
margin-top:35px
`
const accountInitialValue = {
    login: {
        view: "login",
        heading: "Login",
        subheading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: "signup",
        heading: "Looks like you're new here!",
        subheading: "Sign up with your mobile number to get started"
    }
}


const LoginDialog = ({ open, setopen }) => {



    // console.log(open, "psaa");
    const handleClose = () => {
        setopen(false)
        toggleAccount(accountInitialValue.login)
    }
    const [account, toggleAccount] = React.useState(accountInitialValue.login)
    const [value, setvalue] = React.useState({
        first: "",
        last: "",
        user: "",
        eamil: "",
        password: "",
        phone: ""
    })

    const [accounts, setaccounts] = useContext(DataContext)
    const change = () => {
        toggleAccount(accountInitialValue.signup)
    }

    const onInputChange = (e) => {
        const copyValue = { ...value }
        copyValue[e.target.name] = e.target.value
        setvalue(copyValue)

    }
    const signup = async () => {
        const responce = await authentication(value)
        // console.log(data);
        if (!responce) return;
        handleClose();
        setaccounts(signup.first)
    }
    return (
        <Dialog open={open} onClose={handleClose} >
            <Component>
                <Box style={{ display: "flex", height: 100 }}>


                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography>{account.subheading}</Typography>
                    </Image>
                    {account.view === "login" ? <Wrraper>
                        <TextField variant="standard" label="Enter Email/Mobile Number" />
                        <TextField variant="standard" label="Enter Password" style={{ marginTop: "5px" }} />
                        <Text style={{ marginTop: "19px" }} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{ textAlign: "center ", marginTop: "10px" }}>OR</Typography>
                        <RequestOtp>Request OTP</RequestOtp>
                        <CreateAccount onClick={change} >New to Flipkart? Create an account</CreateAccount>
                    </Wrraper> :
                        <Wrraper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="first" value={value.first} label="Enter Firstname" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="last" value={value.last} label="Enter Lastname" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="user" value={value.user} label="Enter Username" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="eamil" value={value.eamil} label="Enter Email" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" value={value.password} label="Enter Password" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" value={value.phone} label="Enter Phone" />

                            <LoginButton onClick={signup}>Continue</LoginButton>
                        </Wrraper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog