const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "coins",
  alias: ["bal", "balance", "money", "cash", "monedas", "dinero"],
  run: async (client, message, args) => {
    
  let prefix;
if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = '*'
}
    
    
const usuario = message.mentions.users.first() || message.author;
    
var coins = await db2.fetch(`coins_${usuario.id}`)

if(coins == null) {
  coins = '0'
}
    
    
const embed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(`Coins de ${usuario.username}`)
.setThumbnail(process.env.THUMBNAIL)
.setDescription((message.author == usuario) ? `Tienes ${coins} ${process.env.MONEDA}` : `Tiene ${coins}`)
.setFooter(`Puedes conseguir más coins con el comando ${prefix}work`)

message.channel.send(embed)
    
  }
}