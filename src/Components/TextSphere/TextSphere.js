import React, { useEffect } from "react";

import "./textsphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "ES6",
                "ReactJS",
                "NextJS",
                "Redux",
                "RTK",
                "Axios",
                "TailWind CSS",
                "Material UI",
                "WordPress",
                "NodeJS",
                "ExpressJS",
                "Solidity",
                "Truffle",
                "Babel",
                "OneSignal",
                "Brevo",
                "EmailJs",
                "Google Maps",
                "GIT",
                "GITHUB",
            ];

            const options = {
                radius: 300,
                maxSpeed: "fast",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <div className="text-shpere">
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default TextSphere;
