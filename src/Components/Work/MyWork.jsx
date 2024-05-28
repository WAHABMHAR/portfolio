import React from "react";
import TimeLine from "../Timeline/TimeLine";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import WorkBanner from "./WorkBanner";
import { Box } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
const timlineData = [
    {
        title: "Skylinx Technologies",
        position: "MERN Developer",
        duration: "2024 - Present",
        Icon: <BusinessCenterIcon />,
        desc: "After being selected through an interview, I've been appointed as a MERN developer to work on real-time projects, expanding my knowledge under the guidance of professionals. My main responsibilities include working on the frontend and building complex websites to enhance UI and user experience. Additionally, I will collaborate with teams for quick and effective responses",
    },
    {
        title: "Bloctech Solutions",
        position: "Software Developer Intern",
        duration: "2023 - 2024",
        Icon: <BusinessCenterIcon />,
        desc: "After being selected through an interview, I worked on real-time projects involving the MERN Stack and Smart Contracts. I aim to excel in my skills under the guidance of professionals, learning about the rules and ethics of coding by working on these projects and gaining experience. Upon successfully completing my internship and passing the evaluation test of my work after 3 months, I will be appointed as a Junior Software Developer.",
    },
    {
        title: "Gamica Cloud Internship",
        position: "Internee",
        duration: "2023",
        Icon: <BusinessCenterIcon />,
        desc: "After Evaluation Test, I've been selected for the Gamica Cloud Internship Program. During this internship, I will be working on logical and UI projects to gain valuable experience in programming. Engage in projects to deepen my understanding of programming concepts and languages. Develop user-friendly and visually appealing interfaces",
    },
    {
        title: "Gamica Cloud Center",
        position: "Learner",
        duration: "2022 - 2023",
        Icon: <BusinessCenterIcon />,
        desc: "Gaining admission to an institute to learn the MERN stack and blockchain development is a strategic step towards a promising career. I've completed a one-year MERN Stack and Blockchain Development course, gaining foundational programming experience to excel in this career.",
    },
];

const MyWork = () => {
    return (
        <>
            <NavBar />
            <WorkBanner />
            <Box sx={{ backgroundColor: "primary.main", height: "5.5rem" }}></Box>
            <TimeLine data={timlineData} />
            <Footer />
        </>
    );
};

export default MyWork;
