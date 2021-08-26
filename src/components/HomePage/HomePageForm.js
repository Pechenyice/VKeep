import React, { useState } from "react";
import styles from './HomePage.module.css';
import svgManager from "../../svgs/svgManager";

function HomePageForm() {

    let [vkUser, setVkUser] = useState('');

    function validateInput(input) {
        console.log('I don\'t care your input, send me a porn video if u want')
    }

    function handleVkUserInput(e) {

        validateInput(e.target.value);

        setVkUser(e.target.value);
    }

    function handleVkUserSubmit() {
        setVkUser('');
    }
    
    return (
        <div className={styles.formWrapper}>
            <label htmlFor='vkUser' className={styles.inputLabel}>Добавить пользователя</label>
            <div className={styles.formContainer}>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type='text' name='vkUser' placeholder='ID или domain' value={vkUser} onInput={handleVkUserInput}/>
                    <div className={styles.svgWapper}>{svgManager.getSvg('userProfile')}</div>
                </div>
                <button className={styles.inputSubmit} onClick={handleVkUserSubmit}>
                    {svgManager.getSvg('buttonSubmit')}
                </button>
            </div>
        </div>
    );

}

export default HomePageForm;