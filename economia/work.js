const Discord = require('discord.js')
const db2 = require('quick.db')
const ms = require('parse-ms')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "work",
  alias: ["trabajar", "workear"],
  run: async (client, message, args) => {
    
    
const usuario = message.author;
    
let author = await db2.fetch(`work_${usuario.id}`)
    
  let timeout = 600000;
    
    if(author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      
      let timeEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Ya has trabajado recientemente, vuelve al trabajo en ${time.minutes}m ${time.seconds}s`);
      
      message.channel.send(timeEmbed)
    
  } else {
    
    const randomsi = Math.floor(Math.random() * 500) + 1
    
const Simensajes = [`Has ido a trabajar y llegaste a casa con ${randomsi}${process.env.MONEDA}.`, `Fuiste a trabajar de minero y conseguiste ${randomsi}${process.env.MONEDA}`, `Fuiste streamer por un día y conseguiste ${randomsi}${process.env.MONEDA}`]
const randomyea = Math.floor(Math.random() * Simensajes.length)


if(randomsi >= 201) {
    
const embedsi = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(Simensajes[randomyea])
    
db2.add(`coins_${usuario.id}`, randomsi)
db2.set(`work_${usuario.id}`, Date.now())
      
return message.channel.send(embedsi)

} 
    
const Nomensajes = [`Has llegado tarde al trabajo... Perdiste ${randomsi}${process.env.MONEDA}`, `Se te ha caído el taladro al agua... Perdiste ${randomsi}${process.env.MONEDA}`, `Fuiste a trabajar a la mina. Lamentablemente te asaltaron en el camino a casa :(\nPerdiste ${randomsi}${process.env.MONEDA}`]
const randomnope = Math.floor(Math.random() * Nomensajes.length)
    
if(randomsi <= 200) {
      
const embedno = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(Nomensajes[randomnope])
      
db2.subtract(`coins_${usuario.id}`, randomsi)
db2.set(`work_${usuario.id}`, Date.now())
      
return message.channel.send(embedno)
      

       }
     }
   }
}