import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../../Assets/images/aboutMe.jpg";
import { TypeAnimation } from "react-type-animation";
import { CustomButton } from "../../styles/muiStyles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AboutBanner = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundColor: "primary.main",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "relative",
                backgroundRepeat: "no-repeat",
                ":after": {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.2)",
                },
            }}
        >
            <Container>
                <Box
                    className="text-content flx-align-center"
                    sx={{
                        height: "450px",
                        fontSize: "2rem",
                        fontWeight: "600",
                    }}
                >
                    <Stack
                        sx={{ textAlign: "center", zIndex: 1 }}
                        alignItems="center"
                        spacing={"2rem"}
                    >
                        <Typography
                            variant="h3"
                            color="transparent"
                            sx={{ WebkitTextStroke: "1px #ffffff" }}
                            fontWeight="bolder"
                            fontSize={{
                                xs: "1.5rem",
                                sm: "2rem",
                                lg: "3.5rem",
                            }}
                        >
                            <TypeAnimation
                                sequence={[
                                    "MERN Developer",
                                    500,
                                    "Frontend Developer",
                                    500,
                                    "React Developer",
                                    500,
                                    "Responsive Design",
                                    500,
                                    "Smart Contract Developer",
                                    500,
                                ]}
                                repeat={Infinity}
                            />
                        </Typography>
                        <Typography
                            variant="p"
                            color="#ffffff"
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.2rem" },
                                width: { xs: "90%", md: "90%" },
                                lineHeight: "1.5rem",
                                fontWeight: "400",
                            }}
                        >
                            I'm a firm believer in lifelong learning, always eager to expand my
                            knowledge and push the boundaries of what's possible. You'll find me
                            exploring the latest tech trends, experimenting with new tools and
                            frameworks, or immersing myself in a good book.
                        </Typography>
                        <a href="#goTimeline">
                            <CustomButton
                                className="'flex-between"
                                sx={{
                                    fontWeight: "600",
                                    gap: ".6rem",
                                    fontSize: { xs: "0.8rem", sm: "1rem" },
                                    textTransform: "initial",
                                    letterSpacing: "2px",
                                    padding: { xs: "0.4rem 0.8rem", sm: ".5rem 1rem" },
                                    transition: "0.4s ease-in",

                                    ":hover": {
                                        "& svg": {
                                            color: "#00acf0",
                                            transform: "rotate(90deg)",
                                            transformOrigin: "10px",
                                            transition: "transform 0.3s",
                                        },
                                    },
                                }}
                            >
                                Start Journey
                                <ArrowRightAltIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </CustomButton>
                        </a>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutBanner;
