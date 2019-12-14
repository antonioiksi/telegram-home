const TeleBot = require('telebot')

const BUTTONS = {}
// const BUTTONS = {
//     temp: {
//         label: '🌡 Температура в котельной',
//         command: '/temp'
//     },
//     gettemp: {
//         label: '❓ Узнать температуру оповещения',
//         command: '/gettemp'
//     },
//     join: {
//         label: '⚠️ Уведомлять о нарушениях',
//         command: '/join'
//     },
//     testcamip: {
//         label: '⚠️ Проверить состояние камеры в котельной',
//         command: '/testcamip'
//     },
//     joiners: {
//         label: '👪 Список подписчиков',
//         command: '/joiners'
//     },
//     ip: {
//         label: '🕸 Получить сетевые интерфейсы',
//         command: '/ip'
//     },
//     help: {
//         label: '🍷 Винная карта',
//         command: '/help'
//     },
//     hide: {
//         label: '⌨️ Скрыть меню',
//         command: '/hide'
//     }
// };

const bot = new TeleBot({
    token: '1007304900:AAElDykCI0xOKdDl9IWZAwEo9taXfOumT2k',
    usePlugins: ['namedButtons'],
    pluginConfig: {
        namedButtons: {
            buttons: BUTTONS
        }
    }
});

module.exports.bot = bot
module.exports.BUTTONS = BUTTONS
