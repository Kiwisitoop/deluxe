const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "encuesta",
  alias: ['encuestar', "sendencuesta", "encuestasend", "poll", "pollsend", "sendpoll", "enviarpoll", "pollenviar"],
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = '*'
    }
    
if(!args[0]) return message.channel.send('Debes ingresar una encuesta <:heartforyou:727172417570734231>')
        
    
const canal = await db2.fetch(`encuestas_${message.guild.id}`)

if(canal === null) {
   return message.channel.send(`Este servidor no tiene ningún canal para las encuestas.\n\nPuedes establecer uno con el comando ${prefix}setencuesta`)
}
    
let embedencuestas = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Encuesta")
    .setDescription(args.join(' '))
    .addField("Opción 1", "✅ Sí", true)
    .addField("Opción 2", "❌ No", true)
    .setTimestamp()
    
const enviar = message.guild.channels.cache.get(canal)       

enviar.send(embedencuestas).then(async msg => {
    msg.react("717645147453653042")
    msg.react("717645680385982525")
    message.delete()
     
      })
    
    }  
  }