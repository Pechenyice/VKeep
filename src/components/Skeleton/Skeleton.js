import React from 'react';
import styles from './Skeleton.module.css';
import PropTypes from 'prop-types';

function Skeleton({type, stylesheet = {}, animatorBackground='var(--background-color)'}) {

    function constructSkelet() {
    
        switch (type) {

            case 'text': {
                return (
                    <div className={styles.skeletonWrapper} style={stylesheet}>
                        <div className={styles.skeletonContent}>
                            <div className={styles.textMain}></div>
                            <div className={styles.textHelper}></div>
                            <div style={{background: animatorBackground}} className={[styles.skeletonAnimator, styles.skeletonAnimatorText].join(' ')}></div>
                        </div>
                    </div>
                );
            }

            case 'smallText': {
                return (
                    <div className={styles.skeletonWrapper} style={stylesheet}>
                        <div className={styles.skeletonContent}>
                            <div className={styles.textHelper}></div>
                            <div style={{background: animatorBackground}} className={[styles.skeletonAnimator, styles.skeletonAnimatorText].join(' ')}></div>
                        </div>
                    </div>
                );
            }

            case 'photo': {
                return (
                    <div className={styles.skeletonWrapper} style={stylesheet}>
                        <div className={styles.skeletonContent} style={{height: '100%'}}>
                            <div className={styles.photo}>
                                <div style={{background: animatorBackground}} className={[styles.skeletonAnimator, styles.skeletonAnimatorPhoto].join(' ')}></div>
                            </div>
                        </div>
                    </div>
                );
            }

            case 'chart': {
                return (
                    <div className={styles.skeletonWrapper} style={stylesheet}>
                        <div className={styles.skeletonContent} style={{height: '100%'}}>
                            <div className={styles.chart}>
                                <div className={styles.chartCutout}></div>
                            </div>
                        </div>
                    </div>
                );
            }

        }

    }

    return (
        constructSkelet()
    );

}

Skeleton.propTypes = {
    type: PropTypes.string,
    stylesheet: PropTypes.object,
    animatorBackground: PropTypes.string
}

export default Skeleton;