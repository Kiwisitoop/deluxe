const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')


module.exports = {
  nombre: "setinfo",
  alias: ["infoset", "informacionset"],
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = '*'
    }
    
    const usuario = message.author;
    
    var carcasa = await db2.fetch(`carcasa_${usuario.id}`)
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setDescription(`Para personalizar tu Celular debes conocer los siguientes campos:\n\nEstilo:\n\n¡Hay muchos tipos de estilo para tu celular! Puedes establecerlos con el comando ${prefix}setestilo\n\nPuedes ver la lista de estilos disponibles con el comando ${prefix}estilos`)
    
    
    message.channel.send(embed)
    
  }
}