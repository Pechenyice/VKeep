let HOST = 'http://localhost';
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
};

let API = {
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