const {bot} = require('../bot')

const hello = (msg) => {
    console.log(msg.from.first_name)
    var str = JSON.stringify(this, null, 2);
    // console.log(bot.getMe);
    return  bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
    // this.getMe()
    // return this.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
    // bot.on('/hello', (msg) => {
    //     return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
    // });
};

module.exports.hello = hello;
