bot.on('sticker', (msg) => {
    console.log('sticker');
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
