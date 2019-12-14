const {bot} = require('../bot')
const {data_joiners} = require('../../data')

const join = (msg) => {
    if (!data_joiners.includes(msg.from.id)) {
        data_joiners.push(msg.from.id);
    }
    console.log(data_joiners);
    return bot.sendMessage(msg.from.id, `${ msg.from.first_name }, теперь у тебя всё под контролем 😉`);
};

const joiners = (msg) => {
    return bot.sendMessage(msg.from.id, `${ data_joiners.join(',') }`);
};


module.exports.join = join
module.exports.joiners = joiners
