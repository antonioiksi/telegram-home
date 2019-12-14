bot.on('/help', (msg) => {
    let id = msg.from.id;
    let replyToMessage = msg.message_id;
    let parseMode = 'html';
    let message = '/settemp 20.1 - установка порога температуры 🌡\n'
        + '/ping 127.0.0.1 - проверка пинга по IP 💡\n'
        + '/напомни что-то в ЧЧ:ММ - напоминалка 📌'
    return bot.sendMessage(
        id, message, {replyToMessage, parseMode}
    );
});
