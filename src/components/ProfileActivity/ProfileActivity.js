import React, { useState } from "react";
import styles from './ProfileActivity.module.css';
import PropTypes from 'prop-types';
import ServiceName from "../ServiceName/ServiceName";
import svgManager from './../../svgs/svgManager';
import ProfileActivityManager from "./ProfileActivityManager";

function ProfileActivity({content, onResize, size}) {

    

    return (
        <div className={styles.wrapperContainer} style={size ? {height: '1020px'} : {}}>
            <div className={styles.wrapper}>
                <ServiceName name={'Активность'} displayCount={true} count={
                    Object.keys(content).length ? content.statuses.length + content.avatars.length + content.names.length : 0
                    } />

                <div className={styles.activities} style={size ? {height: '900px'} : {}}>
                    {
                        Object.keys(content).length ? <ProfileActivityManager content={content}/> : null
                    }
                </div>

                <div className={styles.more} onClick={onResize}>
                    <p className={styles.moreText}>{size ? 'Скрыть' :'Показать всё'}</p>
                    <div className={styles.moreIcon} style={size ? {transform: 'rotateZ(180deg)', marginTop: '-8px'} : {}}>{svgManager.getSvg('moreActivityContent')}</div>
                </div>
            </div>
        </div>
    );

}

ProfileActivity.propTypes = {
    content: PropTypes.object,
    onResize: PropTypes.func,
    size: PropTypes.bool
}

export default ProfileActivity;