const {bot} = require('../../bot');
const {data_notes} = require("../../data");

// bot.on(/напомни (.+) в (.+)/, (msg, match) => {
const reminder = (msg, props) => {
    let userId = msg.from.id;
    let text = props.match[1];
    let time = props.match[2];
    data_notes.push({ 'uid': userId, 'time': time, 'text': text });
    console.log(data_notes)

    return msg.reply.text('Отлично! Я обязательно напомню, если не сдохну :)');
};

module.exports.reminder = reminder
