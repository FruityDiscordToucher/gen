module.exports.run = (client, message, args) => {
  const Discord = require("discord.js")
const stock = new Discord.MessageEmbed()
 .setTitle(`Stock : Roblox`)
 .setDescription(`40+`)
 .setAuthor("Stock ", "https://pngimg.com/uploads/box/box_PNG13.png")
 .setColor("RANDOM")
 message.channel.send({embeds :[stock]});
}