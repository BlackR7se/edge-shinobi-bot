const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Edge was Here!');
});

client.on('message', message => {
   if (message.content === 'PING') {
     message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
