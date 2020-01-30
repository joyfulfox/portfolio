import React from 'react';

import style from './footer.module.css';

export const Footer = () => {
    return (
        <div className={style.footer_overlay}>
            <div className={style.footer}>
                <div className={style.content}>
                    <p>Created with ReactJS</p>
                    <p>2020</p>
                </div>
            </div>
        </div>
    )
}