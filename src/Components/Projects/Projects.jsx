import ProjectBanner from "./ProjectBanner";
import "./projects.css";
import ProjectTechnologies from "./ProjectTechnologies";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import MyProjects from "./MyProjects";

const Projects = () => {
    return (
        <>
            <NavBar />
            <ProjectBanner />
            <ProjectTechnologies />
            <MyProjects />
            <Footer />
        </>
        // <Box>
        //     <Container>
        //         <Box></Box>
        //     </Container>
        //     <Box>
        //         <TextSphere />
        //     </Box>
        // </Box>
    );
};

export default Projects;
