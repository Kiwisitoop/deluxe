const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: 'estilos',
  alias: ["listaestilos", "estiloslist", "listestilos", "liststyle", "stylelist", "estyle", "phones", "celulares", "iphones", "styles"],
  run: async (client, message, args) => {
    

let prefix;
if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = '*'
}
    
const embed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`Mi padre se compró otro celular nuevo, me dijo que te diera a elegir entre estos distintos tipos de celular ^^\n\nEscoge uno con el comando ${prefix}setestilo <estilo>`)
.setImage('https://media.discordapp.net/attachments/724713441629306944/725819374652620870/lop.png?width=470&height=470')
.setFooter('¡Vuelve cuándo quieras!')

message.channel.send(embed)
    
  }
}