import {
    NavLink
} from "react-router";

import { IoIosHome } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';

import { ImUser } from "react-icons/im";

import { Logout } from "../Logout";

import "./styles.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        <IoIosHome className = "icon"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/newPost">
                        <IoIosAdd className = "icon"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/profile">
                        <ImUser className = "icon"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/login"> Login </NavLink>
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </nav>
    )
}