const Discord = require('discord.js')

module.exports = {
  nombre: "geo",
  alias: ["geometry", "geometrydash", "dash"],
  run: async(client, message, args) => {
    
    const texto = args.join('20%')
    
if(!texto) return message.channel.send(`Debes ingresar un texto para transformarlo ^^`)
    
    const attachment = new Discord.MessageAttachment(`https://gdcolon.com/tools/gdlogo/img/${texto}`, "geo.png")
    
    message.channel.send(attachment).catch(err => message.channel.send(`Ha ocurrido un error <a:aaaaa:727339491253289030>`))
  
  }
}