let HOST = 'http://vkeep.don2quixote.ru';
let PORT = '3001';
let API_URL = '/api';

function constructUrl(endpoint, u) {
    let isId = !isNaN(u);

    return `${API_URL}${endpoint}?${isId ? 'id' : 'user'}=${u}`;
}

const aborts = {
    'sessionsFetchController': new AbortController(),
    'updatesFetchController': new AbortController(),
    'userInfoFetchController': new AbortController(),
    'aggregatedDataFetchController': new AbortController(),
    'userIdFetchController': new AbortController()
};

let DNS = {
    getUserIdByUsername: (u) => {
        let ttl = +(localStorage.getItem(`${u}_ttl`));
        if (ttl < new Date().getTime()) return null;
        return localStorage.getItem(u);
    },

    setUserIdByUsername: (u, i) => {
        localStorage.setItem(u, i);
        localStorage.setItem(`${u}_ttl`, new Date().getTime() + 1000 * 60 * 60 * 24);
    }
}

let API = {
    getUserId: async (u) => {
        let check = DNS.getUserIdByUsername(u);

        if (check) return check;

        let res = null;
        try {
            res = await fetch(`${HOST}${API_URL}/accounts/getIDByUsername?username=${u}`, {signal: aborts.userIdFetchController.signal});
        } catch (e) {
            if (e.name === 'AbortError') {
                console.warn('User id request aborted');
                return;
            }
        }

        res = await res.json();

        if (res.error) {
            console.warn(res.error);
            return null;
        }

        DNS.setUserIdByUsername(u, res.accountID);

        return res.accountID;
    },

    abortUserIdFetch: () => {
        aborts.userIdFetchController.abort();
        aborts.userIdFetchController = new AbortController();
    },

    getAggregatedData: async function(u, c) {
        let isId = !isNaN(u);

        if (!isId) {
            u = await this.getUserId(u);
            if (!u) {
                console.warn('User aggregated data request aborted');
                return c(null);
            }
        }

        let res = null;
        try {
            res = await fetch(`${HOST}${API_URL}/aggregator/aggregateAccount?accountID=${u}&sessionsOptions.from=0`, {signal: aborts.userInfoFetchController.signal});
        } catch (e) {
            if (e.name === 'AbortError') {
                console.warn('User aggregated data request aborted');
                return;
            }
        }

        res = await res.json();

        c(res);
    },

    abortAggregatedDataFetch: () => {
        aborts.aggregatedDataFetchController.abort();
        aborts.aggregatedDataFetchController = new AbortController();
    },

    getUser: async (u, c) => {
        let res = null;
        try {
            res = await fetch(constructUrl('/users', u), {signal: aborts.userInfoFetchController.signal});
        } catch (e) {
            if (e.name === 'AbortError') {
                console.warn('User request aborted');
                return;
            }
        }

        res = await res.json();

        c(res);
    },

    abortUserInfoFetch: () => {
        aborts.userInfoFetchController.abort();
        aborts.userInfoFetchController = new AbortController();
    },

    getSessions: async (u, c) => {
        let res = null;
        try {
            res = await fetch(constructUrl('/sessions', u), {signal: aborts.sessionsFetchController.signal});
        } catch (e) {
            if (e.name === 'AbortError') {
                console.warn('Sessions request aborted');
                return;
            }
        }

        res = await res.json();

        c(res);
    },

    abortSessionsFetch: () => {
        aborts.sessionsFetchController.abort();
        aborts.sessionsFetchController = new AbortController();
    },

    getUpdates: async (u, c) => {
        let res;
        try { 
            res = await fetch(constructUrl('/updates', u), {signal: aborts.updatesFetchController.signal});
        } catch (e) {
            if (e.name === 'AbortError') {
                console.warn('Updates request aborted');
                return;
            }
        }

        res = await res.json();

        c(res);
    },

    abortUpdatesFetch: () => {
        aborts.updatesFetchController.abort();
        aborts.updatesFetchController = new AbortController();
    }
}

export default API;