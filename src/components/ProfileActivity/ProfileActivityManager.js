import React from "react";
import PropTypes from "prop-types";
import ProfileActivityNote from "./ProfileActivityNote";

function ProfileActivityManager({content}) {

    function constructUpdates() {
        let names = content.names;
        names = names.map(n => Object.assign({}, n, {'type': 'name'}));

        let statuses = content.statuses;
        statuses = statuses.map(n => Object.assign({}, n, {'type': 'status'}));

        let avatars = content.avatars;
        avatars = avatars.map(n => Object.assign({}, n, {'type': 'avatar'}));

        let notes = [];

        let all = names.concat(statuses).concat(avatars);

        all.sort((a, b) => b - a);

        for (let n in all) {

            if (all[n].isInitial) continue;

            notes.push(
                <ProfileActivityNote key={n} content={all[n]} />
            );
        }

        return notes;
    }

    return (
        <div>
            {
                constructUpdates()
            }
        </div>
    );

}

ProfileActivityManager.propTypes = {
    content: PropTypes.object
}

export default ProfileActivityManager;