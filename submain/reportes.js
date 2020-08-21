const Discord = require('discord.js');
const db = require('megadb');
var prefix_db = new db.crearDB("prefixes")
const db2 = require('quick.db');


module.exports = {
  nombre: "reportar",
  alias: ["report"],
  descripcion: "Este comando sirve para enviar un reporte al canal establecido.",
  run: async (client, message, args) => {
    
    
          let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "*"
  }
    
    
    let reporte = args.join(' ');
    if(!reporte) return message.channel.send("Debes escribir un reporte.").then(msg => msg.delete({timeout: 5000}))
    
    
    
    let chx = db2.get(`reportchannel_${message.guild.id}`)
    
    
    if(chx === null) {
      return message.channel.send(":x: **|** El servidor no tiene ningún canal de reportes.\n\n¡Puedes establecer uno con " + prefix + "setreport").then(msg => msg.delete({timeout: 5000}))
    }
    
    
    message.channel.send("Tu reporte ha sido enviado.").then(msg => msg.delete({timeout: 5000}))
    
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle("Nuevo reporte")
    .setDescription(reporte)
    .setTimestamp()
    .setFooter("Puedes dejar tu reporte con el comando " + prefix + "report")
    const rCanal = client.channels.cache.get(chx)
    
    
    rCanal.send(embed)
  
    
    message.delete()
    
  }
}