import React from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";
import AboutSection from "./AboutMe/AboutSection";
import ProjectTechnologies from "./Projects/ProjectTechnologies";
import MyProjects from "./Projects/MyProjects";

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <ProjectTechnologies />
            <AboutSection></AboutSection>
            <MyProjects />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
