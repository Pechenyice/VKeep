import React from "react";
import styles from './PlatformPoint.module.css';
import PropTypes from 'prop-types';
import Colors from "../../variables/Colors";

function PlatformPoint({platform}) {

    return (
        <div className={styles.profileStatusWrapper} style={{ backgroundColor: Colors[platform] }}></div>
    );

}

PlatformPoint.propTypes = {
    platform: PropTypes.string
}

export default PlatformPoint;