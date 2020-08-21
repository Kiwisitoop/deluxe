const config = require('../config.json')
const Discord = require('discord.js')

module.exports = {
  nombre: "eval",
  alias: ["ev", "e", "evaluar"],
  run: async(client, message, args) => {
    
if(message.author.id != config.idOwner) return message.channel.send(`¡No puedes usar este comando! <a:aaaaa:727339491253289030>`)
    
if(!args[0]) return message.channel.send(`Ups, debes ingresar almenos un caracter <:heartforyou:727172417570734231>`)
    
try {
    
const embed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(`**Comando Eval**`)
.setDescription(`Ping de la evaluación: ${client.ws.ping}` + "\n\nEntrada:\n```js\n" + args.join(' ') + '\n```' + "Salida:\n```js\n" + eval(args.join(' ')) + '\n```')
    
message.channel.send(embed)
   
   }catch(err) {
     
     const embedrror = new Discord.MessageEmbed()
     
     .setColor("RED")
     .setTitle(`**Error**`)
     .setDescription('```js\n' + err + '\n```')
     
     return message.channel.send(embedrror)
     
   }
  }
}