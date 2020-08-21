const Discord = require('discord.js');
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "desinstalar",
  alias: ["uninstall", "borrar", "eliminar", "desinstall", "remover", "remove"],
  run: async (client, message, args) => {

let prefix;
if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = '*'
}
    
const usuario = message.author;    
  
if(!db2.has(`carcasa_${usuario.id}`)) {
  
  return message.channel.send(`Oh, se me olvidaba... Mi padre me dijo que te diera a elegir entre algunos estilos de celulares.\n\nUsa el comando ${prefix}estilos para verlos todos ^^`)
  
}    
    
if(!args[0]) return message.channel.send('Debes escoger una aplicación para removerla.')
    
    
  var apps = {
  
    "calculadora": 'https://media.discordapp.net/attachments/359425464885837827/726482904401838150/oie_W06GZKxjc7O0.png?width=481&height=481',
    "pacman": 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402', "pac-man": 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402',
    "traductor": 'https://media.discordapp.net/attachments/724713441629306944/727547911717781565/oie_TP6SrZ0WMLTv.png?width=174&height=188',
    "notas": 'https://media.discordapp.net/attachments/359425464885837827/735546369615462460/oie_transparent_19.png?width=481&height=481'
    
  }    




if(!apps[args[0].toLowerCase()]) return message.channel.send(`Esa aplicación no existe.`)   
    
if(args[0].toLowerCase() === 'calculadora') {

if(!db2.has(`calculadora_${usuario.id}`)) {
  
  return message.channel.send('No tienes esta aplicación instalada.')
  
} else {
  
const espera = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Desinstalando aplicación...`)
.setDescription(`Espere unos segundos...`)
  
const wait = await message.channel.send(espera)
  
  setTimeout(() => {
  
const calcembed = new Discord.MessageEmbed()
    
.setColor("RANDOM")
.setTitle(`Aplicación desinstalada`)
.setDescription(`La aplicación Calculadora ha sido desinstalada exitosamente.`)

wait.edit(calcembed)
    
db2.delete(`calculadora_${usuario.id}`)    
    
        }, 5000)
     }
  }

else if(['pacman', 'pac-man'].includes(args[0].toLowerCase())) {
  
if(!db2.has(`pacman_${usuario.id}`)) {
  
  return message.channel.send('No tienes esta aplicación instalada.')
  
} else {
  
  const wp = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`Desinstalando aplicación...`)
  .setDescription(`Espere unos segundos...`)
  
  const wpenv = await message.channel.send(wp)
  
  setTimeout(() => {
  
    const pacembed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle(`Aplicación desinstalada`)
    .setDescription(`La aplicación Pac-Man ha sido desinstalada exitosamente.`)
    
    wpenv.edit(pacembed)
    
    db2.delete(`pacman_${usuario.id}`)
  
  }, 10000)
  
        }
     }
    
else if(args[0].toLowerCase() === 'traductor') {
  
if(!db2.has(`traductor_${usuario.id}`)) {
  
return message.channel.send("No tienes esta aplicación instalada.")
  
} else {
  
  const wt = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`Desinstalando aplicación...`)
  .setDescription(`Espere unos segundos...`)
  
  const wtenv = await message.channel.send(wt)
  
  setTimeout(() => {
    
    const tracembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Aplicación desinstalada`)
    .setDescription(`La aplicación Traductor ha sido desinstalada exitosamente.`)
    
    wtenv.edit(tracembed)
    
    db2.delete(`traductor_${usuario.id}`)
    
  }, 10000)
  
}
  
}
    
else if(args[0].toLowerCase() === 'notas') {
  
const sistema = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(`Error`)
.setDescription(`No puedes desinstalar una aplicación del sistema.`)
  
return message.channel.send(sistema)

}
    
  }
}