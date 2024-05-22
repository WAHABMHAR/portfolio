import { Box, Typography, styled } from "@mui/material";
import React from "react";
import xoomMap from "../../Assets/images/projects/xoom.png";
import { CustomLink } from "../../styles/muiStyles";

const StyledBox = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectBox = ({ data }) => {
    return (
        <Box
            width={"16rem"}
            height={"14rem"}
            sx={{
                backgroundColor: "transparent",
                perspective: "1000px",
                cursor: "pointer",
                ":hover": {
                    "& .flip_inner_box": {
                        transform: "rotateY(180deg)",
                    },
                },
            }}
        >
            <Box
                className="flip_inner_box"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.4s",
                    transformStyle: " preserve-3d",
                    borderRadius: "5px",
                    ":hover": {
                        "& .flip_front": {
                            zIndex: 1,
                        },
                        "& .flip_back": {
                            zIndex: 2,
                        },
                    },
                }}
            >
                <StyledBox
                    zIndex={2}
                    className="flip_front"
                    backgroundColor="transparent"
                    sx={{
                        border: "2px solid #00acf0",
                        borderRadius: "5px",
                        backfaceVisibility: "hidden",
                        mozBackfaceVisibility: "hidden",
                        webkitBackfaceVisibility: "hidden",
                    }}
                >
                    <Box
                        width={"100%"}
                        height={"100%"}
                        overflow={"hidden"}
                        borderRadius={"4px"}
                        position={"relative"}
                        sx={{
                            ":before": {
                                content: "''",
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                background: "rgba(0, 171, 240, 0.1)",
                            },
                        }}
                    >
                        <img
                            src={data?.projIMG}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "fill",
                            }}
                        />
                    </Box>
                </StyledBox>
                <StyledBox
                    className="flip_back"
                    sx={{
                        backgroundColor: "lightPrimary",
                        transform: "rotateY(180deg)",
                        border: "2px solid #00acf0",
                        borderRadius: "5px",
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        mozBackfaceVisibility: "hidden",
                        webkitBackfaceVisibility: "hidden",
                        gap: "1rem",
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h2"
                        fontSize={"1.1rem"}
                        letterSpacing={"1px"}
                        fontWeight={500}
                        color="primary.white"
                    >
                        {data?.projName}
                    </Typography>

                    <CustomLink href={data?.path} target="_blank">
                        Live Demo
                    </CustomLink>
                </StyledBox>
            </Box>
        </Box>
    );
};

export default ProjectBox;
