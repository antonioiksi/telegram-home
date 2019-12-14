bot.on(/(show\s)?kitty*/, (msg) => {
    return msg.reply.photo('http://thecatapi.com/api/images/get');
});
