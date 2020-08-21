const Discord = require('discord.js')
const db = require('megadb')
const db2 = require('quick.db')

module.exports = {
  nombre: "depositar",
  alias: ["dep"],
  run: async (client, message, args) => {
    
    const usuario = message.author;
   
    const member = await db2.fetch(`coins_${usuario.id}`)
    
    const bank = await db2.fetch(`bank_${usuario.id}`)

    
if(!args[0]) return message.channel.send("Debes especificar un monto para depositar.")

if(args[0] == 'all') {
  
  if(member <= 0) return message.channel.send("No tienes dinero en mano.")
  
  const all = new Discord.MessageEmbed()
  
  .setColor('RANDOM')
  .setDescription(`Has depositado todo tu dinero al banco.`)
  
  db2.add(`bank_${usuario.id}`, member)
  db2.subtract(`coins_${usuario.id}`, member)
  return message.channel.send(all)
}    
    
if(isNaN(args[0])) return  message.channel.send("Debes ingresar un número, no letras ni símbolos.")

    
if(member < args[0]) return message.channel.send(`No tienes suficiente dinero para depositar.\n\nTienes ${member}<a:Coin:722573687781326929>en mano.`)
    
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setDescription(`Has depositado ${args[0]}${process.env.MONEDA} a tu cuenta bancaria.`)
    
    message.channel.send(embed)
    
    db2.add(`bank_${usuario.id}`, args[0])
    db2.subtract(`coins_${usuario.id}`, args[0])
    
  }
}