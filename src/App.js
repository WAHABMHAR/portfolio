import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/app.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
