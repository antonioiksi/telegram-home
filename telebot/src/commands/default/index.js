const {bot, BUTTONS} = require('../../bot')

const KEYBOARD = []

const start = (msg) => {
    let replyMarkup = bot.keyboard( KEYBOARD, {resize: true});
    // let replyMarkup = bot.keyboard([
    //     [BUTTONS.hello.label],
    //     // [BUTTONS.temp.label],
    //     // [BUTTONS.gettemp.label],
    //     // [BUTTONS.join.label],
    //     // [BUTTONS.joiners.label],
    //     // [BUTTONS.testcamip.label],
    //     // [BUTTONS.ip.label],
    //     // [BUTTONS.help.label],
    //     // [BUTTONS.hide.label]
    // ], {resize: true});
    return bot.sendMessage(msg.from.id, '🤖 попробуйте наше меню 🤖', {replyMarkup});
};

const hide = (msg) =>
    msg.reply.text('Отправьте /start чтобы вернуться в меню', {replyMarkup: 'hide'});

module.exports.start = start
module.exports.hide = hide
module.exports.KEYBOARD = KEYBOARD
