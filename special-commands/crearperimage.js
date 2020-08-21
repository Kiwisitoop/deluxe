const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "crearimage",
  alias: ["createimage", "makeimage", "imagemake", "image", "perimage", "imageper", "imagen"],
  descripcion: "Este comando sirve para establecerle una imagen a tu personaje.",
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id) 
    } else {
      prefix = "*"
    }
    
    const usuario = message.author;
    
    if(!args[0]) return message.channel.send(":x: **|** Debes ingresar la URL de una imagen.") 
    
    if(args[0] === "reset") {
      db2.delete(`imagen_${usuario.id}`, args.join(' '))
      return message.channel.send(":white_check_mark: **|** La imagen de tu personaje ha sido reiniciada.")
    }
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(args.join(' '))
    .setFooter(`¡Perfecto, ya tienes una imagen! Puedes seguir guiándote usando el comando ${prefix}makeinfo`)
    
    message.channel.send(embed)

    db2.set(`imagen_${usuario.id}`, args.join(' '))

   }
}