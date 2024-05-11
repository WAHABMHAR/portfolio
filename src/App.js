import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import "./styles/app.css";
import AboutMe from "./Components/About Us/AboutMe";
import Projects from "./Components/Projects/Projects";
import MyWork from "./Components/Work/MyWork";
import ContactPage from "./Components/ContactForm/ContactPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work" element={<MyWork />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    );
}

export default App;
