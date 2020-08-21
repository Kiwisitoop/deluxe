const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')

module.exports = {
  nombre: "with",
  alias: ["extraer", "sacar", "retirar"],
  run: async (client, message, args) => {
    
    const usuario = message.author;
    
    var coins = await db2.fetch(`coins_${usuario.id}`)
    var bank = await db2.fetch(`bank_${usuario.id}`)
    
    
    if(!args[0]) return message.channel.send("Debes ingresar un número.")
    
    
if(args[0] == 'all') {
  
if(bank == 0) return message.channel.send("No tienes dinero en el banco.")
  
  const all = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setDescription(`Has retirado todo tu dinero del banco.\n\nDinero retirado: ${bank}${process.env.MONEDA}`)
  
      db2.add(`coins_${usuario.id}`, bank)
      db2.subtract(`bank_${usuario.id}`, bank)
      
      return message.channel.send(all)
      
    }
    
    
    if(isNaN(args[0])) return message.channel.send("Debes ingresar un número, no letras ni símbolos.")
    
if(bank == 0) return message.channel.send("No tienes dinero en el banco.")
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setDescription(`Has sacado ${args[0]}${process.env.MONEDA}del banco.`)
    
    message.channel.send(embed)
    
  }
}