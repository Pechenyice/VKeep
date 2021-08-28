
let HOST = 'http://localhost';
let PORT = '3001';
let API_URL = '/api';

function constructUrl(endpoint, u) {
    let isId = Number(u) != NaN;

    return `${API_URL}${endpoint}?${isId ? 'id' : 'user'}=${u}`;
}

let API = {
    getUser: async (u) => {

        let res = await fetch(constructUrl('/users', u));

        res = await res.json();

        console.log('getUser ended')

        return res;

    },

    getSessions: async (u) => {

        let res = await fetch(constructUrl('/sessions', u));

        res = await res.json();

        console.log('getSessions ended')

        return res;

    },

    getUpdates: async (u) => {

        let res = await fetch(constructUrl('/updates', u));

        res = await res.json();

        console.log('getUpdates ended')

        return res;

    }
}

export default API;