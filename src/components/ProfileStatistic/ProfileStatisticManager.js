import React from "react";
import styles from './ProfileStatistic.module.css';
import ProfileStatistic from "./ProfileStatistic";
import PropTypes from 'prop-types';
import Skeleton from "../Skeleton/Skeleton";
import ServiceName from "../ServiceName/ServiceName";
import DayPicker from "../DayPicker/DayPicker";
import ChartTimePlank from "./ChartTimePlank";

function ProfileStatisticManager({content, platformSelected}) {

    function checkActive() {}

    function handlePeriodClick() {}

    function humanedOnlineTime() {}

    function countOnlineTime() {}

    return (
        <div>
            {
                content.length ? 
                <ProfileStatistic content={content} platformSelected={platformSelected}/> :
                <div className={styles.statisticWrapper}>
                    <ServiceName name={'Статистика'} displayCount={false} />

                    <div className={styles.daysWrapper}>
                        <DayPicker onClick={handlePeriodClick('day')} text={'за сегодня'} isActive={true} />
                        <DayPicker onClick={handlePeriodClick('week')} text={'за неделю'} isActive={checkActive('week')} />
                        <DayPicker onClick={handlePeriodClick('month')} text={'за месяц'} isActive={checkActive('month')} />
                    </div>

                    <div className={styles.chartWrapper}>
                        <div className={styles.chartTiming} style={{width: '50px', position: 'relative', zIndex: 1}}>{<Skeleton stylesheet={{marginTop: '-10px'}} type={'smallText'} animatorBackground={'var(--white)'} />}</div>
                        <Skeleton stylesheet={{position: 'absolute', top: 0, left: 0}} type={'chart'} />
                    </div>

                    <div className={styles.legend}>
                        <ChartTimePlank isActive={platformSelected === 'PC'} platform={'PC'} fillSkeleton={true} skeleton={<Skeleton type={'smallText'} animatorBackground={'var(--white)'} stylesheet={{width: '100px', marginTop: '-5px'}} />} />
                        <ChartTimePlank isActive={platformSelected === 'Android'} platform={'Android'} fillSkeleton={true} skeleton={<Skeleton type={'smallText'} animatorBackground={'var(--white)'} stylesheet={{width: '100px', marginTop: '-5px'}} />} />
                        <ChartTimePlank isActive={platformSelected === 'IOS'} platform={'IOS'} fillSkeleton={true} skeleton={<Skeleton type={'smallText'} animatorBackground={'var(--white)'} stylesheet={{width: '100px', marginTop: '-5px'}} />} />
                        <ChartTimePlank isActive={platformSelected === 'Other'} platform={'Other'} fillSkeleton={true} skeleton={<Skeleton type={'smallText'} animatorBackground={'var(--white)'} stylesheet={{width: '100px', marginTop: '-5px'}} />} />
                    </div>
                </div>
            }
        </div>
    );
}

ProfileStatisticManager.propTypes = {
    content: PropTypes.array,
    platformSelected: PropTypes.string
}

export default ProfileStatisticManager;