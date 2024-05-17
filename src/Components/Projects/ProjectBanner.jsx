import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../../Assets/images/bg5.jpg";
import { TypeAnimation } from "react-type-animation";

const ProjectBanner = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundColor: "primary.main",
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Container>
                <Box
                    className="text-content flx-align-center"
                    sx={{ height: "450px", fontSize: "2rem", fontWeight: "600" }}
                >
                    <Stack>
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
                                    "React Developer",
                                    600,
                                    "Smart Contract Developer",
                                    600,
                                ]}
                                repeat={Infinity}
                            />
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default ProjectBanner;
