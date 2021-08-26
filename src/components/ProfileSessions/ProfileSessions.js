import React, { useState } from "react";
import styles from './ProfileSessions.module.css';
import PropTypes, { func } from 'prop-types';
import ServiceName from "../ServiceName/ServiceName";
import DayPicker from "../DayPicker/DayPicker";

function ProfileSessions({onHover, onLeave}) {

    let [sessions, setSessions] = useState([
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'Android'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'IOS'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'Other'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        },
        {
            start: '00:10',
            end: '00-12',
            platform: 'PC'
        }
    ]);

    let [period, setPeriod] = useState('today');

    function checkActive(t) {
        return t === period;
    }

    function handlePeriodClick(p) {
        return () => {
            setPeriod(p);
        }
    }

    function handleSessionEnter(p) {
        return () => {
            onHover(p);
        }
    }

    function constructOnline() {

        let count = Math.ceil(sessions.length / 8);

        let block = [];
        let blocks = [];

        for (let j = 0; j < count; j++) {

            block = [];

            for (let i = 8*j; i < 8 + 8*j; i++) {

                if (i >= sessions.length) break;
                
                block.push(<div key={i} className={styles.onlineSessionWrapper} onMouseEnter={handleSessionEnter(sessions[i].platform)} onMouseLeave={onLeave}>
                    <p className={styles.onlineTiming}>{sessions[i].start} - {sessions[i].end}</p>
                    <div className={styles.decorator}></div>
                    <p className={styles.onlinePlatform}>{sessions[i].platform}</p>
                </div>);
    
            }

            blocks.push(<div key={j} className={styles.onlineSessionBlock}>{block}</div>);
        }

        

        return <div className={styles.blocksGrid}>{blocks}</div>;
    }

    return (
        <div className={styles.sessionsWrapper}>
            
            <div className={styles.sessionsLegend}>
                <ServiceName name={'Сессии'} displayCount={true} count={sessions.length} />

                <div className={styles.daysWrapper}>
                    <DayPicker onClick={handlePeriodClick('theDayBeforeYesterday')} text={'позавчера'} isActive={checkActive('theDayBeforeYesterday')} />
                    <DayPicker onClick={handlePeriodClick('yesterday')} text={'вчера'} isActive={checkActive('yesterday')} />
                    <DayPicker onClick={handlePeriodClick('today')} text={'сегодня'} isActive={checkActive('today')} />
                </div>
            </div>

            <div className={styles.onlineWrapper}>
                {
                    constructOnline()
                }
            </div>
            
        </div>
    );

}

ProfileSessions.propTypes = {
    onHover: PropTypes.func,
    onLeave: PropTypes.func
}

export default ProfileSessions;