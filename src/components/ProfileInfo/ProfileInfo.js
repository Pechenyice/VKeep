import React from "react";
import styles from './ProfileInfo.module.css';
import PropTypes from 'prop-types';
import PlatformPoint from "../PlatformPoint/PlatformPoint";

function ProfileInfo({img, name, aka, status}) {

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profilePhotoWrapper}>
                <img src={img} alt='profile photo' />
                <div className={styles.platformPointWrapper}>
                    <PlatformPoint platform={'PC'}/>
                </div>
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
    img: PropTypes.object,
    name: PropTypes.string,
    aka: PropTypes.string,
    status: PropTypes.string
}

export default ProfileInfo;