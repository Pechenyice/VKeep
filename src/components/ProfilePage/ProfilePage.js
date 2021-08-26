import React, { useState } from "react";
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import styles from './ProfilePage.module.css';
import profilePhoto from './../../img/badbad.jpg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import LayoutManager from "../LayoutManager/LayoutManager";
import ProfileActivity from "../ProfileActivity/ProfileActivity";

function ProfilePage() {

    let [activities, setActivities] = useState([
        {
            type: 'status',
            newValue: 'test',
            oldValue: 'Blin',
            timestamp: 1629983692000
        },
        {
            type: 'name',
            newValue: 'Билли Миллиган',
            oldValue: 'Милли Биллиган',
            timestamp: 1629983192000
        },
        {
            type: 'status',
            newValue: 'test',
            oldValue: 'Blin',
            timestamp: 1629283692000
        },
        {
            type: 'status',
            newValue: 'test',
            oldValue: 'Blin',
            timestamp: 1629983692000
        },
        {
            type: 'status',
            newValue: 'test',
            oldValue: 'Blin',
            timestamp: 1629983692000
        },
        {
            type: 'name',
            newValue: 'Билли Миллиган',
            oldValue: 'Милли Биллиган',
            timestamp: 1629983192000
        },
        {
            type: 'status',
            newValue: 'test',
            oldValue: 'Blin',
            timestamp: 1629283692000
        },
        {
            type: 'status',
            newValue: 'test',
            oldValue: 'Blin',
            timestamp: 1629983692000
        }
    ]);

    let [size, setSize] = useState(false);

    function handleActivityResize() {
        setSize(!size);

        
    }

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

                <LayoutManager stylesheet={size ? {boxShadow: '0px 30px 120px 10px rgba(207, 200, 225, 0.8)'} : {}} columns={2}>
                    <ProfileActivity onResize={handleActivityResize} content={activities} size={size}/>
                </LayoutManager>
            </div>

        </section>
    );

}

export default ProfilePage;