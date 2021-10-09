import React from "react";
import styles from './ProfileActivity.module.css';
import PropTypes from 'prop-types';
import svgManager from "../../svgs/svgManager";
import SvgIconBlock from "../SvgIconBlock/SvgIconBlock";

function ProfileActivityNote({content}) {

    function renderTypeName(type) {
        switch (type) {
            case 'status': {
                return 'Новый статус';
            }

            case 'avatar': {
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
            ('0' + (date.getMonth()+1)).slice(-2),
            ('0' + date.getDate()).slice(-2),
            ('0' + date.getHours()).slice(-2),
            ('0' + date.getMinutes()).slice(-2),
            ('0' + date.getSeconds()).slice(-2)
        ];

        return `${datevalues[2]}-${datevalues[1]}-${datevalues[0]} ${datevalues[3]}:${datevalues[4]}:${datevalues[5]}`;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className={styles.activityNote}>


            <SvgIconBlock icon={svgManager.getSvg(`activity-${content.type}-svg`)} />

            <div className={styles.activityContent}>

                <div className={styles.activityData}>

                    <div className={styles.activityTypeName}>
                        {
                            renderTypeName(content.type)
                        }
                    </div>

                    <div className={styles.activityDate}>
                        {
                            renderDate(content.detectedAt.toString())
                        }
                    </div>

                </div>

                <div className={styles.activityText}>
                    {
                        content.type !== 'avatar' ?
                        <p><span className={styles.activityDecorated}>{content[`old${capitalizeFirstLetter(content.type)}`]}</span> {'->'} <span>{content[`new${capitalizeFirstLetter(content.type)}`]}</span></p> :
                        <p><span className={styles.activityDecorated}><img className={styles.profileActivityAvatar} src={content.oldAvatarURL}></img></span> <span><img className={styles.profileActivityAvatar} src={content.newAvatarURL}></img></span></p>
                    }
                </div>

            </div>

        </div>
    );

}

ProfileActivityNote.propTypes = {
    content: PropTypes.object
}

export default ProfileActivityNote;