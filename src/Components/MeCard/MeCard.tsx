import React from "react";
import "./MeCard.css"

interface MeCardData {
    name: string;
    description: string;
    imageSrc: string;
}

function MeCard(data: MeCardData) {
    return (
        <div id="home" className="me-card main-div" style={{ whiteSpace: "pre-wrap" }}>
            <div className="me-card-name">
                {data.name}
            </div>
            <div className="me-card-in-short">
                {data.description}
            </div>
            <div className="me-card-lang">
                <div className="me-card-lang-rotate">
                    <a className="me-card-lang-variant">RU</a>
                    |
                    <a className="me-card-lang-variant">ENG</a>
                </div>
            </div>
            <img src={data.imageSrc}/>
        </div>
    )
}

export default MeCard;