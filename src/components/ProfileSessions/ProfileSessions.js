import React, { useState } from "react";
import styles from './ProfileSessions.module.css';
import PropTypes, { func } from 'prop-types';
import ServiceName from "../ServiceName/ServiceName";
import DayPicker from "../DayPicker/DayPicker";

function ProfileSessions({sessions, onHover, onLeave}) {

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

    function renderDate(ts) {
        let date = new Date(ts);

        let datevalues = [
            date.getFullYear(),
            ('0' + (date.getMonth()+1)).slice(-2),
            ('0' + date.getDate()).slice(-2),
            ('0' + date.getHours()).slice(-2),
            ('0' + date.getMinutes()).slice(-2),
            ('0' + date.getSeconds()).slice(-2)
        ];

        return `${datevalues[3]}:${datevalues[4]}`;
    }

    function constructOnline() {

        let blocks = [];

        switch (period) {
            case 'today': {

                let filtered = sessions.filter(s => {

                    return new Date().setHours(0, 0, 0, 0) == new Date(s.start).setHours(0, 0, 0, 0);
                });
        
                let count = Math.ceil(filtered.length / 8);
        
                let block = [];
        
                for (let j = 0; j < count; j++) {
        
                    block = [];
        
                    for (let i = 8*j; i < 8 + 8*j; i++) {
        
                        if (i >= filtered.length) break;
                        
                        block.push(<div key={i} className={styles.onlineSessionWrapper} onMouseEnter={handleSessionEnter(filtered[i].platform)} onMouseLeave={onLeave}>
                            <p className={styles.onlineTiming}>{renderDate(filtered[i].start)} - {renderDate(filtered[i].end)}</p>
                            <div className={styles.decorator}></div>
                            <p className={styles.onlinePlatform}>{filtered[i].platform}</p>
                        </div>);
            
                    }
        
                    blocks.push(<div key={j} className={styles.onlineSessionBlock}>{block}</div>);
                }

                break;
            }

            case 'yesterday': {

                let filtered = sessions.filter(s => {
                    let date = new Date();
                    date.setDate(date.getDate() - 1);
                    date.setHours(0, 0, 0, 0);
                    date = date.getTime();
                    

                    let target = new Date(s.start).setHours(0, 0, 0, 0);

                    console.log(date);
                    console.log(target);

                    return date == target;
                });
        
                let count = Math.ceil(filtered.length / 8);
        
                let block = [];
        
                for (let j = 0; j < count; j++) {
        
                    block = [];
        
                    for (let i = 8*j; i < 8 + 8*j; i++) {
        
                        if (i >= filtered.length) break;
                        
                        block.push(<div key={i} className={styles.onlineSessionWrapper} onMouseEnter={handleSessionEnter(filtered[i].platform)} onMouseLeave={onLeave}>
                            <p className={styles.onlineTiming}>{renderDate(filtered[i].start)} - {renderDate(filtered[i].end)}</p>
                            <div className={styles.decorator}></div>
                            <p className={styles.onlinePlatform}>{filtered[i].platform}</p>
                        </div>);
            
                    }
        
                    blocks.push(<div key={j} className={styles.onlineSessionBlock}>{block}</div>);
                }

                break;
            }

            case 'theDayBeforeYesterday': {

                let filtered = sessions.filter(s => {
                    let date = new Date();
                    date.setDate(date.getDate() - 2);
                    date.setHours(0, 0, 0, 0);
                    date = date.getTime();

                    let target = new Date(s.start).setHours(0, 0, 0, 0);

                    return date == target;
                });
        
                let count = Math.ceil(filtered.length / 8);
        
                let block = [];
        
                for (let j = 0; j < count; j++) {
        
                    block = [];
        
                    for (let i = 8*j; i < 8 + 8*j; i++) {
        
                        if (i >= filtered.length) break;
                        
                        block.push(<div key={i} className={styles.onlineSessionWrapper} onMouseEnter={handleSessionEnter(filtered[i].platform)} onMouseLeave={onLeave}>
                            <p className={styles.onlineTiming}>{renderDate(filtered[i].start)} - {renderDate(filtered[i].end)}</p>
                            <div className={styles.decorator}></div>
                            <p className={styles.onlinePlatform}>{filtered[i].platform}</p>
                        </div>);
            
                    }
        
                    blocks.push(<div key={j} className={styles.onlineSessionBlock}>{block}</div>);
                }

                break;
            }
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
    sessions: PropTypes.array,
    onHover: PropTypes.func,
    onLeave: PropTypes.func
}

export default ProfileSessions;