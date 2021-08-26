import React from "react";
import svgManager from "../../svgs/svgManager";
import styles from './ProfileStatInfo.module.css';
import StatInfoSpec from "./StatInfoSpec";

function ProfileStatInfo() {

    return (
        <div className={styles.statInfoWrapperContainer}>
            <StatInfoSpec icon={svgManager.getSvg('statFriends')} hint={'друзья'} count={120}/>
            <StatInfoSpec icon={svgManager.getSvg('statSubs')} hint={'подписчики'} count={12}/>
            <StatInfoSpec icon={svgManager.getSvg('statLikes')} hint={'лайки под аватаркой'} count={128}/>
            <StatInfoSpec icon={svgManager.getSvg('statSessions')} hint={'сессии за сегодня'} count={4}/>
            <StatInfoSpec icon={svgManager.getSvg('statChanges')} hint={'зафиксированные изменения'} count={8}/>
        </div>
    );

}

export default ProfileStatInfo;