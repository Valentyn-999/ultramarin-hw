import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header_nave_links}>
            <div className={s.pre_junior}>
                <NavLink className={s.pre_junior_nav} activeClassName={s.active} to={'/pre-junior'}>PRE-JUNIOR</NavLink>
            </div>
            <div className={s.junior}>
                <NavLink className={s.junior_nav} activeClassName={s.active} to={'/junior'}>JUNIOR</NavLink>
            </div>
            <div className={s.junior_plus}>
                <NavLink className={s.junior_plus_nav} activeClassName={s.active} to={'/junior-plus'}>JUNIOR-PLUS</NavLink>
            </div>

            {/*// add NavLinks*/}

        </div>
    );
}

export default Header;
