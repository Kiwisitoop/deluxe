const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "descargar",
  alias: ["download", "bajar", "install", "instalar"],
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
    
if(!args[0]) return message.channel.send(`Debes ingresar una aplicación para descargarla.`)

  var apps = {
  
    "calculadora": 'https://media.discordapp.net/attachments/359425464885837827/726482904401838150/oie_W06GZKxjc7O0.png?width=481&height=481',
    "pacman": 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402', "pac-man": 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402',
    "traductor": 'https://media.discordapp.net/attachments/724713441629306944/727547911717781565/oie_TP6SrZ0WMLTv.png?width=174&height=188'
    
  }
    
  if(!apps[args[0].toLowerCase()]) {
    return message.channel.send(`Esa aplicación no existe, usa el comando ${prefix}appstore para verlas todas ^^`)
  }
    


  
// CALCULADORA // 
    
if(args[0].toLowerCase() === 'calculadora') {

  
if(db2.has(`calculadora_${usuario.id}`, apps[args[0].toLowerCase()])) {

const yatienes = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('¡Ya tienes instalada esta aplicación!')

  return message.channel.send(yatienes)
  
} else {
      
const descargando = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`Descargando...`)
.setDescription(`Espera unos segundos hasta que la descarga finalice...`)
    
let downloading = await message.channel.send(descargando)
      
      setTimeout(async () => {
     
const edit = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`¡Tu descarga ha finalizado!`)
.setDescription(`La aplicación ha sido agregada a su pantalla de inicio.`)
.setFooter(`¡Disfrútala!`)
        
db2.set(`calculadora_${usuario.id}`, apps[args[0].toLowerCase()])  
        
      downloading.edit(edit)
      }, 15000)
      
    }
  }
    
// PAC-MAN //
    
    else if(['pacman', 'pac-man'].includes(args[0].toLowerCase())) {
      
if(db2.has(`pacman_${usuario.id}`, apps[args[0].toLowerCase()])) {
  
  const yatienes = new Discord.MessageEmbed()

.setColor('RANDOM')
.setTitle('¡Ya tienes instalada esta aplicación!')
  
  return message.channel.send(yatienes)

      } else {
      
const descargando = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`Descargando...`)
.setDescription(`Espera unos segundos hasta que la descarga finalice...`)
    
let downloading = await message.channel.send(descargando)
        
      setTimeout(async () => {
        
const edit = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`¡Tu descarga ha finalizado!`)
.setDescription(`La aplicación ha sido agregada a su pantalla de inicio.`)
.setFooter(`¡Disfrútala!`)
        
        db2.set(`pacman_${usuario.id}`, apps[args[0].toLowerCase()])
        
        downloading.edit(edit)
      }, 20000)
      
      }
    }
    
    else if(args[0].toLowerCase() === 'traductor') {
     
if(db2.has(`traductor_${usuario.id}`, apps[args[0].toLowerCase()])) {
  
  const yatienes = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Ya tienes instalada esta aplicación!`)
  
  return message.channel.send(yatienes)
  
} else {
  
const descargando = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`Descargando...`)
  .setDescription(`Espera unos segundos hasta que la descarga finalice...`)

const downloading = await message.channel.send(descargando)
  
setTimeout(async () => {

  const edit = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`¡Tu descarga ha finalizado!`)
  .setDescription(`La aplicación ha sido agregada a su pantalla de inicio.`)
  .setFooter(`¡Disfrútala!`)
  
  db2.set(`traductor_${usuario.id}`, apps[args[0].toLowerCase()])

  downloading.edit(edit)

   }, 20000)
 }
      
    }
  }
}