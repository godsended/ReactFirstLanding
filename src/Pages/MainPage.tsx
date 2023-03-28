import React from "react";
import MeCard from "../Components/MeCard/MeCard";
import NavBar from "../Components/Navbar/NavBar";
import { NavBarItemData } from "../Components/Navbar/NavBarItem";

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
        </div>
    )
}

export default MainPage;