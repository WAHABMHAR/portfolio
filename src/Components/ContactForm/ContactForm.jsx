import {
    Box,
    Container,
    Divider,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    TextField,
} from "@mui/material";
import React from "react";
import { CustomButton } from "../../styles/muiStyles";
import planeSolid from "../../Assets/images/svg/plane.svg";
import planeOutline from "../../Assets/images/svg/outline.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./contactform.css";

const contactDataLink = [
    {
        icon: <LocationOnIcon />,
        text: "384 F1 Samsani Rd, Block F1 Phase 1 Johar Town, Lahore, Punjab",
    },
    {
        icon: <LocalPhoneIcon />,
        text: "+923401255139",
    },
    {
        icon: <MarkunreadIcon />,
        text: "wahabmhar@gmail.com",
    },
];

const socialMedia = [
    { icon: <GitHubIcon />, path: "https://github.com/WAHABMHAR" },
    { icon: <LinkedInIcon />, path: "https://www.linkedin.com/in/wahab-mehar-b7b2a81a0/" },
    { icon: <InstagramIcon />, path: "https://www.instagram.com/mrmehar35/" },
    { icon: <FacebookIcon />, path: "https://www.facebook.com/abdulwahab.prince.1" },
];

const ContactForm = () => {
    return (
        <Box
            id="contact"
            component={"section"}
            bgcolor={"primary.main"}
            sx={{
                padding: "4rem 0",
            }}
        >
            <Container sx={{ display: "flex", gap: "1rem" }}>
                <Box className="contact-left" sx={{ width: "55%" }}>
                    <form action="#" style={{ width: "100%" }} className="contact-form">
                        <Stack spacing={"1rem"}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                required
                                sx={{
                                    width: "100%",
                                    color: "btnColor",
                                    border: "1px solid rgba(0, 171, 240, 0.7)",
                                    borderRadius: "4px",
                                    outline: "none",
                                    caretColor: "#00acf0",
                                    "&:hover": {
                                        borderColor: "btnColor",
                                    },
                                    "& label": {
                                        color: "btnColor",
                                        padding: "2px 4px",
                                        backgroundColor: "primary.main",
                                        fontSize: "0.9rem",
                                    },
                                    "& label.Mui-focused": {
                                        color: "btnColor",
                                    },
                                    "& .Mui-focused": {
                                        outline: "none",
                                        caretColor: "btnColor",
                                    },
                                    "& fieldset": {
                                        border: "none",
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                required
                                sx={{
                                    width: "100%",
                                    color: "btnColor",
                                    border: "1px solid rgba(0, 171, 240, 0.7)",
                                    borderRadius: "4px",
                                    outline: "none",
                                    caretColor: "#00acf0",
                                    "&:hover": {
                                        borderColor: "btnColor",
                                    },
                                    "& label": {
                                        color: "btnColor",
                                        padding: "2px 4px",
                                        backgroundColor: "primary.main",
                                        fontSize: "0.9rem",
                                    },
                                    "& label.Mui-focused": {
                                        color: "btnColor",
                                    },
                                    "& .Mui-focused": {
                                        outline: "none",
                                        caretColor: "btnColor",
                                    },
                                    "& fieldset": {
                                        border: "none",
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                                multiline={true}
                                rows={4}
                                required
                                sx={{
                                    width: "100%",
                                    color: "btnColor",
                                    border: "1px solid rgba(0, 171, 240, 0.7)",
                                    borderRadius: "4px",
                                    outline: "none",
                                    caretColor: "#00acf0",
                                    "&:hover": {
                                        borderColor: "btnColor",
                                    },
                                    "& label": {
                                        color: "btnColor",
                                        padding: "2px 4px",
                                        backgroundColor: "primary.main",
                                        fontSize: "0.9rem",
                                    },
                                    "& label.Mui-focused": {
                                        color: "btnColor",
                                    },
                                    "& .Mui-focused": {
                                        outline: "none",
                                        caretColor: "btnColor",
                                    },
                                    "& fieldset": {
                                        border: "none",
                                    },
                                }}
                            />
                            <CustomButton
                                sx={{ position: "relative" }}
                                className="contact-submit-button"
                            >
                                <img
                                    src={planeSolid}
                                    alt="solid"
                                    height={"35px"}
                                    style={{ position: "absolute" }}
                                />
                                <img src={planeOutline} alt="outline" height={"30px"} />
                            </CustomButton>
                        </Stack>
                    </form>
                </Box>
                <Box className="contact-right" sx={{ padding: "0rem 1rem", width: "45%" }}>
                    <List>
                        {contactDataLink?.map((item, index) => {
                            return (
                                <ListItem key={index} className="icon-list-item">
                                    <ListItemIcon>{item?.icon}</ListItemIcon>
                                    <ListItemText primary={item?.text} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <Divider sx={{ backgroundColor: "#00acf0" }} />
                    <Box className="social-media-list">
                        <List sx={{ display: "flex", gap: "2rem" }}>
                            {socialMedia?.map((item, index) => {
                                return (
                                    <ListItem key={index} className="icon-list-item">
                                        <Link href={item?.path} target="_blank" component={"a"}>
                                            {item?.icon}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactForm;
