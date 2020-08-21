const Discord = require('discord.js')
var Weez = require("weez")
var weez = new Weez.WeezAPI("VFyAwIDKtRYrG8UF1zPKwgJxD4FYEl78ca01") 

module.exports = {
  nombre: "triggered",
  alias: ["enojado"],
  run: async (client, message, args) => {    
    
const usuario = message.mentions.users.first() || message.author;
 
const link = await weez.triggered(usuario.displayAvatarURL({format: 'png'})) 
    
  const attachment = new Discord.MessageAttachment(link, 'archivo.gif') 

  message.channel.send(attachment)
  
   }   
}

