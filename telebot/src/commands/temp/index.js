const {bot} = require('../bot')

bot.on('/temp', (msg) => {
    // round temperature reading to 1 digit
    const tempC = sensor.readSimpleC(1);
    console.log(`${tempC} degC`);
    return bot.sendMessage(msg.from.id, `на данные момент составляет ${tempC} ℃`);
});


bot.on(/^\/settemp (.+)$/, (msg, props) => {
    var tempNew = props.match[1];
    if (tempNew >=0 && tempNew < 40) {
        tempPorog = tempNew;
        return bot.sendMessage(msg.from.id, `теперь Вы узнаете если температура опустится ниже ${tempPorog}℃`);
    }
    else {
        return bot.sendMessage(msg.from.id, `не корректное значение температуры (от 0℃ до 40℃`);
    }

});

bot.on('/gettemp', (msg) => {
    return bot.sendMessage(msg.from.id, `порог температуры установлен на ${tempPorog} ℃`);
});
