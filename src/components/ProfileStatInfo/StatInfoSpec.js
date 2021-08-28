import React from "react";
import styles from './ProfileStatInfo.module.css';
import PropTypes from 'prop-types';
import SvgIconBlock from "../SvgIconBlock/SvgIconBlock";

function StatInfoSpec({fillSkeleton=false, skeleton, icon, hint, count, }) {

    function inclined(word) {
        return word;
    }

    return (
        <div className={styles.statInfoWrapper}>
            <SvgIconBlock icon={icon}/>
            
            {
                !fillSkeleton ?
                <div className={styles.statTextWrapper}>
                    <p className={styles.statCount}>{count}</p>
                    <p className={styles.statHint}>{inclined(hint)}</p>
                </div> :
                <div className={styles.statTextWrapper}>
                    {
                        skeleton
                    }
                </div>
            }
        </div>
    );

}

StatInfoSpec.propTypes = {
    fillSkeleton: PropTypes.bool,
    skeleton: PropTypes.node,
    icon: PropTypes.object,
    hint: PropTypes.string,
    count: PropTypes.number
}

export default StatInfoSpec;