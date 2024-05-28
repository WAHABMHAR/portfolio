import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutBanner from "./AboutBanner";
import TimeLine from "../Timeline/TimeLine";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
const timlineData = [
    {
        title: "Govt PostGraduate College",
        position: "Intermediate Degree",
        duration: "2018 -  2019",
        Icon: <SchoolIcon />,
        desc: "I've completed my Intermediate degree from postgraduate college of science and securing good grades.",
    },
    {
        title: "Self Learning",
        position: "Wordpress",
        duration: "2019",
        Icon: <DeveloperModeIcon />,
        desc: "After a suggestion from my cousin, I started learning WordPress development, freelancing, and pursuing a career in web development. I learned the basics of HTML, CSS, and JavaScript. However, without proper guidance and relying solely on YouTube tutorials, I eventually decided to quit.",
    },
    {
        title: "University of Agriculture",
        position: "Intermediate Degree",
        duration: "2020 - 2022",
        Icon: <SchoolIcon />,
        desc: "Like many students, I was initially unsure about my career path. After seeking advice, I gained admission to the University of Agriculture. However, after two years, I realized this was not my true passion. Consequently, I decided to quit the degree program and pursue my desired profession in tech Industry",
    },
    {
        title: "Gamica Cloud Center",
        position: "Learner",
        duration: "2022 - 2023",
        Icon: <SchoolIcon />,
        desc: "After Quitting my Degree, Gained admission in Gamica Cloud Training Center to learn the MERN stack and blockchain development is a strategic step towards a promising career. I've completed a one-year MERN Stack and Blockchain Development course, gaining foundational programming experience to excel in this career.",
    },
    {
        title: "Gamica Cloud Internship",
        position: "Intern",
        duration: "2023",
        Icon: <BusinessCenterIcon />,
        desc: "After Evaluation Test, I've been selected for the Gamica Cloud Internship Program. During this internship, I will be working on logical and UI projects to gain valuable experience in programming. Engage in projects to deepen my understanding of programming concepts and languages. Develop user-friendly and visually appealing interfaces",
    },
    {
        title: "Bloctech Solutions",
        position: "Software Developer Intern",
        duration: "2023 - 2024",
        Icon: <BusinessCenterIcon />,
        desc: "After being selected through an interview, I worked on real-time projects involving the MERN Stack and Smart Contracts. I aim to excel in my skills under the guidance of professionals, learning about the rules and ethics of coding by working on these projects and gaining experience. Upon successfully completing my internship and passing the evaluation test of my work after 3 months, I will be appointed as a Junior Software Developer.",
    },
    {
        title: "Skylinx Technologies",
        position: "MERN Developer",
        duration: "2024 - Present",
        Icon: <BusinessCenterIcon />,
        desc: "After being selected through an interview, I've been appointed as a MERN developer to work on real-time projects, expanding my knowledge under the guidance of professionals. My main responsibilities include working on the frontend and building complex websites to enhance UI and user experience. Additionally, I will collaborate with teams for quick and effective responses",
    },
];

const AboutMe = () => {
    return (
        <>
            {" "}
            <NavBar />
            <AboutBanner />
            <Box sx={{ backgroundColor: "primary.main", height: "5.5rem" }}></Box>
            <TimeLine data={timlineData} />
            <Footer />{" "}
        </>
    );
};

export default AboutMe;
