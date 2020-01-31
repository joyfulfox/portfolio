import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './navBar.module.css';

export const NavBar = () => {
    return (
        <nav className={style.nav_bar}>
            <div className={style.nav_links}>
                <div className={style.nav_link}>
                    <NavLink to='/portfolio'>Home</NavLink>
                </div>
                <div className={style.nav_link}>
                    <NavLink to='/portfolio/projects'>Projects</NavLink>
                </div>
                <div className={style.nav_link}>
                    <NavLink to='/portfolio/about_me'>About me</NavLink>
                </div>
                <div className={style.nav_link}>
                    <NavLink to='/portfolio/contacts'>Contacts</NavLink>
                </div>
            </div>
        </nav>
    )
}