import React from "react";
import styles from './HomePage.module.css';
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import HomePageForm from "./HomePageForm";
import PropTypes from "prop-types";

function HomePage({onUserSelected}) {

    return (
        <section className={styles.homePage}>

            <div>
                <div className={styles.homePageLogoWrapper} >
                    <VKeepLogo logoFontSize={70} displayHint={true} hintFontSize={16}/>
                </div>

                <HomePageForm onUserSelected={onUserSelected} />
            </div>

        </section>
    );

}

HomePage.propTypes = {
    onUserSelected: PropTypes.func
}

export default HomePage;