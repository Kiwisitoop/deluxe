const Discord = require('discord.js')
const db2 = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  nombre: "fc",
  alias: ["daily", "freeclaim", "diario"],
  run: async (client, message, args) => {
    
const usuario = message.author;
    
let author = await db2.fetch(`daily_${usuario.id}`)
    
  let timeout = 8.64e+7;
    
    if(author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      
      let timeEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`¡Vuelve en 24 horas por más caramelos!\n\n Tiempo restante: ${time.hours}h ${time.minutes}m ${time.seconds}s`)
      
return message.channel.send(timeEmbed)
    
} else {      
      
  
const daily = 20;
  
const embed = new Discord.MessageEmbed()
    
.setColor("RANDOM")
.setDescription(`¡Has conseguido ${daily}${process.env.CANDY}! <:yes:727672266942316564>`)

message.channel.send(embed)

db2.add(`candys_${usuario.id}`, daily)
db2.set(`daily_${usuario.id}`, Date.now())
  
    }
  }
}