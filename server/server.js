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
                'start': 1630090214000,
                'end': 1630090216000,
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
                'start': 1630011914000,
                'end': 1630011918000,
                'platform': 'Other'
            },
            {
                'start': 1630100321000,
                'end': 1630100326000,
                'platform': 'IOS'
            },
            {
                'start': 1630193918000,
                'end': 1630193919000,
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
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
                {
                    'oldValue': 'Bob here',
                    'newValue': 'Bob here x2',
                    'detected': 1630100325000,
                    'isInitial': false
                },
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
    // setTimeout(() => {
        if (req.query.user) res.send(JSON.stringify(users[req.query.user].common));
        if (req.query.id) res.send(JSON.stringify(users[req.query.id].common));
    // }, 3000);
    
})

app.get('/api/sessions', (req, res) => {
    // setTimeout(() => {
        if (req.query.user) res.send(JSON.stringify(users[req.query.user].sessions));
        if (req.query.id) res.send(JSON.stringify(users[req.query.id].sessions));
    // }, 3000);
})

app.get('/api/updates', (req, res) => {
    // setTimeout(() => {
        if (req.query.user) res.send(JSON.stringify(users[req.query.user].updates));
        if (req.query.id) res.send(JSON.stringify(users[req.query.id].updates));
    // }, 3000);
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})