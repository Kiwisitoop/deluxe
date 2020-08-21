const Discord = require('discord.js');


module.exports = {
  nombre: "snipe",
  alias: [],
  descripcion: "Este comando sirve para ver el último mensaje borrado de un servidor.",
  run: (client, message, args) => {
    
    
    if(message.author.bot) return;
    if(message.content.length < 1) return message.channel.send(`No hay mensajes borrados recientemente.`)
    
    const canal = message.mentions.channels.first() || message.channel
    const msg = client.snipes.get(canal.id)
    if(!msg) return message.channel.send("No hay mensajes borrados recientemente.")
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(msg.author, msg.avatar)
    .setDescription(msg.content)
    if(msg.image) {
      embed.setImage(msg.image)
      embed.setFooter("¿Problemas al procesar la imagen?")
    } 
    
    message.channel.send(embed)
  }
}