import React from "react";
import styles from './HomePage.module.css';
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import HomePageForm from "./HomePageForm";

function HomePage() {

    return (
        
        <section className={styles.homePage}>

            <div>
                <div className={styles.homePageLogoWrapper} >
                    <VKeepLogo logoFontSize={70} displayHint={true} hintFontSize={16}/>
                </div>

                <HomePageForm />
            </div>

        </section>

    );

}

export default HomePage;