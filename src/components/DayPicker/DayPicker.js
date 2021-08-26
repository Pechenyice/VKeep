import React from "react";
import styles from "./DayPicker.module.css";
import PropTypes from "prop-types";

function DayPicker({onClick, text, isActive}) {

    let classes = [styles.day];

    if (isActive) classes.push(styles.dayActive);

    return (
        <div className={classes.join(' ')} onClick={onClick} >
            {text}
        </div>
    );

}

DayPicker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    isActive: PropTypes.bool
};

export default DayPicker;