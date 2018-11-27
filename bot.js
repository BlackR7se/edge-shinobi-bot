const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "s!";

client.on('ready', () => {
    console.log('Hello, im Shinobi Bot. I was made by Edge#8251 for moderate some Discord servers. Im online the 24 hours the 7 days of the week!');
});

client.login(process.env.BOT_TOKEN);
