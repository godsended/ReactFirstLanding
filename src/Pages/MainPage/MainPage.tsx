import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import MeCard from "../../Components/MeCard/MeCard";
import NavBar from "../../Components/Navbar/NavBar";
import { NavBarItemData } from "../../Components/Navbar/NavBarItem";
import TitledImageCard from "../../Components/TitledImageCard/TitledImageCard";
import "./MainPage.css"

function MainPage() {
    let navBarItems: NavBarItemData[] = [
        { title: "Home", href: "#home" },
        { title: "About Me", href: "#about_me" },
        { title: "Skills", href: "#skills" },
        { title: "Portfolio", href: "#portfolio" },
        { title: "Contacts", href: "#contacts" }
    ];
    return (
        <div>
            <NavBar items={navBarItems} />
            <MeCard name={"Ilya\nKolesnikov"} description={".NET & JS developer\n19 years old, Minsk"} 
                imageSrc={"/images/BSPP2266.png"}/>
            <AboutMe title="About me" descriptionParagraphs={[
                "Hi, I'am Ilya - .NET and JS developer from Minsk.\nI'am interested in programming and everything connected with it.",
                "I'am studying at YouTube courses.",
                "Ready to implement excellent projects with wonderful people."
            ]}/>
            <div id="skills" className="main-div">
                <h1>Skills</h1>
                <div>I work in such programs as</div>
                <div className="programs-container">
                    <TitledImageCard title={"Adobe\nPhotoshop"} imageSrc="/images/PS.png" />
                    <TitledImageCard title={"Adobe\nIllustrator"} imageSrc="/images/AI.png" />
                    <TitledImageCard title={"Adobe\nAfter Affects"} imageSrc="/images/AE.png" />
                    <TitledImageCard title={"Figma"} imageSrc="/images/Figma.png" />
                </div>
            </div>
        </div>
    )
}

export default MainPage;