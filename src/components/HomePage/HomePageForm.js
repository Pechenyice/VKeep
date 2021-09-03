import React, { useState } from "react";
import styles from './HomePage.module.css';
import svgManager from "../../svgs/svgManager";
import { Redirect, Link } from "react-router-dom";

function HomePageForm({ onUserSelected }) {

    let [vkUser, setVkUser] = useState('');
    let [error, setError] = useState({
        isActive: false,
        content: ''
    });

    function validateInput(input) {
        if (!input) {
            setError({ 'isActive': true, 'content': `Don't left this field empty please...` });
            return false;
        }

        if (input.length < 3) {
            setError({ 'isActive': true, 'content': `Value is too short` });
            return false;
        }

        setError({ 'isActive': false, 'content': `` });
        return true;
    }

    function handleInputIsNotInteresting() {
        setError({ 'isActive': false, 'content': '' });
    }

    function handleVkUserInput(e) {
        validateInput(e.target.value);

        setVkUser(e.target.value);
    }

    function handleVkUserSubmit() {
        if (validateInput(vkUser)) {
            onUserSelected(vkUser);
            setVkUser('');
        }
    }

    let classes = [styles.input];

    if (error.isActive) classes.push(styles.inputError);

    return (
        <div className={styles.formWrapper}>
            <label htmlFor='vkUser' className={styles.inputLabel}>Добавить пользователя</label>
            <div className={styles.formContainer}>
                <div className={styles.inputWrapper}>
                    <input className={classes.join(' ')} type='text' name='vkUser' placeholder='ID или domain' value={vkUser} onBlur={handleInputIsNotInteresting} onInput={handleVkUserInput} />
                    <div className={styles.svgWrapper}>{svgManager.getSvg('userProfile')}</div>
                    <p className={styles.errorText}>{error.isActive ? error.content : ''}</p>
                </div>
                {
                    error.isActive ?
                    <button className={styles.inputSubmit} onClick={handleVkUserSubmit}>
                        {svgManager.getSvg('buttonSubmit')}
                    </button> :
                    <Link to={'/users'}>
                        <button className={styles.inputSubmit} onClick={handleVkUserSubmit}>
                            {svgManager.getSvg('buttonSubmit')}
                        </button>
                    </Link>
                }
            </div>
        </div>
    );

}

export default HomePageForm;