import { Box, Container } from "@mui/material";
import React from "react";
import MySkillItem from "./MySkillItem";

const MySkills = () => {
    return (
        <Box bgcolor={"primary.main"}>
            <Container
                sx={{
                    padding: "3rem 0",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center",
                }}
            >
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
                <MySkillItem />
            </Container>
        </Box>
    );
};

export default MySkills;
