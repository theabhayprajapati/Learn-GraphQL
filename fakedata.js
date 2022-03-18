// fake user json data export 
const userData = [
    {
        "id": "1",
        "name": "John",
        "email": "johndoe@email.com",
        "age": 30,
        "friend": [{
            "id": "2",
            "name": "Jane",
            "email": "janadoe@gmail.com",
            "age": 25,
        },
        {
            "id": "2",
            "name": "Jane",
            "email": "janadoe@gmail.com",
            "age": 25,
        },]
    },
    {
        "id": "2",
        "name": "Jane",
        "email": "janadoe@gmail.com",
        "age": 25,
        "friend": [
            {
                "id": "2",
                "name": "Jane",
                "email": "janadoe@gmail.com",
                "age": 25,
            },
        ]
    },
    {
        "id": "3",
        "name": "John",
        "email": "johndoe@email.com",
        "age": 30,
        "friend": [
            {
                "id": "2",
                "name": "Jane",
                "email": "janadoe@gmail.com",
                "age": 25,
            },
            {
                "id": "2",
                "name": "Jane",
                "email": "janadoe@gmail.com",
                "age": 25,
            },
        ]
    }, {
        "id": "4",
        "name": "John",
        "email": "johndoe@email.com",
        "age": 30,
        'friend':
            [
                {
                    "id": "2",
                    "name": "Jane",
                    "email": "janadoe@gmail.com",
                    "age": 25,
                },
            ]
    },
]

// export
module.exports = { userData }
