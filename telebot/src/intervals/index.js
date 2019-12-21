const {data} = require('../data')


setInterval(function(){
    for (var i = 0; i < data.notes.length; i++) {
        const curDate = new Date().getHours() + ':' + new Date().getMinutes();
        console.log(curDate);

        if (data.notes[i]['time'] === curDate) {
            data.joiners.map(item => {
                // bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
                bot.sendMessage(item, 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
            });

            data.notes.splice(i, 1);
        }
    }
}, 1000);

setInterval(function(){
    const tempC = sensor.readSimpleC(1);
    if (tempC < data.tempPorog) {
        console.log('ниже нормы')
        joiners.map(item => {
            // bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
            bot.sendMessage(item, `🥶🥶🥶температура в котельной ниже нормы: ${tempC} (норма=${data.tempPorog})🥶🥶🥶`);
        })
    }

}, 60000);


const POWEROFF_ALERT_MAX = 10
let poweroff_alert_count = 0
setInterval(function(){
    const fileName = '/home/pi/test-ping'
    let rawdata = fs.readFileSync(fileName);
    try {
        let test_ping = JSON.parse(rawdata);
        console.log(test_ping);
        data.joiners.map(item => {
            if("10.0.0.31" in test_ping) {
                if (test_ping["10.0.0.31"]=="dead") {
                    if(poweroff_alert_count < POWEROFF_ALERT_MAX) {
                        bot.sendMessage(item, `🔥🔥🔥пропало напряжение (камера в котельной отключилась))🔥🔥🔥`);
                        poweroff_alert_count++
                    } else {
                        console.log('🔥🔥🔥слишком много сообщений!')
                    }
                }
            } else {
                bot.sendMessage(item, `🧐 отсутствует информация о подключении камеры в котельной 🧐`);
            }
        })
    } catch(e) {
        console.error(e)
    }
}, 30000);

// refresh counter telegram alert messages every hour
setInterval(function(){
    if (poweroff_alert_count == 10) {
        poweroff_alert_count = 0
    }
}, 3600000);
