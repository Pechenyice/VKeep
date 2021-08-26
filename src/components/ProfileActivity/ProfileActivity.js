import React, { useState } from "react";
import styles from './ProfileActivity.module.css';
import PropTypes from 'prop-types';
import ServiceName from "../ServiceName/ServiceName";
import svgManager from './../../svgs/svgManager';
import ProfileActivityNote from "./ProfileActivityNote";

function ProfileActivity({content, onResize, size}) {

    

    return (
        <div className={styles.wrapperContainer} style={size ? {height: '1020px'} : {}}>
            <div className={styles.wrapper}>
                <ServiceName name={'Активность'} displayCount={true} count={content.length} />

                <div className={styles.activities} style={size ? {height: '900px'} : {}}>
                    {
                        content.map((a, i) => <ProfileActivityNote key={i} content={a}/>)
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
    content: PropTypes.arrayOf(PropTypes.object),
    onResize: PropTypes.func,
    size: PropTypes.bool
}

export default ProfileActivity;