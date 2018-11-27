const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "s!";

client.on('ready', () => {
    console.log('Hello, im Shinobi Bot. I was made by Edge#8251 for moderate some Discord servers. Im online the 24 hours the 7 days of the week!');
});

client.on('message', () => {
  if (message.guild === null) return;
  if (message.author.bot) return;

  if (!message.content.toLowerCase().startsWith(prefix )) return;

  if (message.content.toLowerCase().startsWith(prefix + "kick")) {
    var mem = message.mentions.members.first();
    mem.kick().then(() => {
      message.channel.send({embed:{
        title:"The user " + mem.displayName + " has been succefully kicked by " + message.author.username + "!",
        description:"[Click me to see the rules](https://pastebin.com/zDEcasda)",
        url:"https://pastebin.com/zDEcasda",
        color: 0x3EFF00
      }})
    }).catch(e) {
      message.channel.send({embed:{
        title:"Error:",
        description:"An error occured!",
        color: 0xFF0000
      }})
      
    });
  }
});

client.login(process.env.BOT_TOKEN);
