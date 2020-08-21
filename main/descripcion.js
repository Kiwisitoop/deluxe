const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')

module.exports = {
  nombre: "descripcion",
  alias: ["desc", "changedesc", "setdesc", "setdescripcion", "establecerdescripcion", "profdesc", "perfildesc", "descripción"],
  run: async (client, message, args) => {
    
    
    const usuario = message.author;
    
    
    
var descripcion = await db2.fetch(`profdesc_${usuario.id}`, args.join(' '))    

if(["reset", "restart", "reiniciar"].includes(args[0])) {
  db2.delete(`profdesc_${usuario.id}`, args.join(' '))
  return message.channel.send("Tu descripción ha sido reiniciada.")
}

if(!args[0]) return message.channel.send("Debes ingresar una descripción.")
    
if(args.join(' ') == descripcion) return message.channel.send("La descripción que ingresaste es la misma que tienes ahora mismo. Prueba con otra.")
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle(`¡Nueva descripción!`)
    .setDescription(args.join(' '))
    
    db2.set(`profdesc_${usuario.id}`, args.join(' '))
    
    message.channel.send(embed)
    
  }
}