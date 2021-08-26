import React from "react";
import styles from './LayoutManager.module.css';
import PropTypes from 'prop-types';

function LayoutManager({columns, stylesheet = {}, children}) {

    let classes = [styles.flexColumns, styles[`flexColumns-${columns}`]];

    return (
        <section className={classes.join(' ')} style={stylesheet}>
            {children}
        </section>
    );

}

LayoutManager.propTypes = {
    columns: PropTypes.number,
    stylesheet: PropTypes.object,
    children: PropTypes.element
}

export default LayoutManager;