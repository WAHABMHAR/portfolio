import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/app.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import MyWork from "./Components/Work/MyWork";
import ContactPage from "./Components/ContactForm/ContactPage";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="aboutme" element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="work" element={<MyWork />} />
                <Route path="contact" element={<ContactPage />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
