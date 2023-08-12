import { Box, Grid, Link, Stack, Typography, Button, Drawer, IconButton, Divider } from '@mui/material'
import { Facebook, GitHub, LinkedIn, Padding, Twitter,Menu ,Clear} from '@mui/icons-material';
import { motion } from "framer-motion"
import logo from "./Images/wm-logo.png"
import myImage from "./Images/pic.jpg"
import React, { useState } from 'react'
import zIndex from '@mui/material/styles/zIndex';
import { alignProperty } from '@mui/material/styles/cssUtils';

const Header = () => {
    const [open,setOpen] = useState(false);
        const navMenu = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "#about",
            name: "About"
        },
        {
            path: "#education",
            name: "Education"
        },
        {
            path: "#skils",
            name: "Skills"
        },
        {
            path: "#contact",
            name: "Contact"
        }

    ]
    return (<>
        <Box display="flex" flexDirection="column" justifyContent="center" width="100%" height="100vh" >
            <Box bgcolor="#142033 " display={{xs:"none",lg:"flex"}} justifyContent="space-between" alignItems='center' pl="10%" pr="10%" width="100%"  pt={{lg:1,xl:3}}>
                <Box>
                    {
                        navMenu.map((item, index) => {
                            return <Link component="a" underline='none' href={item.path} sx={{
                                color: '#ffffff', padding: '0px 30px 30px 0', fontWeight: "bolder", transition: "0.5s ease-in",
                                "&:hover": {
                                    color: '#1976d2'
                                }
                            }}>
                                {item.name}
                            </Link>
                        })
                    }

                </Box>
                {/* <Typography variant="h3" fontStyle="" fontSize="2rem" fontWeight="bolder" color="White" >W|MEHAR</Typography> */}
                <img src={logo} alt="my_logo_image" height="70px" />
                <Stack direction="row" spacing={3} width="30%" pl="10%">
                    {/* ////social icons */}
                    <GitHub sx={{
                        color: "white", transition: "0.5s ease-in",
                        "&:hover": {
                            color: '#1976d2',
                            cursor: "pointer"

                        }
                    }}

                    ></GitHub>
                    <LinkedIn sx={{
                        color: "white", transition: "0.5s ease-in",
                        "&:hover": {
                            color: '#1976d2',
                            cursor: "pointer"

                        }
                    }} ></LinkedIn>
                    <Twitter sx={{
                        color: "white", transition: "0.5s ease-in",
                        "&:hover": {
                            color: '#1976d2',
                            cursor: "pointer"

                        }
                    }} ></Twitter>
                    <Facebook sx={{
                        color: "white", transition: "0.5s ease-in",
                        "&:hover": {
                            color: '#1976d2',
                            cursor: "pointer"

                        }
                    }} ></Facebook>
                </Stack>
            </Box>
            {/* ///responsive */}
            <Box display={{xs:"flex",lg:"none"}}  justifyContent="space-between" alignItems="center" bgcolor="#142033 " pt={{xs:1}}>
            <img src={logo} alt="my_logo_image" height="70px" />
                <Drawer
                width="100vw"
                sx={{
                    color:"#142033"
                }}
                variant="temporary"
                anchor='right'
                open={open}
                >
                    <Box display="flex" flexDirection="column" bgcolor="#142033" width="100%" height="100%">
                    <IconButton    onClick={()=>setOpen(false)}>
                    <Clear sx={{width:"60px", color:'white' }} ></Clear>
                    </IconButton>
                    {
                        navMenu.map((item, index) => {
                            return (<><Link underline='none' href={item.path}
                             sx={{
                                    color: 'white', padding: '30px 30px 30px 30px', fontWeight: "bolder" ,transition: "0.5s ease-in"            
                                    }}
                                    >
                                {item.name}
                            </Link>
                            <Divider sx={{background:"white"}} ></Divider>
                            </>
                            
                            )
                        })
                    
                    }
                    </Box>
                    </Drawer>
                    <IconButton onClick={()=>setOpen (true)}>
                    <Menu sx={{width:"60px", color:'white'}} ></Menu>
                    </IconButton>

                {/* </Box> */}
            </Box>
            {/* ///responsive */}

            {/* /////banner */}
            <Box bgcolor="#142033 " display="flex" justifyContent="center" width="100%" height="100%" >
                <Grid container spacing={{lg:8,xl:2}} pt="7%" pl="10%">
                    <Grid item xl={6}>
                        <Stack color="white" spacing={{xs:1,md:2}}>
                            <Typography variant="h2" color="white" fontWeight="bolder" letterSpacing="2px" fontSize={{xs:"25px",sm:"45px",md:"65px",lg:"45px",xl:"65px"}} fontFamily="Roboto">
                                Hi ! I`m Wahab Mehar
                            </Typography>
                            <Typography variant="h3" color="transparent"  sx={{ WebkitTextStroke: "1px #00abf0"
                        }} fontWeight="bolder" fontSize={{xs:"30px",sm:"35px",md:"50px",lg:"35px",xl:"45px"}}  fontFamily="Roboto">
                                Full Stack Developer
                            </Typography>
                            <Typography width={{lg:"550px"}} variant="body1" color="white" fontSize={{xs:"15px",sm:"18px",md:"30px",lg:"20px",xl:"25px"}}   fontWeight="lighter" letterSpacing={1} lineHeight={1.8} >
                                I am a Full Stack Developer With 1 Year Plus Experience in Web Development  And also Smart Contract Developer in which I,ll live Projects. 
                                I am Experienced Blockchain & Solidity Developer.
                            </Typography>
                            <Stack spacing={{xs:3,sm:5,md:6}} direction="row" pt={6} >
                                <Button disableRipple variant="contained" sx={{
                                    position: "relative",
                                    background: "#00abf0", color: 'black', zIndex: "1", overflow: "hidden", fontWeight: "bolder", letterSpacing: "1px", padding: "15px 30px 15px 30px", transition: "0.5s ease",
                                    "::before": {
                                        content: '""',
                                        width: "0",
                                        height: "100%",
                                        background: "#00abf0",
                                        zIndex: "-1",
                                        position: "absolute",
                                        overflow: "hidden",
                                        top: "0",
                                        left: "0",
                                        transition: "1s"

                                    },
                                    "&:hover::before": {
                                        width: "100%",
                                        background: "transparent"

                                    },
                                    "&:hover": {
                                        bgcolor: "transparent",
                                        border: '1px solid #00abf0',
                                        color: '#00abf0',
                                        cursor: "pointer"
                                    }
                                }}>
                                    Hire ME
                                </Button>
                                <Button disableRipple variant="outlined" sx={{
                                    fontWeight: "bolder", letterSpacing: "1px", padding: "15px 30px 15px 30px", transition: "0.5s ease",
                                    zIndex: "1", position: "relative",
                                    "::before": {
                                        content: '""',
                                        width: "0",
                                        height: "100%",
                                        background: "#00abf0",
                                        zIndex: "-1",
                                        position: "absolute",
                                        overflow: "hidden",
                                        top: "0",
                                        left: "0",
                                        transition: "1s"

                                    },
                                    "&:hover::before": {
                                        width: "100%"
                                    },
                                    "&:hover": {
                                        bgcolor: "#00abf0",
                                        border: '1px solid "#00abf0"',
                                        color: 'black',
                                        cursor: "pointer"

                                    }
                                }}>
                                    Let`s Talk
                                </Button>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xl={6} pl="2%">
                        <Box color="white" width={{lg:"23rem",xl:"35rem"}} height={{lg:"23rem",xl:"35rem"}} borderRadius="60%" position="relative" display={{xs:"none",lg:"flex" }}justifyContent="center" alignItems="center" zIndex="1"
                        sx={{
                            overflow: "hidden",
                            "::before": {
                                content: '""',
                                width: "0",
                                height: "100%",
                                background: "#00abf0",
                                zIndex: "-1",
                                position: "absolute",
                                overflow: "hidden",
                                top: "0",
                                left: "0",
                                transition: "1s"
                            },
                            "&:hover::before": {
                                width: "100%"
                            }
                        }}
                        >
                            <img src={myImage} alt="my_image" width="90%" style={{borderRadius:"50%"}} />
                            <Box component="span" sx={{
                                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(0)", width: "100%", height: "100%", borderRadius: "50%",
                                border: '3px solid white'
                            }}></Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            
        </Box>
        

    </>


    )
}

export default Header