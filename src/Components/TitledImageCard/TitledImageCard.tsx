import React from "react";
import "./TitledImageCard.css"

interface TitledImageCardData {
    title: string;
    imageSrc: string;
    class?: string;
}

function TitledImageCard(data: TitledImageCardData) {
    return (
        <div className={"titled-image-card" + data.class == null ? "" : data.class}>
            <img src={data.imageSrc} />
            <p className="titled-image-card-title">{data.title}</p>
        </div>
    )
}

export default TitledImageCard;