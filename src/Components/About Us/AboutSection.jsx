import { Box, Typography } from "@mui/material";
import React from "react";
import myImage from "../../Assets/images/pic.jpg";
import { CustomButton } from "../../styles/muiStyles";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const navigate = useNavigate();
    const handleReadMore = (e) => {
        e.stopPropagation();
        navigate("/aboutme");
    };
    return (
        <>
            <Box
                id="about"
                component="div"
                bgcolor="primary.main"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                padding={{ xs: "2rem 0 2rem 0", md: "5rem 0 5rem 0", md: "4rem 0 4rem 0" }}
                justifyItems="center"
                alignItems="center"
            >
                <Typography
                    variant="h4"
                    color="white"
                    mb={{ xs: "3rem", md: "5rem" }}
                    padding={"0 1rem"}
                    fontWeight="bolder"
                    position={"relative"}
                    fontSize={{ xs: "2rem", md: "2.5rem" }}
                    sx={{
                        ":before": {
                            content: '""',
                            width: "0",
                            height: "5px",
                            position: "absolute",
                            borderRadius: "2px",
                            backgroundColor: "btnColor",
                            bottom: "-5px",
                            left: "0",
                            transition: "0.8s ease",
                        },
                        "&:hover::before": {
                            width: "100%",
                        },
                    }}
                >
                    About{" "}
                    <Box component={"span"} sx={{ color: "btnColor" }}>
                        ME
                    </Box>
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
                    variant="body2"
                    color="white"
                    fontFamily={"Raleway"}
                    margin={{ xs: "2rem 0" }}
                    width={{ xs: "22rem", sm: "35rem", md: "48rem", lg: "60rem" }}
                    overflow="hidden"
                    fontSize={{ xs: "0.8rem", md: "1.2rem" }}
                    lineHeight={{ lg: "2rem" }}
                >
                    I'm Certified MERN Stack and Blockchain Developer with almost 2 years of
                    experience in IT Industry. Programming is my Passion. Currently I am working on
                    Real-Time Projects, gainning experience and knowledge.Also I'm Dedicated with my
                    field and wanted to excel my growth in this field. Technology isn't just my job,
                    it's my playground, where I turn ideas into reality and challenges into
                    opportunities. I'm a problem-solver, a team player, and a lifelong learner on a
                    mission to make a difference through technology. So
                    <Box component={"span"} sx={{ color: "btnColor" }}>
                        &nbsp;let's connect
                    </Box>
                    , collaborate, and create something extraordinary together!"
                </Typography>
                <CustomButton onClick={handleReadMore}>Read More</CustomButton>
            </Box>
        </>
    );
};

export default AboutSection;
