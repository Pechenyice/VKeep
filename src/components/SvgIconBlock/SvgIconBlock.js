import React from "react";
import styles from './SvgIconBlock.module.css';
import PropTypes from 'prop-types';

function SvgIconBlock({icon}) {

    return (
        <div className={styles.activitySvg}>
            <div className={styles.activitySvgWrapper}>
                {icon}
            </div>
        </div>
    );

}

SvgIconBlock.propTypes = {
    icon: PropTypes.object
}

export default SvgIconBlock;