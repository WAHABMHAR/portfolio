import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProjectBox from "./ProjectBox";
import projOne from "../../Assets/images/projects/xoom.png";
import projTwo from "../../Assets/images/projects/pulserex.png";
import projThree from "../../Assets/images/projects/bazlama.png";
import projFour from "../../Assets/images/projects/skylinxV1.png";
import projFive from "../../Assets/images/projects/gymHub.png";
import projSix from "../../Assets/images/projects/fym.png";
import projSeven from "../../Assets/images/projects/Skylinx V2.png";
import projEight from "../../Assets/images/projects/nexter.png";
import projNine from "../../Assets/images/projects/Natours.png";
import projTen from "../../Assets/images/projects/budget.png";

const projectsData = [
    {
        projName: "Xoom Maps",
        projIMG: projOne,
        path: "https://v3.xoommaps.com/",
    },
    {
        projName: "Pulse Rex",
        projIMG: projTwo,
        path: "https://pulsrex.netlify.app/",
    },
    {
        projName: "Bazlama",
        projIMG: projThree,
        path: "https://bazlama-f079f.web.app/",
    },
    {
        projName: "Skylinx V1",
        projIMG: projFour,
        path: "https://skylinxtech.com/",
    },
    {
        projName: "Fy Metaverse",
        projIMG: projSix,
        path: "https://fy-staking.vercel.app/",
    },
    {
        projName: "Gym Hub",
        projIMG: projFive,
        path: "https://gym-website-rho-three.vercel.app/",
    },
    {
        projName: "Skylinx V2",
        projIMG: projSeven,
        path: "https://skylinx-technologies.web.app/",
    },
    {
        projName: "Nexter",
        projIMG: projEight,
        path: "http://webdeveloper032.freecluster.eu/Nextor/?i=1",
    },
    {
        projName: "Natours",
        projIMG: projNine,
        path: "http://webdeveloper032.freecluster.eu/Natours/?i=1",
    },
    {
        projName: "Budget Calculator",
        projIMG: projTen,
        path: "http://webdeveloper032.freecluster.eu/Budgety/",
    },
];

const MyProjects = () => {
    return (
        <Box
            bgcolor={"primary.main"}
            id="projects"
            component={"section"}
            width={"100%"}
            height={"100%"}
        >
            <Container
                sx={{
                    padding: "4rem 0",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    color="white"
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
                    Projects
                </Typography>
                <Typography fontSize={"1.2rem"} variant="body1" color="btnColor">
                    // Checkout some of my recenet work
                </Typography>

                <Box
                    sx={{
                        padding: "1rem 0",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem 2rem",
                        justifyContent: { xs: "center", lg: "start" },
                    }}
                >
                    {projectsData?.map((item, index) => {
                        return <ProjectBox key={index} data={item} />;
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default MyProjects;
