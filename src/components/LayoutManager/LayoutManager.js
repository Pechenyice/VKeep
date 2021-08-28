import React from "react";
import styles from './LayoutManager.module.css';
import PropTypes from 'prop-types';

function LayoutManager({columns, stylesheet = {}, size=false, resizing=false, children}) {

    let classes = [styles.flexColumns, styles[`flexColumns-${columns}`]];

    function selectWrapper() {

        if (size) {
            return (

                <div className={classes.join(' ')} style={{padding: '0px'}} >
                    <section className={classes.join(' ')} style={stylesheet}>
                        {children}
                    </section>
                </div>

            );
        } else {
            return (
                // <div style={resizing ? {padding: '0px', position: 'absolute'} : {}}>
                    <section className={classes.join(' ')} style={stylesheet}>
                        {children}
                    </section>
                // </div>

            );
        }

    }

    return selectWrapper();

}

LayoutManager.propTypes = {
    columns: PropTypes.number,
    stylesheet: PropTypes.object,
    size: PropTypes.bool,
    resizing: PropTypes.bool,
    children: PropTypes.element
}

export default LayoutManager;