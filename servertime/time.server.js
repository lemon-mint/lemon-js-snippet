const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("" + new Date().getTime())
})

app.listen(port, () => { })
