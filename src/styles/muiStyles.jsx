import { Button, createTheme, styled } from "@mui/material";

export const CustomTheme = createTheme({
    palette: {
        primary: {
            main: "#142033",
            white: "#ffffff",
            light: "#fffff5",
        },
        black: "#000000",
        btnColor: "#00acf0",
        // lightPrimary: "rgba(255, 255, 255,0.8)",
        lightPrimary: "rgba(0, 171, 240, 0.2)",
        customGradient: "linear-gradient(162deg, rgba(0,172,240,1) 0%, rgba(20,32,51,1) 54%)",
    },
});

export const CustomButton = styled(Button)`
    padding: 0.5rem 2rem;
    background: #00abf0;
    color: #ffffff;
    position: relative;
    z-index: 1;
    font-weight: 500;
    border-radius: 5px;
    font-size: 0.8rem;
    transition: 0.5 ease;
    box-shadow: #ffffff (0, 0, 0, 0.56) 0px 22px 70px 4px;
    &::before {
        content: "";
        width: 0;
        height: 100%;
        background: #00abf0;
        z-index: -1;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        transition: 1s;
    }
    &:hover::before: {
        width: 100%;
        background: transparent;
    }
    &:hover {
        border: 1px solid #00abf0;
        color: #00abf0;
        background-color: transparent;
    }
`;

export const CustomLink = styled("a")`
    padding: 0.5rem 2rem;
    background: #00abf0;
    color: #ffffff;
    position: relative;
    text-decoration: none;
    z-index: 1;
    font-weight: 500;
    border-radius: 5px;
    font-size: 0.8rem;
    transition: 0.5 ease;
    box-shadow: #ffffff (0, 0, 0, 0.56) 0px 22px 70px 4px;
    &::before {
        content: "";
        width: 0;
        height: 100%;
        background: #00abf0;
        z-index: -1;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        transition: 1s;
    }
    &:hover::before: {
        width: 100%;
        background: transparent;
    }
    &:hover {
        border: 1px solid #00abf0;
        color: #00abf0;
        background-color: transparent;
    }
`;
