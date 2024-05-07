import {
    Box,
    Grid,
    Link,
    Stack,
    Typography,
    Button,
    Drawer,
    IconButton,
    Divider,
    Container,
} from "@mui/material";
import { Facebook, GitHub, LinkedIn, Padding, Twitter, Menu, Clear } from "@mui/icons-material";
import { motion } from "framer-motion";
import logo from "../../Assets/images/wm-logo.png";

import React, { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
import { alignProperty } from "@mui/material/styles/cssUtils";
const navMenu = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "#about",
        name: "About",
    },
    {
        path: "#education",
        name: "Education",
    },
    {
        path: "#skils",
        name: "Skills",
    },
    {
        path: "#contact",
        name: "Contact",
    },
];
const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box
                display={{ xs: "none", sm: "flex" }}
                bgcolor="primary.main"
                justifyContent="space-between"
                alignItems="center"
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "80px",
                    }}
                >
                    <Box sx={{ height: "80px" }}>
                        <img src={logo} alt="my_logo_image" height="100%" width="100%" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { sm: "1.8rem", md: "4rem", lg: "5rem" },
                        }}
                    >
                        {navMenu.map((item, index) => {
                            return (
                                <Link
                                    component="a"
                                    underline="none"
                                    href={item.path}
                                    sx={{
                                        color: "#ffffff",
                                        fontWeight: "bolder",
                                        transition: "0.5s ease-in",
                                        "&:hover": {
                                            color: "#1976d2",
                                        },
                                    }}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </Box>
                </Container>
                {/* <Typography variant="h3" fontStyle="" fontSize="2rem" fontWeight="bolder" color="White" >W|MEHAR</Typography> */}

                {/* <Stack direction="row" spacing={3} width="30%" pl="10%">
                   
                    <GitHub
                        sx={{
                            color: "white",
                            transition: "0.5s ease-in",
                            "&:hover": {
                                color: "#1976d2",
                                cursor: "pointer",
                            },
                        }}
                    ></GitHub>
                    <LinkedIn
                        sx={{
                            color: "white",
                            transition: "0.5s ease-in",
                            "&:hover": {
                                color: "#1976d2",
                                cursor: "pointer",
                            },
                        }}
                    ></LinkedIn>
                    <Twitter
                        sx={{
                            color: "white",
                            transition: "0.5s ease-in",
                            "&:hover": {
                                color: "#1976d2",
                                cursor: "pointer",
                            },
                        }}
                    ></Twitter>
                    <Facebook
                        sx={{
                            color: "white",
                            transition: "0.5s ease-in",
                            "&:hover": {
                                color: "#1976d2",
                                cursor: "pointer",
                            },
                        }}
                    ></Facebook>
                </Stack> */}
            </Box>
            {/* ///responsive */}
            <Box bgcolor="#142033 ">
                {" "}
                <Container
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: { xs: "flex", sm: "none" },
                    }}
                >
                    <Box height="70px">
                        <img src={logo} alt="my_logo_image" height="100%" width="100%" />
                    </Box>
                    <Drawer
                        sx={{
                            color: "#142033",
                        }}
                        variant="temporary"
                        anchor="right"
                        open={open}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            bgcolor="#142033"
                            height="100%"
                            width="100vw"
                        >
                            <Box>
                                <IconButton
                                    sx={{
                                        padding: "0",
                                        display: "flex",
                                        float: "inline-end",
                                        margin: "1rem 1rem 0 0",
                                    }}
                                    onClick={() => setOpen(false)}
                                >
                                    <Clear
                                        sx={{ height: "35px", width: "50px", color: "white" }}
                                    ></Clear>
                                </IconButton>
                            </Box>
                            {navMenu.map((item, index) => {
                                return (
                                    <>
                                        <Link
                                            key={index}
                                            underline="none"
                                            href={item.path}
                                            sx={{
                                                color: "white",
                                                textAlign: "center",
                                                padding: "1.5rem 0",
                                                fontWeight: "bolder",
                                                transition: "0.5s ease-in",
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                        <Divider sx={{ background: "white" }}></Divider>
                                    </>
                                );
                            })}
                        </Box>
                    </Drawer>
                    <Box>
                        <IconButton sx={{ padding: "0" }} onClick={() => setOpen(true)}>
                            <Menu sx={{ height: "35px", width: "50px", color: "white" }}></Menu>
                        </IconButton>
                    </Box>
                </Container>
                {/* </Box> */}
            </Box>
            {/* ///responsive */}
        </>
    );
};

export default NavBar;
