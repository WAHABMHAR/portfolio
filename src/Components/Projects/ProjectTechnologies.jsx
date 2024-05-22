import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TextSphere from "../TextSphere/TextSphere";

const ProjectTechnologies = () => {
    return (
        <Box sx={{ bgcolor: "primary.main", display: { xs: "none", sm: "block" } }}>
            <Container sx={{ alignItems: "center", justifyContent: "center", padding: "3rem" }}>
                <TextSphere />
            </Container>
        </Box>
    );
};

export default ProjectTechnologies;
