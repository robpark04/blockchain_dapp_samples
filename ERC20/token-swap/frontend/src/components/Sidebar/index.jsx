import React from "react";
import { Link, useLocation  } from "react-router-dom";

import "../../styles/css/app.css";

function NavLink(props) {
    const location = useLocation ();
    var isActive = location.pathname === props.to;
    var className = isActive ? "nav-item active" : "nav-item";

    return (
        <li className={className}>
            <Link className="nav-link" {...props}>
                <span>{props.title}</span>
            </Link>
        </li>
    );
}

const Sidebar = ({ children }) => {
    const menus = [
        {
            to: "/", 
            title: "Dex"
        }, 
    ];
    return (
        <>
            <ul
                className="navbar-nav sidebar sidebar-dark accordion bg-dark"
                id="accordionSidebar"
            >
                {menus.map((menu, index) => {
                    return <NavLink key={index} to={menu.to} title={menu.title}/>;
                })}
            </ul>
        </>
    );
};

export default Sidebar;
