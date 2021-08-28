const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 9999;

app.use(express.json());

let users = {
    "1": {
        "common": {
            "fio": "Bobinjo Biblovich Bobov",
            "friends": 214,
            "subs": 112,
            "likes": 13,
            "online": ''
        },
        "sessions": [
            {
                'start': 1630000209000,
                'end': 1630000212000,
                'platform': 'PC'
            },
            {
                'start': 1630000214000,
                'end': 1630000215000,
                'platform': 'Android'
            },
            {
                'start': 1630100321000,
                'end': 1630100326000,
                'platform': 'Other'
            }
        ],
        "updates": {
            "names": [
                {
                    'oldValue': 'Bob',
                    'newValue': 'John',
                    'detected': 1630100321000,
                    'isInitial': false
                },
                {
                    'oldValue': '',
                    'newValue': 'Bob',
                    'detected': 1630100320000,
                    'isInitial': true
                }
            ],
            "avatars": [
                // {
                //     'oldValue': 'Bob',
                //     'newValue': 'John',
                //     'detected': 1630100321000
                // }
            ],
            "statuses": [
                {
                    'oldValue': '',
                    'newValue': 'Bob here',
                    'detected': 1630100320000,
                    'isInitial': true
                }
            ],
        }
    },

    "bobby": {
        "common": {
            "fio": "Vovov John Stones",
            "friends": 112,
            "subs": 57,
            "likes": 173,
            "online": "IOS"
        },
        "sessions": [
            {
                'start': 1630000209000,
                'end': 1630000212000,
                'platform': 'Other'
            },
            {
                'start': 1630000214000,
                'end': 1630000215000,
                'platform': 'Other'
            },
            {
                'start': 1630100321000,
                'end': 1630100326000,
                'platform': 'IOS'
            }
        ],
        "updates": {
            "names": [
                {
                    'oldValue': 'Bob',
                    'newValue': 'John',
                    'detected': 1630100321000,
                    'isInitial': false
                },
                {
                    'oldValue': '',
                    'newValue': 'Bob',
                    'detected': 1630100320000,
                    'isInitial': true
                }
            ],
            "avatars": [
                // {
                //     'oldValue': 'Bob',
                //     'newValue': 'John',
                //     'detected': 1630100321000
                // }
            ],
            "statuses": [
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': '',
                    'newValue': 'Bob here',
                    'detected': 1630100320000,
                    'isInitial': true
                }
            ],
        }
    }
}

app.get('/', (req, res) => {
  res.send('Пшел вон!')
})

app.get('/api/users', (req, res) => {
    if (req.query.user) res.send(JSON.stringify(users[req.query.user].common));
    if (req.query.id) res.send(JSON.stringify(users[req.query.id].common));
})

app.get('/api/sessions', (req, res) => {
    if (req.query.user) res.send(JSON.stringify(users[req.query.user].sessions));
    if (req.query.id) res.send(JSON.stringify(users[req.query.id].sessions));
})

app.get('/api/updates', (req, res) => {
    if (req.query.user) res.send(JSON.stringify(users[req.query.user].updates));
    if (req.query.id) res.send(JSON.stringify(users[req.query.id].updates));
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})