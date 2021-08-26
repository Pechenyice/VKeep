import React from "react";
import styles from './ProfileStatistic.module.css';
import PropTypes from 'prop-types';
import PlatformPoint from "../PlatformPoint/PlatformPoint";

function ChartTimePlank({isActive, platform, time}) {

    let classes = [styles.plank];

    if (isActive) classes.push(styles.plankActive)

    return (
        <div className={classes.join(' ')}>
            <div className={styles.plankPoint}>
                <PlatformPoint platform={platform} />
            </div>

            <div className={styles.plankContent}>
                <p className={styles.plankName}>{platform}</p>
                <p className={styles.plankTime}>({time})</p>
            </div>
        </div>
    );

}

ChartTimePlank.propTypes = {
    isActive: PropTypes.bool,
    platform: PropTypes.string,
    time: PropTypes.string
}

export default ChartTimePlank;