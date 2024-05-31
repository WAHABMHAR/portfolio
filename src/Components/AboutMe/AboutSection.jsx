import { Box, Typography } from "@mui/material";
import React from "react";
import myImage from "../../Assets/images/whab.jpg";
import { CustomButton, CustomLink } from "../../styles/muiStyles";
import { useNavigate } from "react-router-dom";
import MySkills from "../MySkills/MySkills";
import TimeLine from "../Timeline/TimeLine";
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
        position: "B.sc Agricultural Sciences",
        duration: "2020 - 2022",
        Icon: <SchoolIcon />,
        desc: "Like many students, I was initially unsure about my career path. After seeking advice, I gained admission to the University of Agriculture. However, after two years, I realized this was not my true passion. Consequently, I decided to quit the degree program and pursue my desired profession in tech industry.",
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
        desc: "After Evaluation Test, I've been selected for the Gamica Cloud Internship Program. During this internship, I will be working on logical and UI projects to gain valuable experience in programming. Engage in projects to deepen my understanding of programming concepts and languages. Develop user-friendly and visually appealing interfaces.",
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
        desc: "After being selected through an interview, I've been appointed as a MERN developer to work on real-time projects, expanding my knowledge under the guidance of professionals. My main responsibilities include working on the frontend and building complex websites to enhance UI and user experience. Additionally, I will collaborate with teams for quick and effective responses.",
    },
    {
        title: "Virtual University",
        position: "BS Computer Science",
        duration: "2024 - Present",
        Icon: <SchoolIcon />,
        desc: "Now I'm continuing my studies from Vitual University of Pakistan",
    },
];

const AboutSection = () => {
    const navigate = useNavigate();
    const handleReadMore = (e) => {
        e.stopPropagation();
        navigate("/aboutme");
    };
    return (
        <>
            <Box component={"section"}>
                <Box
                    id="aboutme"
                    component="div"
                    bgcolor="primary.main"
                    height="100%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    padding={{ xs: "2rem 0 2rem 0", md: "5rem 0 5rem 0", md: "4rem 0 4rem 0" }}
                    justifyItems="center"
                    alignItems="center"
                >
                    <Typography
                        variant="h4"
                        color="white"
                        mb={{ xs: "3rem", md: "5rem" }}
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
                        About{" "}
                        <Box component={"span"} sx={{ color: "btnColor" }}>
                            ME
                        </Box>
                    </Typography>
                    <Box
                        color="white"
                        width={{ xs: "12rem", md: "20rem" }}
                        height={{ xs: "12rem", md: "20rem" }}
                        borderRadius="50%"
                        position="relative"
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                        alignItems="center"
                        zIndex="1"
                    >
                        <img
                            src={myImage}
                            alt="my_image"
                            width="90%"
                            height={"90%"}
                            style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                                objectPosition: "top center",
                            }}
                        />

                        <Box
                            component="span"
                            width="100%"
                            height="100%"
                            sx={{
                                position: "absolute",
                                borderRadius: "50%",
                                borderTop: "2px solid #142033",
                                borderBottom: "2px solid #142033",
                                borderLeft: "2px solid #00abf0",
                                borderRight: "2px solid #00abf0",
                                animation: "rotation 3s linear infinite",
                                "@keyframes rotation": {
                                    "0%": {
                                        transform: "rotate(0deg)",
                                    },
                                    "100%": {
                                        transform: "rotate(360deg)",
                                    },
                                },
                                transformOrigin: "center",
                            }}
                        ></Box>
                    </Box>
                    <Typography
                        textAlign="center"
                        variant="body2"
                        color="#fffff5"
                        fontFamily={"Raleway"}
                        margin={{ xs: "2rem 0" }}
                        width={{ xs: "22rem", sm: "35rem", md: "48rem", lg: "60rem" }}
                        overflow="hidden"
                        fontSize={{ xs: "0.8rem", md: "1.2rem" }}
                        lineHeight={{ lg: "2rem" }}
                    >
                        I'm Certified MERN Stack and Blockchain Developer with almost 2 years of
                        experience in IT Industry. Programming is my Passion. Currently I am working
                        on Real-Time Projects, gainning experience and knowledge.Also I'm Dedicated
                        with my field and wanted to excel my growth in this field. Technology isn't
                        just my job, it's my playground, where I turn ideas into reality and
                        challenges into opportunities. I'm a problem-solver, a team player, and a
                        lifelong learner on a mission to make a difference through technology. So
                        <Box component={"span"} sx={{ color: "btnColor" }}>
                            &nbsp;let's connect
                        </Box>
                        , collaborate, and create something extraordinary together!"
                    </Typography>
                    <CustomLink href="#educationWork">Read More</CustomLink>
                </Box>
                {/* //////skills */}
                <MySkills />
                {/* //////skills */}
                {/* education & work */}

                <Box
                    id="educationWork"
                    component="div"
                    bgcolor="primary.main"
                    height="100%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    padding={{ xs: "2rem 0 2rem 0", md: "5rem 0 5rem 0", md: "4rem 0 4rem 0" }}
                    justifyItems="center"
                    alignItems="center"
                >
                    <Typography
                        variant="h4"
                        color="white"
                        mb={{ xs: "3rem", md: "5rem" }}
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
                        Education{" "}
                        <Box component={"span"} sx={{ color: "btnColor" }}>
                            &&nbsp;
                        </Box>
                        Work
                    </Typography>
                    <TimeLine data={timlineData} />
                    <Box sx={{ borderBottom: "1px solid #00acf0", width: "100%" }}></Box>
                </Box>
                {/* education & work*/}
            </Box>
        </>
    );
};

export default AboutSection;
