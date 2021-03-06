import React from "react";
import PropTypes from 'prop-types';
import styles from './VKeepLogo.module.css';
import { Link } from "react-router-dom";

function VKeepLogo({ logoFontSize, displayHint, hintFontSize }) {

    return (
        <Link to={'/'}>
            <div className={styles.logoWrapper}>
                <h1 className={styles.logoMain} style={{ fontSize: `${logoFontSize}px` }} >VKeep</h1>
                {displayHint ? <p className={styles.logoHint} style={{ fontSize: `${hintFontSize}px` }} >Будь в курсе<br />последних событий</p> : null}
            </div>
        </Link>
    );

}

VKeepLogo.propTypes = {
    logoFontSize: PropTypes.number,
    displayHint: PropTypes.bool,
    hintFontSize: PropTypes.number
}

export default VKeepLogo;