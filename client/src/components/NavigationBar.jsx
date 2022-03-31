import React from "react";
import style from "./NavigationBar.module.css";
import menu from "../assets/hamburger-menu.png";
import avatar from "../assets/avatar-icon.png";

function NavigationBar() {
    return (
        <div className={style.NavigationBar}>
            <div className={style.menuIconContainer}>
                <img src={menu} alt="menu-icon" />
            </div>
            <div className={style.navLeft}>
                <h1>Project Title</h1>
                <button>Recent</button>
                <button>Templates</button>
                <button>Create</button>
            </div>
            <div className={style.navRight}>
                <input type="search" placeholder="Search" />
                <div className={style.avatarIconContainer}>
                    <img src={avatar} alt="menu-icon" />
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
