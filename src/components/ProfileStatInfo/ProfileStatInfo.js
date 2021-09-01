import React from "react";
import svgManager from "../../svgs/svgManager";
import styles from './ProfileStatInfo.module.css';
import StatInfoSpec from "./StatInfoSpec";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton/Skeleton";

function ProfileStatInfo({content}) {

    return (
        content.sessions.length && Object.keys(content.userInfo).length && Object.keys(content.updates).length ? 
        <div className={styles.statInfoWrapperContainer}>
            <StatInfoSpec icon={svgManager.getSvg('statFriends')} fillSkeleton={false} hint={'друзья'} count={content.userInfo.friends}/>
            <StatInfoSpec icon={svgManager.getSvg('statSubs')} fillSkeleton={false} hint={'подписчики'} count={content.userInfo.subs}/>
            <StatInfoSpec icon={svgManager.getSvg('statLikes')} fillSkeleton={false} hint={'лайки под аватаркой'} count={content.userInfo.likes}/>
            <StatInfoSpec icon={svgManager.getSvg('statSessions')} fillSkeleton={false} hint={'сессии за сегодня'} count={content.sessions.length}/>
            <StatInfoSpec icon={svgManager.getSvg('statChanges')} fillSkeleton={false} hint={'зафиксированные изменения'} count={Object.keys(content.updates).length ? content.updates.statuses.length + content.updates.avatars.length + content.updates.names.length : 0}/>
        </div> : 
        <div className={styles.statInfoWrapperContainer}>
            <StatInfoSpec icon={svgManager.getSvg('statFriends')} fillSkeleton={true} skeleton={<Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '50%', marginTop: '10px'}} />} hint={'друзья'} count={content.userInfo.friends}/>
            <StatInfoSpec icon={svgManager.getSvg('statSubs')} fillSkeleton={true} skeleton={<Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '50%', marginTop: '10px'}} />} hint={'подписчики'} count={content.userInfo.subs}/>
            <StatInfoSpec icon={svgManager.getSvg('statLikes')} fillSkeleton={true} skeleton={<Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '50%', marginTop: '10px'}} />} hint={'лайки под аватаркой'} count={content.userInfo.likes}/>
            <StatInfoSpec icon={svgManager.getSvg('statSessions')} fillSkeleton={true} skeleton={<Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '50%', marginTop: '10px'}} />} hint={'сессии за сегодня'} count={content.sessions.length}/>
            <StatInfoSpec icon={svgManager.getSvg('statChanges')} fillSkeleton={true} skeleton={<Skeleton type={'text'} animatorBackground={'var(--white)'} stylesheet={{width: '50%', marginTop: '10px'}} />} hint={'зафиксированные изменения'} count={Object.keys(content.updates).length ? content.updates.statuses.length + content.updates.avatars.length + content.updates.names.length : 0}/>
        </div>
    );

}

ProfileStatInfo.propTypes = {
    content: PropTypes.object
}

export default ProfileStatInfo;