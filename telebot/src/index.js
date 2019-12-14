const {reminder} = require("./commands/reminder");

const {testPingClient} = require("./commands/test-ping-client");

const {bot, BUTTONS} = require('./bot')

const {start, hide, KEYBOARD} = require('./commands/default')
const {hello} = require('./commands/hello')
const {join, joiners} = require('./commands/join')

bot.on('/start', start)
bot.on('/hide', hide)
bot.on('/hello', hello)
BUTTONS['hello'] = {
    label: '🌡 Температура в котельной',
    command: '/hello'
}
KEYBOARD.push([BUTTONS.hello.label])

bot.on('/join', join)
BUTTONS["join"] = {
    label: '⚠️ Уведомлять о нарушениях',
    command: '/join'
}
KEYBOARD.push([BUTTONS.join.label])

bot.on('/joiners', joiners)
BUTTONS["joiners"] = {
    label: '👪 Список подписчиков',
    command: '/joiners'
}
KEYBOARD.push([BUTTONS.joiners.label])

bot.on(/напомни (.+) в (.+)/, reminder)

bot.on( '/testping', testPingClient)
BUTTONS["testping"] = {
    label: '⚠️ Проверить состояние камеры в котельной',
    command: '/testping'
}
KEYBOARD.push([BUTTONS.testping.label])

bot.start();
