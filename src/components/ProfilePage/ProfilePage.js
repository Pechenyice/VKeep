import React from "react";
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import styles from './ProfilePage.module.css';
import profilePhoto from './../../img/badbad.jpg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function ProfilePage() {

    return (
        <section className={styles.profilePage}>

            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <VKeepLogo logoFontSize={36} displayHint={false}/>
                </div>
            </header>

            <div className={styles.profileServices}>
                <div className={styles.profileInfoWrapper}>
                    <ProfileInfo img={profilePhoto} name={'Biba Bobov'} aka={'id1237482347'} status={'Я бобал меня бибали'} />
                </div>
                
            </div>

           

        </section>
    );

}

export default ProfilePage;