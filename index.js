const express = require("express");
const app = express();
app.listen(3000, () => {
console.log("Bot is running");
  console.log("Hosted by Vuchyy#4937")
  console.log("Check beeteruptime if errors")

})

 app.get("/", (req, res) => {
res.send("We are bitch ")
})

const Discord = require("discord.js");
const client = new Discord.Client({
intents: ["GUILDS", "GUILD_MESSAGES"],
allowedMentions: ["users"]})
//check package.json
client.on('ready', () => {
client.user.setActivity("Discord", { type: 'WATCHING' })
})

const fs = require("fs")
const prefix = ">"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for (file of commands) {
const commandName = file.split(".")[0]
const command = require(`./Commands/${commandName}`)
client.commands.set(commandName, command)
}
client.on('messageCreate', message =>{
if(message.content.startsWith(prefix)) {
const args = message.content.slice(prefix.length).trim().split(/ +/g)
const commandName = args.shift()
const command = client.commands.get(commandName)
if(!command) return 
command.run(client, message, args)
}
})

client.login(process.env.token)