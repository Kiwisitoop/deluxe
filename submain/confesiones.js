const Discord = require('discord.js');
const db = require('megadb');
var prefix_db = new db.crearDB("prefixes")
const db2 = require('quick.db')


module.exports = {
  nombre: "confession",
  alias: ["confesion", "confesar", "confesión"],
  descripcion: "Este comando sirve para enviar una confesión al canal.",
  run: async (client, message, args) => {
    
      let prefix;
    if(prefix_db.tiene(`${message.guild.id}`)) {
prefix = await prefix_db.obtener(`${message.guild.id}`)

    }else{
     prefix = "*"
  }
    
    let confesion = args.join(' ')
    if(!confesion) return message.channel.send("Debes escribir una confesión.").then(msg => msg.delete({timeout: 5000}))
    
    
    
    let chx = db2.get(`confessionchannel_${message.guild.id}`)
    
    
    if(chx === null){
      return message.channel.send(":x: **|** El servidor no tiene ningún canal de confesiones.\n\nPuedes establecer uno con " + prefix + "setconfession").then(msg => msg.delete({timeout: 5000}))
    }
    
    
    message.channel.send("Tu confesión ha sido enviada ^^").then(msg => msg.delete({timeout: 5000}))
    
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Nueva confesión")
    .setDescription(confesion)
    .setTimestamp()
    .setFooter("Puedes dejar tu confesión con el comando " + prefix + "confession")
    
    const cCanal = client.channels.cache.get(chx)
    
    
    cCanal.send(embed)
    
    message.delete()
  
    
  }
}