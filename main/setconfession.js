const Discord = require('discord.js');
const db2 = require('quick.db');




module.exports = {
  nombre: "setconfession",
  alias: ["confesiones", "confessions"],
  descripcion: "Este comando sirve para establecer un canal de confesiones.",
  run: async (client, message, args) => {
    
    if(args[0] === "reset"){
      db2.delete(`confessionchannel_${message.guild.id}`)
      message.channel.send("Se reinició el canal de reportes.")
      return;
    }
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **|** No tienes los permisos suficientes para utilizar este comando.")
    
    let channel = message.mentions.channels.first()
    
    if(!channel) return message.channel.send("Debes mencionar un canal.")
    
  
  db2.set(`confessionchannel_${message.guild.id}`, channel.id)
    
    
    message.channel.send(`Las confesiones ahora irán a ${channel}`)
  
  
  }
}