import React from "react";
import styles from './ProfileSessions.module.css';
import ProfileSessions from "./ProfileSessions";
import PropTypes from "prop-types";
import ServiceName from "../ServiceName/ServiceName";
import DayPicker from "../DayPicker/DayPicker";
import Skeleton from "../Skeleton/Skeleton";

function ProfileSessionsManager({sessions, onHover, onLeave}) {

    function handlePeriodClick() {}

    return (

        <div>
                    
            {
                sessions.length ?
                <ProfileSessions sessions={sessions} onHover={onHover} onLeave={onLeave} /> :
                <div>
                    <div className={styles.sessionsLegend}>
                        <ServiceName name={'Сессии'} displayCount={true} count={'-'} />

                        <div className={styles.daysWrapper}>
                            <DayPicker onClick={handlePeriodClick('theDayBeforeYesterday')} text={'позавчера'} isActive={false} />
                            <DayPicker onClick={handlePeriodClick('yesterday')} text={'вчера'} isActive={false} />
                            <DayPicker onClick={handlePeriodClick('today')} text={'сегодня'} isActive={true} />
                        </div>
                    </div>

                    <div className={styles.onlineWrapper}>
                        {
                            <div className={styles.blocksGrid}>
                                <div className={styles.onlineSessionBlock}>
                                    <Skeleton stylesheet={{width: '270px', height: '80px'}} type={'text'} animatorBackground={'var(--white)'} />
                                    <Skeleton stylesheet={{width: '270px', height: '80px'}} type={'text'} animatorBackground={'var(--white)'} />
                                    <Skeleton stylesheet={{width: '270px', height: '80px'}} type={'text'} animatorBackground={'var(--white)'} />
                                </div>

                                <div className={styles.onlineSessionBlock}>
                                    <Skeleton stylesheet={{width: '270px', height: '80px'}} type={'text'} animatorBackground={'var(--white)'} />
                                    <Skeleton stylesheet={{width: '270px', height: '80px'}} type={'text'} animatorBackground={'var(--white)'} />
                                </div>

                                <div className={styles.onlineSessionBlock}>
                                    <Skeleton stylesheet={{width: '270px', height: '80px'}} type={'text'} animatorBackground={'var(--white)'} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }

        </div>

    );

}

ProfileSessionsManager.propTypes = {
    sessions: PropTypes.array,
    onHover: PropTypes.func,
    onLeave: PropTypes.func
};

export default ProfileSessionsManager;