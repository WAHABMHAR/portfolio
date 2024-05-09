import React from "react";
import Header from "./Header";
import Education from "./Education";

import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import AboutSection from "./Banner/About Us/AboutSection";
import MySkills from "./MySkills/MySkills";

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <AboutSection></AboutSection>
            <MySkills />
            {/* <Education></Education>
      <Skills></Skills> */}
        </>
    );
};

export default Home;
