import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.hw1}>hw1</NavLink>
            <NavLink to={PATH.hw2}>hw2</NavLink>
            <NavLink to={PATH.hw3}>hw3</NavLink>
            <NavLink to={PATH.hw4}>hw4</NavLink>

            // add NavLinks

        </div>
    );
}

export default Header;
