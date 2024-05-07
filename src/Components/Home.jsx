import React from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            {/* <Header></Header> */}
            {/* <About></About>
      <Education></Education>
      <Skills></Skills> */}
        </>
    );
};

export default Home;
