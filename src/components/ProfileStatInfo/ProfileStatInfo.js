import React from "react";
import svgManager from "../../svgs/svgManager";
import styles from './ProfileStatInfo.module.css';
import StatInfoSpec from "./StatInfoSpec";
import PropTypes from "prop-types";

function ProfileStatInfo({content}) {

    return (
        <div className={styles.statInfoWrapperContainer}>
            <StatInfoSpec icon={svgManager.getSvg('statFriends')} hint={'друзья'} count={content.userInfo.friends}/>
            <StatInfoSpec icon={svgManager.getSvg('statSubs')} hint={'подписчики'} count={content.userInfo.subs}/>
            <StatInfoSpec icon={svgManager.getSvg('statLikes')} hint={'лайки под аватаркой'} count={content.userInfo.likes}/>
            <StatInfoSpec icon={svgManager.getSvg('statSessions')} hint={'сессии за сегодня'} count={content.sessions.length}/>
            <StatInfoSpec icon={svgManager.getSvg('statChanges')} hint={'зафиксированные изменения'} count={Object.keys(content.updates).length ? content.updates.statuses.length + content.updates.avatars.length + content.updates.names.length : 0}/>
        </div>
    );

}

ProfileStatInfo.propTypes = {
    content: PropTypes.object
}

export default ProfileStatInfo;