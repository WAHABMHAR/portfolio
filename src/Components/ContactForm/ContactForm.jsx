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
    Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
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
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-router-dom";

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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Current", form.current);
        let formData = {
            from_name: name,
            from_email: email,
            message,
        };

        emailjs.send("service_cshlaub", "contact_form", formData, "A6_CLJnbs4UR4e5md").then(
            (result) => {
                toast("Form submitted successfully");
                setName("");
                setEmail("");
                setMessage("");
            },
            (error) => {
                toast("Form not submitted! Try again.");
                console.log("Form not submitted! Try again.");
            }
        );
    };
    return (
        <Box
            id="contact"
            component={"section"}
            bgcolor={"primary.main"}
            sx={{
                padding: "4rem 0",
            }}
        >
            <Container
                sx={{ display: "flex", gap: "1rem", flexDirection: "column", alignItems: "center" }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        color="white"
                        mb={{ xs: "3rem", md: "5rem" }}
                        padding={"0 1rem"}
                        fontWeight="bolder"
                        position={"relative"}
                        fontSize={{ xs: "2rem", md: "2.2rem" }}
                        sx={{
                            ":before": {
                                content: '""',
                                width: "0",
                                height: "5px",
                                position: "absolute",
                                borderRadius: "2px",
                                backgroundColor: "btnColor",
                                bottom: "-5px",
                                left: "0",
                                transition: "0.8s ease",
                            },
                            "&:hover::before": {
                                width: "100%",
                            },
                        }}
                    >
                        Contact{" "}
                        <Box component={"span"} sx={{ color: "btnColor" }}>
                            ME
                        </Box>
                    </Typography>
                </Box>
                <Stack direction={{ sm: "column", md: "row" }} width={"100%"}>
                    <Box className="contact-left" sx={{ width: { xs: "100%", md: "50%" } }}>
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            style={{ width: "100%" }}
                            className="contact-form"
                        >
                            <Stack spacing={"1rem"}>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    sx={{
                                        width: "100%",
                                        color: "#00acf0 !important",
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
                                            color: "btnColor",
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                            color: "btnColor",
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
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
                                            color: "btnColor",
                                        },
                                        "& fieldset": {
                                            border: "none",
                                        },
                                    }}
                                />
                                <CustomButton
                                    sx={{ position: "relative" }}
                                    className="contact-submit-button"
                                    type="submit"
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
                    <Box
                        className="contact-right"
                        sx={{ padding: "0rem 1rem", width: { xs: "100%", md: "45%" } }}
                    >
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
                        {/* <Box>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.967025605046!2d55.23493387608176!3d25.17059123277647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6948545672c7%3A0xcb101a96555c09ae!2zw4dlxZ9tZSBCYXpsYW1hIEthaHZhbHTEsQ!5e0!3m2!1sen!2s!4v1715775110967!5m2!1sen!2s"
                                width="100%"
                                height="150"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box> */}
                        <Box className="social-media-list">
                            <List sx={{ display: "flex", gap: { xs: "0.5rem", md: "2rem" } }}>
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
                </Stack>
            </Container>
        </Box>
    );
};

export default ContactForm;
