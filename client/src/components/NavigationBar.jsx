import React from "react";
import style from "./NavigationBar.module.css";
import menu from "../assets/hamburger-menu.png";

function NavigationBar() {
    return (
        <div className={style.NavigationBar}>
            <div className={style.menuIconContainer}>
                <img src={menu} alt="menu-icon" />
            </div>
            <h1>Some Header</h1>
            <button>Recent</button>
            <button>Templates</button>
            <button>Create</button>
            <input type="search" />
            <div className={style.menuIconContainer}>
                <img src={menu} alt="menu-icon" />
            </div>
        </div>
    );
}

export default NavigationBar;
