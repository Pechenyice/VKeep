import React from "react";
import styles from './HomePage.module.css';
import svgManager from "../../svgs/svgManager";

function HomePageForm() {
    
    return (
        <div className={styles.formWrapper}>
            <label for='vkUser' className={styles.inputLabel}>Добавить пользователя</label>
            <div className={styles.formContainer}>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type='text' name='vkUser' placeholder='ID или domain' />
                    <div className={styles.svgWapper}>{svgManager.getSvg('userProfile')}</div>
                </div>
                <button className={styles.inputSubmit} >
                    {svgManager.getSvg('buttonSubmit')}
                </button>
            </div>
        </div>
    );

}

export default HomePageForm;