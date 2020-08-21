const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "makedesc",
  alias: ["makedescription", "makedescripcion", "makedescripción"],
  descripcion: "Este comando sirve para crearle una descripción a tu personaje.",
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = "*"
    }
    
    const usuario = message.author;
    
    if(!args[0]) return message.channel.send(":x: **|** Debes escribir una descripción para tu personaje.")
    
    if(args[0] === "reset") {
      db2.delete(`descripcion_${usuario.id}`, args.join(' '))
    return message.channel.send(`:white_check_mark: **|** La descripción de tu personaje ha sido reiniciada.`)
    }
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(args.join(' '))
    .setFooter(`¡Genial! Ya tienes una descripción, para seguir creando tu personaje, puedes guiarte usando el comando el comando ${prefix}makeinfo`)
    
    message.channel.send(embed)
 
    db2.set(`descripcion_${usuario.id}`, args.join(' '))
    
  }
}


