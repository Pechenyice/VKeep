import React from "react";
import styles from './ServiceName.module.css';
import PropTypes from 'prop-types';

function ServiceName({name, displayCount, count}) {

    return (
        <div className={styles.serviceNameWrapper}>
            <h2 className={styles.serviceName}>{name}</h2>
            {displayCount ? <div className={styles.serviceCount}>{count}</div> : null}
        </div>
    );

}

ServiceName.propTypes = {
    name: PropTypes.string,
    displayCount: PropTypes.bool,
    count: PropTypes.any
}

export default ServiceName;