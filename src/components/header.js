import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfilePhoto } from './profilePhoto/profilePhoto';
import { NavBar } from './navBar/navBar';

import style from './componentStyle.module.css';

export const Header = () => {
    return (
        <header>
            <ProfilePhoto />
            <NavBar />
            <div className={style.write_me}>
                <NavLink to='/portfolio/contacts'>
                    <span className={style.animation_layer} />
                    <span className={style.text}>write me</span>
                    <span className={style.border_layer} />
                </NavLink>
            </div>
        </header>
    )
}