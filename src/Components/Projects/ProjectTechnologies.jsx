import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import "./projects.css";

import TagCloud from "TagCloud";
const container = ".tagcloud";
const texts = [
    "HTML",
    "CSS",
    "JavaScript",
    "ES6",
    "ReactJS",
    "NextJS",
    "Redux",
    "RTK",
    "Axios",
    "TailWind CSS",
    "Material UI",
    "WordPress",
    "NodeJS",
    "ExpressJS",
    "Solidity",
    "Truffle",
    "Babel",
    "OneSignal",
    "Brevo",
    "EmailJs",
    "Google Maps",
    "GIT",
    "GITHUB",
];

const options = {
    radius: 300,
    maxSpeed: "fast",
    initSpeed: "fast",
    keep: true,
};

const ProjectTechnologies = () => {
    useEffect(() => {
        // return () => {
        TagCloud(container, texts, options);
        // };
    }, []);
    return (
        <Box sx={{ bgcolor: "primary.main", display: { xs: "none", sm: "block" } }}>
            <Container sx={{ alignItems: "center", justifyContent: "center", padding: "3rem" }}>
                <div className="text-shpere">
                    <span className="tagcloud"></span>
                </div>
            </Container>
        </Box>
    );
};

export default ProjectTechnologies;
