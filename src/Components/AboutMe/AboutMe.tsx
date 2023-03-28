import React from "react";
import "./AboutMe.css"

interface AboutMeData {
    title: string;
    descriptionParagraphs: string[];
}

function AboutMe(data: AboutMeData) {

    return (
        <div id="about_me" className="about-me main-div-black">
            <h1>{data.title}</h1>
            <div>{data.descriptionParagraphs.map((v, i) => 
                <div>
                    <p>
                    {v}
                    </p>
                </div>
            )}
            </div>
        </div>
    )
}

export default AboutMe;