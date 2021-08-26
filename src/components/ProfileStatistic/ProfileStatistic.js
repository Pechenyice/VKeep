import React, { useState, useEffect } from "react";
import styles from './ProfileStatistic.module.css';
import ServiceName from "../ServiceName/ServiceName";
import DayPicker from "../DayPicker/DayPicker";
import { Chart, registerables } from 'chart.js';
import ChartTimePlank from "./ChartTimePlank";
import Colors from "../../variables/Colors";
import PropTypes from 'prop-types';

Chart.register(...registerables);

function ProfileStatistic({platformSelected}) {

    useEffect(() => {
        let ctx = document.getElementById('myChart');

        const data = {
        labels: [Colors.PC, Colors.Android, Colors.IOS, Colors.Other],
        datasets: [
            {
                label: 'Online time',
                data: [112, 55, 240, 30],
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

        let myChart = new Chart(ctx, config);
        
        
    }, []);

    let [period, setPeriod] = useState('day');

    function checkActive(t) {
        return t == period;
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

    return (
        <div className={styles.statisticWrapper}>
            <ServiceName name={'Статистика'} displayCount={false} />

            <div className={styles.daysWrapper}>
                <DayPicker onClick={handlePeriodClick('day')} text={'за сегодня'} isActive={checkActive('day')} />
                <DayPicker onClick={handlePeriodClick('week')} text={'за неделю'} isActive={checkActive('week')} />
                <DayPicker onClick={handlePeriodClick('month')} text={'за месяц'} isActive={checkActive('month')} />
            </div>

            <div className={styles.chartWrapper}>
                <p className={styles.chartTiming}>{humanedOnlineTime(112+55+240+30)}</p>
                <canvas className={styles.chart} id='myChart' />
            </div>

            <div className={styles.legend}>
                <ChartTimePlank isActive={platformSelected === 'PC'} platform={'PC'} time={humanedOnlineTime(112)}/>
                <ChartTimePlank isActive={platformSelected === 'Android'} platform={'Android'} time={humanedOnlineTime(55)}/>
                <ChartTimePlank isActive={platformSelected === 'IOS'} platform={'IOS'} time={humanedOnlineTime(240)}/>
                <ChartTimePlank isActive={platformSelected === 'Other'} platform={'Other'} time={humanedOnlineTime(30)}/>
            </div>
        </div>
    );

}

ProfileStatistic.propTypes = {
    platformSelected: PropTypes.string
}

export default ProfileStatistic;