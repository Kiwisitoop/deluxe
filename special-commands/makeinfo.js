const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "makeinfo",
  alias: ["infomake"],
  descripcion: "Este comando te da información acerca de crear un personaje.",
  run: async (client, message, args) => {
    
    if(message.author.bot) return;
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = "*"
    }
    
    var usuario = message.author;
    
    var nombre = await db2.fetch(`nombre_${usuario.id}`, args.join(' '))
    
    var descripcion = await db2.fetch(`descripcion_${usuario.id}`, args.join(' '))
    
    var imagen = await db2.fetch(`imagen_${usuario.id}`, args.join(' '))
    
    if(nombre == null) {
      nombre = `Aún no le has puesto nombre a tu personaje, puedes hacerlo con el comando ${prefix}makename <nombre>`
    }
    
    if(descripcion == null) {
      descripcion = `Aún no le has puesto una descripción a tu personaje, puedes ponerle una con el comando ${prefix}makedesc <descripción>`
    }
    
    if(imagen == null) {
      imagen = "https://cdn.discordapp.com/attachments/720468015681896540/724364477591715920/unknown.png"
    }
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("¿Necesitas ayuda?")
    .setDescription(`Para crear un personaje necesitas conocer 3 campos, a continuación te mostraré cada uno de ellos:\n\n**Nombre:**\n${nombre}\n\n**Descripción:**\n${descripcion}\n\n**Imagen:**`)
    .setImage(imagen)
    
    message.channel.send(embed)
    
  }
}