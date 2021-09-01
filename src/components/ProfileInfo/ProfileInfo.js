import React from "react";
import styles from './ProfileInfo.module.css';
import PropTypes from 'prop-types';
import PlatformPoint from "../PlatformPoint/PlatformPoint";

function ProfileInfo({img, name, aka, status, platform}) {

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profilePhotoWrapper}>
                <img src={img} alt='profile photo' />
                {
                    platform != '' ?
                    <div className={styles.platformPointWrapper}>
                        <PlatformPoint platform={platform}/> 
                    </div> : 
                    null
                }
                
            </div>

            <div className={styles.profileTextWrapper}>
                <div className={styles.profileLinksWrapper}>
                    <h3 className={styles.profileName}>{name}</h3>
                    <p className={styles.profileAka}>@{aka}</p>
                </div>

                <div className={styles.profileStatus}>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    );

}

ProfileInfo.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    aka: PropTypes.string,
    status: PropTypes.string,
    platform: PropTypes.string
}

export default ProfileInfo;