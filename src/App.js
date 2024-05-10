import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import "./styles/app.css";

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
