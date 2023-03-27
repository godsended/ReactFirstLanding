import React from "react";
import "./NavBar.css"
import NavBarItem, { NavBarItemData } from "./NavBarItem";

export interface NavBarData {
    items: NavBarItemData[];
}

function NavBar(data: NavBarData) {
    return (
        <div className="navbar main-div">
            {data.items.map((obj, i) =>
                <NavBarItem title={obj.title} href={obj.href} />
            )}
        </div>
    )
}

export default NavBar;