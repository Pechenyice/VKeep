import React from "react";
import PropTypes from "prop-types";
import styles from './ProfileActivity.module.css';
import ProfileActivity from "./ProfileActivity";

function ProfileActivityResizer({onResize, content, size}) {
    let classes = [styles.profileActivityResizeWrapper];

    if (size) classes.push(styles.profileActivityResizeWrapperMaxed);
    
    return (
        <div className={styles.profileActivityNormalisedSize}>
            <div className={classes.join(' ')}>
                <ProfileActivity onResize={onResize} content={content} size={size}/>
            </div>
        </div>
    );
}

ProfileActivityResizer.propTypes = {
    content: PropTypes.object,
    onResize: PropTypes.func,
    size: PropTypes.bool
}

export default ProfileActivityResizer;