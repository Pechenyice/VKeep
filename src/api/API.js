
let HOST = 'http://localhost';
let PORT = '3001';
let API_URL = '/api';

function constructUrl(endpoint, u) {
    let isId = Number(u) != NaN;

    return `${API_URL}${endpoint}?${isId ? 'id' : 'user'}=${u}`;
}

let API = {
    getUser: async (u, c) => {
        let res = await fetch(constructUrl('/users', u));

        res = await res.json();

        console.log('getUser ended')

        c(res);
    },

    getSessions: async (u, c) => {
        let res = await fetch(constructUrl('/sessions', u));

        res = await res.json();

        console.log('getSessions ended')

        c(res);
    },

    getUpdates: async (u, c) => {
        let res = await fetch(constructUrl('/updates', u));

        res = await res.json();

        console.log('getUpdates ended')

        c(res);
    }
}

export default API;