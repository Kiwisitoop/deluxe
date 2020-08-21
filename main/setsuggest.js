const Discord = require('discord.js');
const db = require('megadb');
let prefix_db = new db.crearDB("prefixes");
const db2 = require('quick.db');



module.exports = {
  nombre: "suggestions",
  alias: ["setsuggest", "setsuggestions"],
  descripcion: "Este comando sirve para establecer un canal de sugerencias.",
  run: async (client, message, args) => {
    
    
      let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "*"
  }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **|** No tienes los permisos necesarios para usar este comando.")
    
    if(args[0] === "reset") {
     db2.delete(`suggestionchannel_${message.guild.id}`)
     message.channel.send("Se reinició el canal de sugerencias.")
         return;   
    }
    
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      const embedchannel = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("¿Necesitas ayuda?")
      .setDescription("Para establecer un canal de sugerencias debes mencionar un canal, aquí un ejemplo:")
      .setImage("https://cdn.discordapp.com/attachments/719294961039835196/719295748944035881/unknown.png")
      .setFooter("Puedes reestablecer el canal de sugerencias utilizando el comando " + prefix + "setsuggest reset")
      return message.channel.send(embedchannel)
    }
    
    db2.set(`suggestionchannel_${message.guild.id}`, channel.id)
  
  message.channel.send(`Las sugerencias ahora irán a ${channel}`)

  
  }
}