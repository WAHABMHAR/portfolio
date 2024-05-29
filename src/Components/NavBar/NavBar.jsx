import { Box, Drawer, IconButton, Divider, Container, Link } from "@mui/material";
import { Menu, Clear } from "@mui/icons-material";
import logo from "../../Assets/images/wm-logo.png";
import React, { useState } from "react";

const navMenu = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/#aboutme",
        name: "About Me",
    },
    {
        path: "#educationWork",
        name: "Education",
    },
    {
        path: "#skills",
        name: "Skills",
    },
    {
        path: "#projects",
        name: "Projects",
    },
    {
        path: "#contact",
        name: "Contact Me",
    },
];
const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box
                component="nav"
                display={{ xs: "none", md: "flex" }}
                bgcolor="primary.main"
                justifyContent="space-between"
                alignItems="center"
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "70px",
                    }}
                >
                    <Box sx={{ height: "70px" }}>
                        <a href="/">
                            <img src={logo} alt="my_logo_image" height="100%" width="100%" />
                        </a>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { sm: "0.4rem", md: "1.4rem" },
                        }}
                    >
                        {navMenu.map((item, index) => {
                            return (
                                <Link
                                    position="relative"
                                    component={"a"}
                                    href={item.path}
                                    sx={{
                                        color: "#ffffff",
                                        fontWeight: "bolder",
                                        transition: "0.3s ease",
                                        padding: "0 1rem",
                                        textDecoration: "none",
                                        "&:hover": {
                                            color: "#00abf0",
                                        },
                                        ":before": {
                                            content: '""',
                                            width: "0",
                                            height: "3px",
                                            position: "absolute",
                                            borderRadius: "2px",
                                            backgroundColor: "btnColor",
                                            bottom: "-10px",
                                            left: "0",
                                            transition: "0.5s ease",
                                        },
                                        "&:hover::before": {
                                            width: "100%",
                                        },
                                    }}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </Box>
                </Container>
            </Box>
            {/* ///responsive */}
            <Box bgcolor="primary.main">
                {" "}
                <Container
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: { xs: "flex", md: "none" },
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
                                            component={"a"}
                                            href={item.path}
                                            onClick={() => setOpen(false)}
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
