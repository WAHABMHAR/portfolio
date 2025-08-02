import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import myImage from "../../Assets/images/pic.jpg";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { CustomButton, CustomLink } from "../../styles/muiStyles";

const Banner = () => {
    const handleIconClick = (index) => {
        if (index === 3) {
            let recipient = "wahabmhar@gmail.com";
            window.location.href = `mailto:${recipient}`;
        } else if (index === 2) {
            window.location.href = "https://github.com/WAHABMHAR";
        } else {
            window.location.href = "https://www.linkedin.com/in/wahab-mehar-b7b2a81a0/";
        }
    };

    const handleDownload = () => {
        const pdfUrl =
            "https://drive.google.com/file/d/1J9qpmCF1b-LLD3jayd9qssVTa3eTYSUc/view?usp=drive_link";

        // Creating an anchor element
        const link = document.createElement("a");
        link.href = "";
        window.open(pdfUrl, "_blank");
        // link.download =
        //     "https://drive.google.com/file/d/1j-7SUH2U66JbHteS915F2tLkovs9J6Tx/view?usp=drive_link"; // Set the file name
        link.click(); // Simulate click to trigger download
    };
    return (
        <Box bgcolor={"primary.main"}>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Grid
                    sx={{
                        marginTop: "0 !important",
                        padding: { xs: "2rem 0 2rem 0", sm: "3rem 0 3rem 0", md: "2rem 0 2rem 0" },
                    }}
                    justifyContent={"center"}
                    container
                    spacing={{ lg: 8, xl: 2 }}
                >
                    <Grid item md={6} order={{ xs: 2, md: 1 }}>
                        <Stack
                            textAlign={{ xs: "center", md: "start" }}
                            color="white"
                            // spacing={{ xs: 1, md: 2 }}
                        >
                            <Stack>
                                <Typography
                                    variant="p"
                                    color="btnColor"
                                    fontWeight="bolder"
                                    letterSpacing="2px"
                                    fontSize={"0.8rem"}
                                >
                                    Hi! myself
                                </Typography>
                                <Typography
                                    variant="h2"
                                    color="white"
                                    fontWeight="bolder"
                                    letterSpacing="2px"
                                    fontSize={{
                                        xs: "2.4rem",
                                        sm: "3.8rem",
                                        lg: "5rem",
                                    }}
                                    lineHeight={{ xs: "2.4rem", sm: "3.8rem", lg: "5rem" }}
                                >
                                    Wahab Mehar
                                </Typography>
                            </Stack>
                            <Typography
                                variant="h3"
                                color="transparent"
                                sx={{ WebkitTextStroke: "1px #00abf0" }}
                                fontWeight="bolder"
                                fontSize={{
                                    xs: "1.5rem",
                                    sm: "2rem",
                                    lg: "2.5rem",
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
                                width="100%"
                                maxWidth={{ xs: "20rem", sm: "35rem", lg: "40rem" }}
                                variant="body1"
                                color="#fffff5"
                                margin={{ xs: "1rem 0", lg: "2rem 0" }}
                                fontSize={"1rem"}
                                fontWeight="lighter"
                                letterSpacing={1}
                                lineHeight={1.8}
                            >
                                Dedicated Web Developer with almost 4 years of experience in
                                Developing Web Applications. I'm a firm believer in lifelong
                                learning, always eager to expand my knowledge and push the
                                boundaries of what's possible.you'll find me exploring the latest
                                tech trends, experimenting with new tools and frameworks, or
                                immersing myself in a good book.
                            </Typography>
                            <Stack
                                direction={"row"}
                                spacing={"2rem"}
                                display={{ xs: "flow", md: "inline-block" }}
                            >
                                <Box
                                    sx={{ cursor: "pointer" }}
                                    component={"span"}
                                    onClick={() => handleIconClick(1)}
                                >
                                    <svg
                                        style={{
                                            borderRadius: "50%",
                                            padding: "0.4rem",
                                            boxShadow: "#0072ff 0px 1px 15px, #0072ff 0px 1px 15px",
                                        }}
                                        viewBox="0 0 50 50"
                                        width="35px"
                                        height="35px"
                                    >
                                        <path
                                            fill="#00acf0"
                                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                                        />
                                    </svg>
                                </Box>
                                <Box
                                    sx={{ cursor: "pointer" }}
                                    component={"span"}
                                    onClick={() => handleIconClick(2)}
                                >
                                    <svg
                                        style={{
                                            borderRadius: "50%",
                                            padding: "0.4rem",
                                            boxShadow: "#0072ff 0px 1px 15px, #0072ff 0px 1px 15px",
                                        }}
                                        viewBox="0 0 50 50"
                                        width="35px"
                                        height="35px"
                                    >
                                        <path
                                            fill="#00acf0"
                                            d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                                        />
                                    </svg>
                                </Box>
                                <Box
                                    component={"span"}
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => handleIconClick(3)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 128 96"
                                        id="email"
                                        width="35px"
                                        height="35px"
                                        style={{
                                            borderRadius: "50%",
                                            padding: "0.4rem",
                                            boxShadow: "#0072ff 0px 1px 15px, #0072ff 0px 1px 15px",
                                        }}
                                    >
                                        <g>
                                            <path
                                                fill="#00acf0"
                                                d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"
                                            ></path>
                                        </g>
                                    </svg>
                                </Box>
                            </Stack>
                            <Stack
                                display={{ xs: "flow", lg: "inline-block" }}
                                spacing={{ xs: 3, sm: 5, md: 6 }}
                                direction="row"
                                pt={"2rem"}
                            >
                                <CustomLink onClick={handleDownload}>Download CV</CustomLink>
                                <CustomLink href="#contact">Hire Me</CustomLink>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid
                        padding={"3rem"}
                        bgcolor={"primary.main"}
                        order={{ xs: 1, md: 2 }}
                        item
                        md={6}
                        justifyContent="center"
                    >
                        <Box
                            className="animation-bounce"
                            sx={{
                                maxWidth: "28rem",
                                maxHeight: "28rem",
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                boxShadow:
                                    "#00abf0 0px 8px 55px, #00abf0 0px -12px 30px, #00abf0 0px 4px 6px, #00abf0 0px 12px 13px, #00abf0 0px -3px 5px",
                            }}
                        >
                            <img
                                style={{
                                    borderRadius: "50%",
                                    boxShadow: "#000000 0px -50px 36px -28px inset",
                                }}
                                src={myImage}
                                alt="user-image"
                                width="100%"
                                height={"100%"}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
