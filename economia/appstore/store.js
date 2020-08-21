const Discord = require('discord.js')
const Jimp = require('jimp')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "appstore",
  alias: ["storeapp", "apps", "playstore", "storeplay", "store"],
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
    
    const mask = 'https://media.discordapp.net/attachments/359425464885837827/726497730456977468/oie_NDhERE2P9U9u.png?width=232&height=481'
    const appstore_font = await Jimp.loadFont('https://raw.githubusercontent.com/Liimiitz/fortniters/master/storage/fonts/Burbank26px.fnt')
  
const calculadora = 'https://media.discordapp.net/attachments/359425464885837827/726482904401838150/oie_W06GZKxjc7O0.png?width=481&height=481'    

const pacman = 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402'

const votada = 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402' 

const traductor = 'https://media.discordapp.net/attachments/724713441629306944/727547911717781565/oie_TP6SrZ0WMLTv.png?width=174&height=188'

    const font64 = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK)
    const font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    
    
    const readMask = await Jimp.read(mask)
    const readCalculadora = await Jimp.read(calculadora)
    const readPacman = await Jimp.read(pacman)
    const readTraductor = await Jimp.read(traductor)
    const readMasvotada = await Jimp.read(votada)
    
    readMask.resize(300, 600)
    readCalculadora.resize(100, 100)
    readPacman.resize(110, 115)
    readTraductor.resize(100, 100)
    readMasvotada.resize(210, 210)
    
    readMask.print(font64, 25, 60, 'Appstore')
    readMask.print(font32, 5, 340, 'Más votada:')
    
    
    readMask.composite(readMasvotada, 35, 360)
    readMask.composite(readCalculadora, 5, 140)
    readMask.composite(readPacman, 90, 128)
    readMask.composite(readTraductor, 190, 150)
    
    readMask.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) console.log(err)
      
      message.channel.send(new Discord.MessageAttachment(buffer, 'store.png'))
      
    })
    
  }
}