const express = require('express')
const app = express()

const ping = require('ping');

const PORT = 3000
const host = '127.0.0.1'

app.get('/', function (req, res) {
    const host = req.query.host;

    ping.sys.probe(host, function(isAlive){
        // var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        var msg = isAlive ? '1' : '0';
        console.log(msg);
        res.send(msg)
    });  
})

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}🐞!`);
});