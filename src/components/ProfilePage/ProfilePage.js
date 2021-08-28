import React, { useEffect, useState } from "react";
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import styles from './ProfilePage.module.css';
import profilePhoto from './../../img/badbad.jpg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import LayoutManager from "../LayoutManager/LayoutManager";
import ProfileActivity from "../ProfileActivity/ProfileActivity";
import ProfileStatInfo from "../ProfileStatInfo/ProfileStatInfo";
import ProfileStatistic from "../ProfileStatistic/ProfileStatistic";
import ProfileSessions from "../ProfileSessions/ProfileSessions";
import API from "../../api/API";
import PropTypes from "prop-types";

function ProfilePage({user}) {

    let [userInfo, setUserInfo] = useState({});

    let [updates, setUpdates] = useState({});

    let [sessions, setSessions] = useState([]);

    useEffect(async () => {
        setUserInfo(await API.getUser(user));
        setUpdates(await API.getUpdates(user));
        setSessions(await API.getSessions(user));
    }, []);

    let [size, setSize] = useState(false);

    let [platformSelected, setPlatformSelected] = useState('');

    function handleActivityResize() {
        setSize(!size);
    }

    function handleSessionHovered(platform) {
        setPlatformSelected(platform);
    }

    function handleSessionLeaved() {
        setPlatformSelected('');
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
                    {
                        Object.keys(userInfo).length && Object.keys(updates).length ? 
                        <ProfileInfo img={profilePhoto} name={userInfo.fio} aka={user} status={updates.statuses[0].newValue} platform={userInfo.online}/> :
                        null
                    }
                    
                </div>

                <LayoutManager stylesheet={size ? {boxShadow: '0px 30px 120px 10px rgba(207, 200, 225, 0.8)'} : {}} columns={2}>
                    <ProfileActivity onResize={handleActivityResize} content={updates} size={size}/>
                </LayoutManager>

                <LayoutManager stylesheet={{maxHeight: '570px'}} columns={1}>
                    {
                        sessions.length && Object.keys(userInfo).length && Object.keys(updates).length ? <ProfileStatInfo content={{userInfo, updates, sessions}}/> : null
                    }
                </LayoutManager>

                <LayoutManager stylesheet={{maxHeight: '605px'}} columns={1}>
                    {
                        sessions.length ? <ProfileStatistic content={sessions} platformSelected={platformSelected}/> : null
                    }
                </LayoutManager>

                <LayoutManager columns={2}>
                    {
                        sessions.length ? <ProfileSessions sessions={sessions} onHover={handleSessionHovered} onLeave={handleSessionLeaved} /> : null
                    }
                </LayoutManager>

            </div>

        </section>
    );

}

ProfilePage.propTypes = {
    user: PropTypes.string
}

export default ProfilePage;