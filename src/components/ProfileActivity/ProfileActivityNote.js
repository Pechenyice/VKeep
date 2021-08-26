import React, { useState } from "react";
import styles from './ProfileActivity.module.css';
import PropTypes, { func } from 'prop-types';
import svgManager from "../../svgs/svgManager";

function ProfileActivityNote({content}) {

    function renderTypeName(type) {
        switch (type) {
            case 'status': {
                return 'Новый статус';
            }

            case 'image': {
                return 'Новое фото профиля';
            }

            case 'name': {
                return 'Новое имя';
            }
        }
    }

    function renderDate(ts) {
        let date = new Date(ts);

        let datevalues = [
            date.getFullYear(),
            ('0' + date.getMonth()+1).slice(-2),
            ('0' + date.getDate()).slice(-2),
            ('0' + date.getHours()).slice(-2),
            ('0' + date.getMinutes()).slice(-2),
            ('0' + date.getSeconds()).slice(-2)
        ];

        return `${datevalues[2]}-${datevalues[1]}-${datevalues[0]} ${datevalues[3]}:${datevalues[4]}:${datevalues[5]}`;
    }

    return (
        <div className={styles.activityNote}>

            <div className={styles.activitySvg}>
                {svgManager.getSvg(`activity-${content.type}-svg`)}
            </div>

            <div className={styles.activityContent}>

                <div className={styles.activityData}>

                    <div className={styles.activityTypeName}>
                        {
                            renderTypeName(content.type)
                        }
                    </div>

                    <div className={styles.activityDate}>
                        {
                            renderDate(content.timestamp)
                        }
                    </div>

                </div>

                <div className={styles.activityText}>
                    <p><span className={styles.activityDecorated}>{content.oldValue}</span> {'->'} <span>{content.newValue}</span></p>
                </div>

            </div>

        </div>
    );

}

ProfileActivityNote.propTypes = {
    content: PropTypes.object
}

export default ProfileActivityNote;