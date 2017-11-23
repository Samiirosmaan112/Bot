const discord = require('discord');
const cilent = new Discord.Cilent();

cilent.on('ready', () => {
    console.log('I am ready!'(;
    });
    
    cilent.on('message', message => {
    if (message.content === 'ping') {
    message.reply('pong'){
    }
    });
    
    // THIS MUST THIS WAY
    cilent.login(procces.env.BOT_TOKEN);
