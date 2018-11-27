const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "s!";

client.on('ready', () => {
    console.log('Hello, im Shinobi Bot. I was made by Edge#8251 for moderate some Discord servers. Im online the 24 hours the 7 days of the week!');
});

client.on('message', msg => {
  if (msg.guild === null) return;
  if (msg.author.bot) return;

  if (!msg.content.toLowerCase().startsWith(prefix )) return;

  if (msg.content.toLowerCase().startsWith(prefix + "kick")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send("The user " + mem.displayName + " has succesfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured!");    
    });
  }
}

client.login(process.env.BOT_TOKEN);
