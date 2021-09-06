import React, { useState, useEffect } from "react";
import styles from './ProfileStatistic.module.css';
import ServiceName from "../ServiceName/ServiceName";
import DayPicker from "../DayPicker/DayPicker";
import Chart from 'chart.js/auto';
import ChartTimePlank from "./ChartTimePlank";
import Colors from "../../variables/Colors";
import PropTypes from 'prop-types';
import Skeleton from "../Skeleton/Skeleton";

function ProfileStatistic({content, platformSelected}) {

    let [period, setPeriod] = useState('day');

    useEffect(() => {
        let pcT = countOnlineTime('PC');
        let androidT = countOnlineTime('Android');
        let iosT = countOnlineTime('IOS');
        let otherT = countOnlineTime('Other');

        let ctx = document.getElementById('myChart');

        const data = {
        labels: ['PC', 'Android', 'IOS', 'Other'],
        datasets: [
            {
                label: 'Online time',
                data: [pcT, androidT, iosT, otherT],
                borderColor: [Colors.PC, Colors.Android, Colors.IOS, Colors.Other],
                backgroundColor: [Colors.PC, Colors.Android, Colors.IOS, Colors.Other],
            }
        ]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                cutout: 65,
                tooltips: {
                    enabled: false
                },
                hover: {
                    mode: null
                },
                events: [],
              plugins: {
                legend: {
                  display: false
                },
                title: {
                  display: false,
                },
                showTooltips: false,
                events: [],
                tooltips: {
                    enabled: false
                },
                
              },
            },
        };

        let myChart = !content.needFetch ? new Chart(ctx, config): null;
        
        return () => {
            myChart?.destroy()
        }
        
    }, [period, content]);

    

    function checkActive(t) {
        return t === period;
    }

    function handlePeriodClick(p) {
        return () => {
            setPeriod(p);
        }
    }

    function humanedOnlineTime(time) {
        let minutes = ('0' + (time % 60)).slice(-2);
        let hours = ((time - minutes) / 60);

        return `${hours} ч ${minutes} м`;
    }

    function isDateInThisWeek(date) {
        // const todayObj = new Date();
        // const todayDate = todayObj.getDate();
        // const todayDay = todayObj.getDay();
      
        // // get first date of week
        // const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
      
        // // get last date of week
        // const lastDayOfWeek = new Date(firstDayOfWeek);
        // lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
      
        // // if date is equal or within the first and last dates of the week
        // return date >= firstDayOfWeek && date <= lastDayOfWeek;

        let wDate = new Date();
        wDate.setDate(wDate.getDate() - 7);
        return date.getTime() > wDate.getTime();
      }

    function countOnlineTime(platform = null) {
        switch (period) {
            case 'day': {
                let filtered = content.entities.filter(s => {
                    return !platform ? new Date().setHours(0, 0, 0, 0) === new Date(s.start).setHours(0, 0, 0, 0) : platform === s.platform && new Date().setHours(0, 0, 0, 0) === new Date(s.start).setHours(0, 0, 0, 0);
                });
                let sum = 0;
                filtered.forEach(f => {
                    sum += f.end - f.start;
                });
                return sum / 1000;
            }

            case 'week': {
                let filtered = content.entities.filter(s => {
                    return !platform ? isDateInThisWeek(new Date(s.start)) : platform === s.platform && isDateInThisWeek(new Date(s.start));
                });
                let sum = 0;
                filtered.forEach(f => {
                    sum += f.end - f.start;
                });
                return sum / 1000;
            }

            case 'month': {
                let filtered = content.entities.filter(s => {
                    return !platform ? (new Date(s.start)).getMonth === (new Date()).getMonth : platform === s.platform && (new Date(s.start)).getMonth === (new Date()).getMonth;
                });
                let sum = 0;
                filtered.forEach(f => {
                    sum += f.end - f.start;
                });
                return sum / 1000;
            }
        }
    }

    return (
        <div className={styles.statisticWrapper}>
            <ServiceName name={'Статистика'} displayCount={false} />

            <div className={styles.daysWrapper}>
                <DayPicker onClick={handlePeriodClick('day')} text={'за сегодня'} isActive={checkActive('day')} />
                <DayPicker onClick={handlePeriodClick('week')} text={'за неделю'} isActive={checkActive('week')} />
                <DayPicker onClick={handlePeriodClick('month')} text={'за месяц'} isActive={checkActive('month')} />
            </div>

            <div className={styles.chartWrapper}>
                <p className={styles.chartTiming}>{humanedOnlineTime(countOnlineTime())}</p>
                {
                    !content.needFetch ? 
                    <canvas className={styles.chart} id='myChart' /> :
                    <Skeleton stylesheet={{position: 'absolute', top: 0, left: 0}} type={'chart'} />
                }
            </div>

            <div className={styles.legend}>
                <ChartTimePlank isActive={platformSelected === 'PC'} platform={'PC'} time={humanedOnlineTime(countOnlineTime('PC'))}/>
                <ChartTimePlank isActive={platformSelected === 'Android'} platform={'Android'} time={humanedOnlineTime(countOnlineTime('Android'))}/>
                <ChartTimePlank isActive={platformSelected === 'IOS'} platform={'IOS'} time={humanedOnlineTime(countOnlineTime('IOS'))}/>
                <ChartTimePlank isActive={platformSelected === 'Other'} platform={'Other'} time={humanedOnlineTime(countOnlineTime('Other'))}/>
            </div>
        </div>
    );

}

ProfileStatistic.propTypes = {
    content: PropTypes.object,
    platformSelected: PropTypes.string
}

export default ProfileStatistic;