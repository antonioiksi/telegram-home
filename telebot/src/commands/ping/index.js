const {bot} = require('../bot')

const testcamip = (msg) => {

    let rawdata = fs.readFileSync(FILE_NAME);
    let test_ping = JSON.parse(rawdata);
    console.log(test_ping);
    if("10.0.0.31" in test_ping) {
        if (test_ping["10.0.0.31"]=='alive')
            return bot.sendMessage(msg.from.id, `👍 на данные момент статус камеры в котельной ${test_ping["10.0.0.31"]} 👍`);
        else if (test_ping["10.0.0.31"]=='dead')
            return bot.sendMessage(msg.from.id, `👎 на данные момент статус камеры в котельной ${test_ping["10.0.0.31"]} 👎`);
        else
            return bot.sendMessage(msg.from.id, `🤔 неизвестная информация по камере в котельной ${test_ping["10.0.0.31"]} 🤔`);
    } else {
        return bot.sendMessage(msg.from.id, `🤔 информация по камере в котельной отсутствует 🤔`);
    }
};

module.exports.testcamip = testcamip
