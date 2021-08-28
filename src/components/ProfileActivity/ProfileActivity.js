import React, { useState } from "react";
import styles from './ProfileActivity.module.css';
import PropTypes from 'prop-types';
import ServiceName from "../ServiceName/ServiceName";
import svgManager from './../../svgs/svgManager';
import ProfileActivityManager from "./ProfileActivityManager";
import Skeleton from "../Skeleton/Skeleton";

function ProfileActivity({content, onResize, size}) {

    function countRenderedUpdates() {
        let count = 0;
        for (let s of content.statuses) {
            count += s.isInitial ? 1 : 0;
        }

        for (let a of content.avatars) {
            count += a.isInitial ? 1 : 0;
        }

        for (let n of content.names) {
            count += n.isInitial ? 1 : 0;
        }

        return count;
    }

    return (
        // <div className={styles.wrapperContainerBox} style={size ? {height: '1020px'} : {}}>
            <div className={styles.wrapperContainer} style={size ? {height: '1020px'} : {}}>
                <div className={styles.wrapper}>
                    <ServiceName name={'Активность'} displayCount={true} count={
                        Object.keys(content).length ? countRenderedUpdates() : '-'
                        } />

                    <div className={styles.activities} style={size ? {height: '900px', overflowY: 'auto'} : {}}>
                        {
                            Object.keys(content).length ? 
                            <ProfileActivityManager content={content}/> : 
                            <div>
                                <Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '100%', marginBottom: '30px'}} />
                                <Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '100%'}} />
                            </div>
                        }
                    </div>

                    <div className={styles.more} onClick={onResize}>
                        <p className={styles.moreText}>{size ? 'Скрыть' :'Показать всё'}</p>
                        <div className={styles.moreIcon} style={size ? {transform: 'rotateZ(180deg)', marginTop: '-8px'} : {}}>{svgManager.getSvg('moreActivityContent')}</div>
                    </div>
                </div>
            </div>
        // </div>
    );

}

ProfileActivity.propTypes = {
    content: PropTypes.object,
    onResize: PropTypes.func,
    size: PropTypes.bool
}

export default ProfileActivity;