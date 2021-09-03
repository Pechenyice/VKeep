import React, { useEffect, useState } from "react";
import VKeepLogo from "../VKeepLogo/VKeepLogo";
import styles from './ProfilePage.module.css';
import profilePhoto from './../../img/badbad.jpg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import LayoutManager from "../LayoutManager/LayoutManager";
import ProfileActivityResizer from "../ProfileActivity/ProfileActivityResizer";
import ProfileStatInfo from "../ProfileStatInfo/ProfileStatInfo";
import Skeleton from "../Skeleton/Skeleton";
import API from "../../api/API";
import PropTypes from "prop-types";
import ProfileStatistic from "../ProfileStatistic/ProfileStatistic";
import ProfileSessions from "../ProfileSessions/ProfileSessions";

function ProfilePage({user}) {
    let [userInfo, setUserInfo] = useState({});

    let [updates, setUpdates] = useState({});

    let [sessions, setSessions] = useState({'needFetch': true, entities: []});

    let [size, setSize] = useState(false);

    let [platformSelected, setPlatformSelected] = useState('');

    useEffect(async () => {
        // console.log(location.pathname)
        fetchProfileData();
    }, []);

    function fetchProfileData() {
        API.getUser(user, res => setUserInfo(res));
        API.getUpdates(user, res => setUpdates(res));
        API.getSessions(user, res => setSessions(Object.assign({}, {'needFetch': false, entities: res})));
    }

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
                        <div style={{display: 'flex', gap: '50px'}}>
                            <Skeleton type={'photo'} stylesheet={{height: '180px', width: '180px'}} />
                            <Skeleton type={'text'} stylesheet={{width: 'calc(100% - 180px - 50px - 400px)', height: '180px', display: 'flex', alignItems: 'center'}} />
                        </div>
                    }
                </div>

                <LayoutManager resizing={true} size={size} columns={2}>
                    <ProfileActivityResizer onResize={handleActivityResize} content={updates} size={size}/>
                </LayoutManager>

                <LayoutManager stylesheet={{maxHeight: '570px'}} columns={1}>
                    <ProfileStatInfo content={{userInfo, updates, sessions}}/>
                </LayoutManager>

                <LayoutManager stylesheet={{maxHeight: '605px'}} columns={1}>
                    <ProfileStatistic content={sessions} platformSelected={platformSelected}/>
                </LayoutManager>

                <LayoutManager columns={2}>
                    <ProfileSessions sessions={sessions} onHover={handleSessionHovered} onLeave={handleSessionLeaved} />
                </LayoutManager>
            </div>
        </section>
    );
}

ProfilePage.propTypes = {
    user: PropTypes.string
}

export default ProfilePage;