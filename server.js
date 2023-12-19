const express = require('express');
const app = express();

//routes

app.get('/', (req, res) => {
    res.send('Hello there')
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})