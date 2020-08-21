const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "personajes",
  alias: ["personaje", "character"],
  descripcion: "Este comando muestra el personaje del usuario mencionado/autor",
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id) 
    } else {
      prefix = "*"
    }
        
    const usuario = message.mentions.users.first() || message.author;

    
    const nombre = await db2.fetch(`nombre_${usuario.id}`, args.join(' '))
    
    const descripcion = await db2.fetch(`descripcion_${usuario.id}`, args.join(' '))
    
    const imagen = await db2.fetch(`imagen_${usuario.id}`, args.join(' '))
    
    if(nombre == null) {
      return message.channel.send((message.author == usuario)?`¡Aún no has terminado tu personaje! Puedes guiarte siguiendo las instrucciones del comando ${prefix}makeinfo`: "Este usuario no tiene ningún personaje creado aún, o no lo ha terminado.")
    }
    
    if(descripcion == null) {
      return message.channel.send((message.author == usuario)?`¡Aún no has terminado tu personaje! Puedes guiarte siguiendo las instrucciones del comando ${prefix}makeinfo`: "Este usuario no tiene ningún personaje creado aún, o no lo ha terminado.")
    }
    
    if(imagen == null) {
      return message.channel.send((message.author == usuario)?`¡Aún no has terminado tu personaje! Puedes guiarte siguiendo las instrucciones del comando ${prefix}makeinfo`: "Este usuario no tiene ningún personaje creado aún, o no lo ha terminado.")
    }
    
    if(args[0] == "reset") {
      db2.delete(`nombre_${usuario.id}`, args.join(' '))
      db2.delete(`descripcion_${usuario.id}`, args.join(' '))
      db2.delete(`imagen_${usuario.id}`, args.join(' '))
      return message.channel.send(`Tu personaje ha sido reiniciado, puedes crear uno nuevo guiándote con el comando ${prefix}makeinfo`)
    }
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(nombre)
    .setDescription(descripcion)
    .setImage(imagen)
    
    message.channel.send(embed)
    
  }
}