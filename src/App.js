import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import "./styles/app.css";
import SocialBox from "./Components/SocialBox/SocialBox";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
