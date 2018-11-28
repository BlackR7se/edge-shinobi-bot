const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#FFEE00")
  .addField("Member Commands", "help, serverinfo, botinfo, userinfo, and report.");

  message.channel.send(helpembed);
  if(message.member.hasPermissions("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("HR Help Menu")
  .setColor("#00FFFF")
  .addField("HR Commands", "addrole, removerole, kick, warn, warnlevel, ban");

  try{
    await message.author.send(modembed);
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the HR commands.")
  }
}
}

module.exports.help = {
  name: "help"
}
