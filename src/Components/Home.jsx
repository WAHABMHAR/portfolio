import React from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import MySkills from "./MySkills/MySkills";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";
import AboutSection from "./AboutMe/AboutSection";

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <AboutSection></AboutSection>
            <MySkills />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
