const Discord = require('discord.js')
const id = require('../config.json')

module.exports = {
  nombre: "servidores",
  alias: ["servers"],
  run: async (client, message, args) => {
    
if(!id.idOwner.includes(message.author.id)) return;
    
const embed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle('Mi lista de servidores...')
.setDescription(client.guilds.cache.map(s => s.name).join('\n'))
   
message.channel.send(embed)

  }
}