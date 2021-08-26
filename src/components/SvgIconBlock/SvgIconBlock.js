import React from "react";
import styles from './SvgIconBlock.module.css';
import PropTypes from 'prop-types';
import svgManager from "../../svgs/svgManager";

function SvgIconBlock({icon}) {

    return (
        <div className={styles.activitySvg}>
            {icon}
        </div>
    );

}

SvgIconBlock.propTypes = {
    icon: PropTypes.string
}

export default SvgIconBlock;