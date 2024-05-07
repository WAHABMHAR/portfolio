import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import myImage from "../../Assets/images/pic.jpg";
import React from "react";

const Banner = () => {
    return (
        <Box bgcolor={"primary.main"}>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Grid sx={{ margin: "0" }} container spacing={{ lg: 8, xl: 2 }}>
                    <Grid sx={{ margin: "0" }} item xl={6}>
                        <Stack color="white" spacing={{ xs: 1, md: 2 }}>
                            <Typography
                                variant="h2"
                                color="white"
                                fontWeight="bolder"
                                letterSpacing="2px"
                                fontSize={{
                                    xs: "25px",
                                    sm: "45px",
                                    md: "65px",
                                    lg: "45px",
                                    xl: "65px",
                                }}
                                fontFamily="Roboto"
                            >
                                Hi ! I`m Wahab Mehar
                            </Typography>
                            <Typography
                                variant="h3"
                                color="transparent"
                                sx={{ WebkitTextStroke: "1px #00abf0" }}
                                fontWeight="bolder"
                                fontSize={{
                                    xs: "30px",
                                    sm: "35px",
                                    md: "50px",
                                    lg: "35px",
                                    xl: "45px",
                                }}
                                fontFamily="Roboto"
                            >
                                Full Stack Developer
                            </Typography>
                            <Typography
                                width={{ lg: "550px" }}
                                variant="body1"
                                color="white"
                                fontSize={{
                                    xs: "15px",
                                    sm: "18px",
                                    md: "30px",
                                    lg: "20px",
                                    xl: "25px",
                                }}
                                fontWeight="lighter"
                                letterSpacing={1}
                                lineHeight={1.8}
                            >
                                I am a Full Stack Developer With 1 Year Plus Experience in Web
                                Development And also Smart Contract Developer in which I,ll live
                                Projects. I am Experienced Blockchain & Solidity Developer.
                            </Typography>
                            <Stack spacing={{ xs: 3, sm: 5, md: 6 }} direction="row" pt={6}>
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
                                    Hire ME
                                </Button>
                                <Button
                                    disableRipple
                                    variant="outlined"
                                    sx={{
                                        fontWeight: "bolder",
                                        letterSpacing: "1px",
                                        padding: "15px 30px 15px 30px",
                                        transition: "0.5s ease",
                                        zIndex: "1",
                                        position: "relative",
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
                                        },
                                        "&:hover": {
                                            bgcolor: "#00abf0",
                                            border: '1px solid "#00abf0"',
                                            color: "black",
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    Let`s Talk
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid sx={{ margin: "0" }} item xl={6}>
                        <Box
                            color="white"
                            width={{ lg: "23rem", xl: "35rem" }}
                            height={{ lg: "23rem", xl: "35rem" }}
                            borderRadius="60%"
                            position="relative"
                            display={{ xs: "none", lg: "flex" }}
                            justifyContent="center"
                            alignItems="center"
                            zIndex="1"
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
                                    transition: "1s",
                                },
                                "&:hover::before": {
                                    width: "100%",
                                },
                            }}
                        >
                            <img
                                src={myImage}
                                alt="my_image"
                                width="90%"
                                style={{ borderRadius: "50%" }}
                            />
                            <Box
                                component="span"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%) rotate(0)",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    border: "3px solid white",
                                }}
                            ></Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
