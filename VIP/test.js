const Discord = require('discord.js')
const config = require('../config.json')

module.exports = {
  nombre: "test",
  alias: ["prueba"],
  run: async (client, message, args) => {
    
if(message.author != config.idOwner) return;
    
const embed = new Discord.MessageEmbed()

.setColor('0x8D55E6')
.setDescription(`¡Hey! ¿Quieres darle un uso a esos deliciosos caramelos que recibes todos los días? ¡Te tengo buenas noticias! Con estos dulces podrás tener acceso a una gran variedad de comandos increíbles y exclusivos.\n\nComando en desarrollo...`)
   
message.channel.send(embed)

  }
}