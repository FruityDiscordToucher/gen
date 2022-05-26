module.exports.run = (client, message, args) => {
  const Discord = require("discord.js")
  let replies = ["MeredithReyes97:79seyeRhtidereM","KrystalWalters83:38sretlaWlatsyrK", "VincentArnold38:83dlonrAtnecniV", "MarkBecker19:91rekceBkraM", "LeonardFigueroa10:01aoreugiFdranoeL", "DeannaMcguire10:01eriugcMannaeD", "KathyLozano6:6onazoLyhtaK", "JanetHamilton87:78notlimaHtenaJ", "EvelynKlein59:95nielKnylevE", "You got rickrolled ! Try again !", "AlbertPope98:89epoPtreblA", "ShawnReyes77:77seyeRnwahS","RitaWoods27:72sdooWatiR","ArthurWalker81:18reklaWruhtrA","GraceMoss50:05ssoMecarG","StacyHartman67:76namtraHycatS","PatrickMclean18:81naelcMkcirtaP", "EvelynKlein59:95nielKnylevE", "You got rickrolled ! Try again !", "AlbertPope98:89epoPtreblA", "ShawnReyes77:77seyeRnwahS","RitaWoods27:72sdooWatiR","ArthurWalker81:18reklaWruhtrA","GraceMoss50:05ssoMecarG","StacyHartman67:76namtraHycatS","PatrickMclean18:81naelcMkcirtaP", "Sgt6Sacsage:oXE5b8tHqj", "Sgt6kausage:RFS2C7jf2dkdKd", "SgtAppxe:MUUEWYddC1wFmN", "SgtArmu:410d79c713c34266", "SgtAswdme:b8be5084ec0d0f3a", "SgtAswomr:9a458725eb14d57759c97a27", "SgtAthix:pI3N8cBv26xJQ", "SgtAtrix:f3a42896a6f38a43", "SgtBaiana:e54236ed300faa"]
message.author.send(replies[Math.floor(Math.random() * replies.length)]) // you can't send embeds with that or the system won't work. but i can do something like that ```Account generated ! User ???? Password ???????? 
  
const generator = new Discord.MessageEmbed()
 .setTitle(`Roblox acocunt `)
 .setDescription(`Look your dms to have account !`)
 .setAuthor("Account generated", "https://clipground.com/images/green-check-mark-clipart-8.png")
 .setColor("RANDOM")
 message.channel.send({embeds :[generator]});
}

module.exports.name = "nitro" 