import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { Box } from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const TimeLine = ({ data }) => {
    return (
        <Box id="goTimeline" bgcolor={"primary.main"} component={"section"}>
            <VerticalTimeline>
                {data?.map((item, index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "rgba(0, 171, 240, 0.4)", color: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgba(0, 171, 240, 0.5)" }}
                            date={item?.duration}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            icon={item?.Icon}
                        >
                            <h2 className="vertical-timeline-element-title">{item?.title}</h2>
                            <h5 className="vertical-timeline-element-subtitle">{item?.position}</h5>
                            <p>{item?.desc}</p>
                        </VerticalTimelineElement>
                    );
                })}
                <VerticalTimelineElement
                    iconStyle={{ background: "#ff5252", color: "#fff" }}
                    date="End"
                    icon={<SelfImprovementIcon />}
                />
            </VerticalTimeline>
        </Box>
    );
};

export default TimeLine;
