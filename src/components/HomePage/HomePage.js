import React, { useEffect } from "react";
import styles from './HomePage.module.css';
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import HomePageForm from "./HomePageForm";
import PropTypes from "prop-types";

function HomePage({onUserSelected, location}) {

    useEffect(() => {
        if (location.state?.error && !location.state?.showed) {
            alert(location.state.error);
            location.state.showed = true;
        }
    }, []);

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
    onUserSelected: PropTypes.func,
    location: PropTypes.object
}

export default HomePage;