import { Box, Stack, Typography, Button, Link } from "@mui/material";
import styled from "@emotion/styled";
import { color, motion } from "framer-motion";
import React from "react";
import myImage from "../Assets/images/pic.jpg";

const About = () => {
    return (
        <>
            <Box
                id="about"
                component="div"
                bgcolor="#142033"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                pt={{ xs: 0, md: 10, xl: 45 }}
                justifyItems="center"
                alignItems="center"
            >
                <Typography variant="h3" color="white" pb={4} fontWeight="bolder">
                    About <span style={{ color: "#00abf0" }}> ME</span>
                </Typography>
                <Box
                    color="white"
                    width={{ xs: "12rem", md: "20rem" }}
                    height={{ xs: "12rem", md: "20rem" }}
                    borderRadius="50%"
                    position="relative"
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                    alignItems="center"
                    zIndex="1"
                >
                    <img src={myImage} alt="my_image" width="90%" style={{ borderRadius: "50%" }} />

                    <Box
                        component="span"
                        width="100%"
                        height="100%"
                        sx={{
                            position: "absolute",
                            borderRadius: "50%",
                            borderTop: "2px solid #142033",
                            borderBottom: "2px solid #142033",
                            borderLeft: "2px solid #00abf0",
                            borderRight: "2px solid #00abf0",
                            animation: "rotation 3s linear infinite",
                            "@keyframes rotation": {
                                "0%": {
                                    transform: "rotate(0deg)",
                                },
                                "100%": {
                                    transform: "rotate(360deg)",
                                },
                            },
                            transformOrigin: "center",
                        }}
                    ></Box>
                </Box>
                <Typography
                    textAlign="center"
                    text
                    variant="body2"
                    color="white"
                    pt={{ xs: 5, md: 5, lg: 10 }}
                    pb={{ xs: 5, md: 5, lg: 8 }}
                    width={{ xs: "80%", xl: "70%" }}
                    overflow="hidden"
                    fontSize={{ lg: "20x" }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi doloremque
                    magnam facere a reprehend Quasi doloremquedoloremque magnam facere a reprehend
                    Quasi doloremque cum recusandae qui ad omnis doloribus ratione, debitis et Quasi
                    doloremque magnam facere a reprehendint quo ex illumdoloremque magnam facere a
                    reprehend Quasi doloremque. cum recusandae qui ad omnis doloribus ratione,
                    debitiseprehendint quo ex illumdoloremque magnam facere a reprehend Quasi
                    doloremque. cum recusandae qui ad omnis doloribus ratione, debitis et minima
                    itaque accusantium, sint quo ex illum.
                </Typography>
                <Button
                    disableRipple
                    variant="contained"
                    sx={{
                        position: "relative",
                        background: "#00abf0",
                        color: "black",
                        zIndex: "1",
                        overflow: "hidden",
                        fontWeight: "bolder",
                        letterSpacing: "1px",
                        padding: "15px 30px 15px 30px",
                        transition: "0.5s ease",
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
                            transition: "1s",
                        },
                        "&:hover::before": {
                            width: "100%",
                            background: "transparent",
                        },
                        "&:hover": {
                            bgcolor: "transparent",
                            border: "1px solid #00abf0",
                            color: "#00abf0",
                            cursor: "pointer",
                        },
                    }}
                >
                    READ MORE
                </Button>
            </Box>
        </>
    );
};

export default About;
