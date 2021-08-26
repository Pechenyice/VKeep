import React from "react";
import styles from './ProfileStatInfo.module.css';
import PropTypes from 'prop-types';
import SvgIconBlock from "../SvgIconBlock/SvgIconBlock";

function StatInfoSpec({icon, hint, count}) {

    function inclined(word) {
        return word;
    }

    return (
        <div className={styles.statInfoWrapper}>
            <SvgIconBlock icon={icon}/>
            
            <div className={styles.statTextWrapper}>
                <p className={styles.statCount}>{count}</p>
                <p className={styles.statHint}>{inclined(hint)}</p>
            </div>
        </div>
    );

}

StatInfoSpec.propTypes = {
    icon: PropTypes.string,
    hint: PropTypes.string,
    count: PropTypes.number
}

export default StatInfoSpec;