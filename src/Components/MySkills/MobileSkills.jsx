import { Box, Typography } from "@mui/material";
import React from "react";

const MobileSkills = ({ data }) => {
    return (
        <div
            style={{
                backgroundColor: "rgba(0, 171, 240, 0.2)",
                width: "16rem",
                height: "12rem",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                boxShadow:
                    "#00abf0 0px 0px 0px 1px, #00abf0 0px 4px 5px -1px, #00abf0 0px 1px 0px inset",
            }}
            bgcolor={"lightPrimary"}
        >
            <Box
                sx={{
                    width: "5.8rem",
                    height: "5.8rem",
                }}
            >
                <img src={data?.lanImg} alt="box-img" width="100%" height="100%" />
            </Box>
            <Typography
                fontSize={"1.5rem"}
                fontWeight={600}
                letterSpacing={"1px"}
                variant="p"
                sx={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage:
                        "linear-gradient(162deg, rgba(255,255,255,1) 30%, rgba(112,208,247,1) 38%, rgba(95,202,246,1) 57%, rgba(20,32,51,1) 78%)",
                }}
            >
                {data?.lanName}
            </Typography>
        </div>
    );
};

export default MobileSkills;
