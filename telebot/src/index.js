const {bot, BUTTONS} = require('./bot')

const {hello} = require('./commands/hello')
const {start, hide} = require('./commands/default')

bot.on('/start', start)
bot.on('/hide', hide)
bot.on('/hello', hello)

BUTTONS['hello'] = {
    label: '🌡 Температура в котельной',
    command: '/hello'
}

bot.start();
