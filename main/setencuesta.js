const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "setencuesta",
  alias: ["canalencuestas", "establecerencuestas", "encuestasestablecer", "encuestaset", "setencuestas", "encuestasset", "encuestas", "polls", "pollset", "pollsset"],
  run: async (client, message, args) => {
    
let prefix;
if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = '*'
}    
    
const canal = message.mentions.channels.first()

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`No tienes suficientes permisos para utilizar este comando.`)

if(!canal) return message.channel.send(`Debes mencionar un canal.`)
    
message.channel.send(`El canal para las encuestas ahora es ${canal}.\n\nPuedes enviar las encuestas con el comando ${prefix}encuesta`)
    
db2.set(`encuestas_${message.guild.id}`, canal.id)    
    
  }
}