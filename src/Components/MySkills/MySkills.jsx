import { Box, Container, Typography } from "@mui/material";
import React from "react";
import MySkillItem from "./MySkillItem";
import html from "../../Assets/images/svg/languages/html.svg";
import mongoDB from "../../Assets/images/svg/languages/mongoDb.svg";
import js from "../../Assets/images/svg/languages/Js.svg";
import css from "../../Assets/images/svg/languages/css.svg";
import express from "../../Assets/images/svg/languages/expressjs-icon.svg";
import node from "../../Assets/images/svg/languages/node.svg";
import react from "../../Assets/images/svg/languages/react.svg";
import tailwind from "../../Assets/images/svg/languages/tailwind.png";
import MUI from "../../Assets/images/svg/languages/icons8-material-ui.svg";
import next from "../../Assets/images/svg/languages/next-js.svg";
import redux from "../../Assets/images/svg/languages/redux.svg";
import axios from "../../Assets/images/svg/languages/axios.svg";
import solidity from "../../Assets/images/svg/languages/solidity.svg";
import truffle from "../../Assets/images/svg/languages/truffle.png";
import wp from "../../Assets/images/svg/languages/wordpress.svg";
import github from "../../Assets/images/svg/github.svg";
import MobileSkills from "./MobileSkills";
const Skills = [
    {
        lanImg: html,
        lanName: "HTML",
    },
    {
        lanImg: css,
        lanName: "CSS",
    },
    {
        lanImg: tailwind,
        lanName: "TailWind",
    },
    {
        lanImg: MUI,
        lanName: "Material UI",
    },
    {
        lanImg: js,
        lanName: "JavaScript",
    },
    {
        lanImg: react,
        lanName: "ReactJS",
    },
    {
        lanImg: next,
        lanName: "NextJS",
    },

    {
        lanImg: wp,
        lanName: "WordPress",
    },
    {
        lanImg: redux,
        lanName: "Redux Toolkit",
    },
    {
        lanImg: axios,
        lanName: "Axios",
    },

    {
        lanImg: solidity,
        lanName: "Solidity",
    },
    {
        lanImg: truffle,
        lanName: "Truffle",
    },
    {
        lanImg: express,
        lanName: "ExpressJS",
    },
    {
        lanImg: node,
        lanName: "NodeJS",
    },
    {
        lanImg: mongoDB,
        lanName: "MongoDB",
    },
    {
        lanImg: github,
        lanName: "GitHub",
    },
];

const MySkills = () => {
    return (
        <Box bgcolor={"primary.main"} id="skills">
            <Container
                sx={{
                    padding: "4rem 0",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h4"
                    color="white"
                    padding={"0 1rem"}
                    fontWeight="bolder"
                    position={"relative"}
                    fontSize={{ xs: "2rem", md: "2.2rem" }}
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
                    Skills
                </Typography>
                <Typography
                    fontSize={{ xs: "0.9rem", sm: "1.2rem" }}
                    variant="body1"
                    color="btnColor"
                >
                    // These are the technologies I've worked with
                </Typography>

                <Box
                    sx={{
                        padding: "1rem 0",
                        display: { xs: "none", md: "flex" },
                        flexWrap: "wrap",
                        gap: "1rem",
                        justifyContent: "center",
                    }}
                >
                    {Skills?.map((item, index) => {
                        return <MySkillItem key={index} data={item} />;
                    })}
                </Box>
                <Box
                    sx={{
                        padding: "1rem 0",
                        display: { xs: "flex", md: "none" },
                        flexWrap: "wrap",
                        gap: "1rem",
                        justifyContent: "center",
                    }}
                >
                    {Skills?.map((item, index) => {
                        return <MobileSkills key={index} data={item} />;
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default MySkills;
