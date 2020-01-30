import React from 'react';

import style from './profilePhoto.module.css';

export const ProfilePhoto = () => {
    const { profilePhoto, overlay, photo1 } = style;
    return (
        <div className={profilePhoto}>
            <div className={overlay}>
                <div className={photo1} />
            </div>
        </div>
    )
}