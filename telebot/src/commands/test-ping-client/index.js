const {bot} = require('../../bot')
const fs = require('fs');

const FILE_NAME = '/home/pi/test-ping';
const IP = "10.0.0.31"

const testPingClient = (msg) => {
    let rawdata
    try {
        rawdata = fs.readFileSync(FILE_NAME);
    } catch (e) {
        return msg.reply.text('👎 файл не найден');
    }
    let test_ping = JSON.parse(rawdata);
    console.log(test_ping);
    if(IP in test_ping) {
        if (test_ping[IP]=='alive')
            return bot.sendMessage(msg.from.id, `👍 на данные момент статус камеры в котельной ${test_ping["10.0.0.31"]} 👍`);
        else if (test_ping[IP]=='dead')
            return bot.sendMessage(msg.from.id, `👎 на данные момент статус камеры в котельной ${test_ping["10.0.0.31"]} 👎`);
        else
            return bot.sendMessage(msg.from.id, `🤔 неизвестная информация по камере в котельной ${test_ping["10.0.0.31"]} 🤔`);
    } else {
        return bot.sendMessage(msg.from.id, `🤔 информация по камере в котельной отсутствует 🤔`);
    }
};

module.exports.testPingClient = testPingClient
