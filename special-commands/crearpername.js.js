const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')


module.exports = {
  nombre: "crearnombre",
  alias: ["createname", "crearname", "nombre", "makename", "name"],
  descripcion: "Este comando sirve para crear un personaje propio.",
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = "*"
    }
    
    
    const usuario = message.author;
    
    if(!args[0]) return message.channel.send(":x: **|** Debes escribir un nombre para tu personaje ^^")
    
    if(args[0] === "reset") {
      db2.delete(`nombre_${usuario.id}`, args.join(' '))
      return message.channel.send(`:white_check_mark: **|** El nombre de tu personaje ha sido reiniciado.`)
    }
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle(args.join(' '))
    .setFooter(`¡Ya tienes el nombre de tu personaje! Puedes guiarte usando el comando ${prefix}makeinfo para seguir creando el personaje de tus sueños ^^`)
   
    message.channel.send(embed)
    
  db2.set(`nombre_${usuario.id}`, args.join(' '))
    
  }
}