import React from "react";
import styles from './ProfileStatistic.module.css';
import PropTypes from 'prop-types';
import PlatformPoint from "../PlatformPoint/PlatformPoint";

function ChartTimePlank({fillSkeleton=false, skeleton, isActive, platform, time}) {

    let classes = [styles.plank];

    if (isActive) classes.push(styles.plankActive)

    return (
        <div className={classes.join(' ')}>
            <div className={styles.plankPoint}>
                <PlatformPoint platform={platform} />
            </div>

            <div className={styles.plankContent}>
                <p className={styles.plankName}>{platform}</p>
                {
                    !fillSkeleton ?
                    <p className={styles.plankTime}>({time})</p> :
                    skeleton
                }
            </div>
        </div>
    );

}

ChartTimePlank.propTypes = {
    fillSkeleton: PropTypes.bool,
    skeleton: PropTypes.node,
    isActive: PropTypes.bool,
    platform: PropTypes.string,
    time: PropTypes.string
}

export default ChartTimePlank;