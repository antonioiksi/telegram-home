const {bot} = require('../bot')

// bot.on(/напомни (.+) в (.+)/, (msg, match) => {
const reminder = (msg, props) => {
    var userId = msg.from.id;
    var text = props.match[1];
    var time = props.match[2];
    notes.push({ 'uid': userId, 'time': time, 'text': text });
    console.log(notes)

    return msg.reply.text('Отлично! Я обязательно напомню, если не сдохну :)');
};

module.exports.reminder = reminder
