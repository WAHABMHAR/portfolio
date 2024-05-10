import { Box, Container, Link, List, ListItem, Stack } from "@mui/material";
import footerLogo from "../../Assets/images/wm-logo.png";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const navMenu = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/aboutme",
        name: "About",
    },
    {
        path: "/work",
        name: "Work",
    },
    {
        path: "#skill",
        name: "Skills",
    },
    {
        path: "/projects",
        name: "Projects",
    },
    {
        path: "/contact",
        name: "Contact",
    },
];
const socialMedia = [
    { icon: <GitHubIcon />, path: "https://github.com/WAHABMHAR" },
    { icon: <LinkedInIcon />, path: "https://www.linkedin.com/in/wahab-mehar-b7b2a81a0/" },
    { icon: <InstagramIcon />, path: "https://www.instagram.com/mrmehar35/" },
    { icon: <FacebookIcon />, path: "https://www.facebook.com/abdulwahab.prince.1" },
];

const Footer = () => {
    return (
        <Box
            component={"section"}
            sx={{ bgcolor: "primary.main", borderTop: "1px solid rgba(0, 171, 240, 0.7)" }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4rem 0",
                }}
            >
                <Stack alignItems={"center"} spacing={"1rem"}>
                    <Box height={"5.5rem"} width="7rem">
                        <img src={footerLogo} alt="user-image" width={"100%"} height={"100%"} />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                    >
                        {navMenu.map((item, index) => {
                            return (
                                <Link
                                    position="relative"
                                    component="a"
                                    underline="none"
                                    href={item.path}
                                    sx={{
                                        color: "#ffffff",
                                        fontWeight: "bolder",
                                        transition: "0.5s ease",
                                        padding: "0 1rem",

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
                                            transition: "0.8s ease",
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
                    <Box className="social-media-list">
                        <List sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                            {socialMedia?.map((item, index) => {
                                return (
                                    <ListItem key={index} className="icon-list-item">
                                        <Link href={item?.path} target="_blank" component={"a"}>
                                            {item?.icon}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
