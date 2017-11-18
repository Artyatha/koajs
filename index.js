const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/user', (req, res) => {
    res.status(200),json({
        name: "Chonratee",
        Nickname: "Sean"
    });
});

app.listen(3001, () => {
    console.log("Listen on port 3001")
});

