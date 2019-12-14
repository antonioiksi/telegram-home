const fs = require('fs')
// const ping = require('ping');
var ping = require ("net-ping");

const file = '/home/pi/test-ping'

const host = '10.0.0.31'

// setInterval(function(){
//     const test_ping = {};
//     ping.sys.probe(host, function(isAlive){
//         console.log(isAlive)
//         test_ping[host] = isAlive ? 'alive' : 'dead';
//         let content = JSON.stringify(test_ping, null, 2)
//         console.log(content)
//         fs.writeFile(file, content, err => {
//             if (err) {
//                 console.error(err)
//             }
//         })
//     });
// }, 300000);



setInterval(function(){
    const test_ping = {};
    // Default options
    var options = {
        // networkProtocol: ping.NetworkProtocol.IPv4,
        // packetSize: 16,
        retries: 2,
        // sessionId: (process.pid % 65535),
        timeout: 5000,
        // ttl: 128
    };
    var session = ping.createSession(options);
    session.pingHost (host, function (error, target) {
        if (error) {
            console.log (target + ": " + error.toString ())
            test_ping[host] = 'dead'
        } else {
            console.log (target + ": Alive")
            test_ping[host] = 'alive';
        }
        let content = JSON.stringify(test_ping, null, 2)
        console.log(content)
        fs.writeFile(file, content, err => {
            if (err) {
                console.error(err)
            } else {
                console.log(`file ${file} updated`)
            }
        })   
    });

}, 60000);