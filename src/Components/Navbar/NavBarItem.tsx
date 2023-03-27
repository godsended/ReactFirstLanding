import React from "react";
import "./NavBarItem.css"

export interface NavBarItemData {
    title: string;
    href: string;
}

function NavBarItem(data: NavBarItemData) {
    return (
        <div className="navbar-item">
            <a href={data.href}>{data.title}</a>
        </div>
    )
}

export default NavBarItem;