const Discord = require('discord.js');
const db2 = require('quick.db');
const db = require('megadb');
let prefix_db = new db.crearDB("prefixes");

module.exports = {
  nombre: "suggest",
  alias: ["sugerir", "sugerencia", "sendsuggest", "suggestsend", "enviarsugerencia", "sugerenciaenviar", "suggestenviar", "suggestenv", "envsuggest"],
  descripcion: "Este comando sirve para enviar una sugerencia al canal.",
  run: async (client, message, args) => {
    
          let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "*"
  }
    
    
    let suggestion = args.join(' ');
    if(!suggestion) return message.channel.send("Debes escribir una sugerencia.").then(msg => msg.delete({timeout: 5000}))
    
    let chx = db2.get(`suggestionchannel_${message.guild.id}`);
    
    if(chx === null) {
      return message.channel.send("El servidor no tiene ningún canal de sugerencias.\n\n¡Puedes establecer uno con " + prefix + "setsuggest").then(msg => msg.delete({timeout: 5000}))
    }
    
    message.channel.send("Tu sugerencia ha sido enviada.").then(msg => msg.delete({timeout: 5000}))
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle("Nueva sugerencia")
    .setDescription(suggestion)
    .setTimestamp()
    .setFooter("Puedes dejar tu sugerencia con el comando " + prefix + "suggest")
    const rCanal = client.channels.cache.get(chx)
    
    rCanal.send(embed).then(async msg => {
      await msg.react("✅")
      await msg.react("❌")
    });
    
    message.delete()
    
  }
}