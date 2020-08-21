const db2 = require('quick.db')
const Discord = require('discord.js')
const Jimp = require('jimp')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "phone",
  alias: ["celular", "cel", "telefono", "iphone", "pad"],
  run: async (client, message, args) => {
    

let prefix;
if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = '*'
}
    
    
const usuario = message.mentions.users.first() || message.author;
    
var carcasas = await db2.fetch(`carcasa_${usuario.id}`)

var calculadora = await db2.fetch(`calculadora_${usuario.id}`)

var pacman = await db2.fetch(`pacman_${usuario.id}`)

var traductor = await db2.fetch(`traductor_${usuario.id}`)

if(carcasas === null) {
  
  return message.channel.send((message.author == usuario) ? `Oh, se me olvidaba... Mi padre me dijo que te diera a elegir entre algunos estilos de celulares.\n\nUsa el comando ${prefix}estilos para verlos todos ^^` : 'Este usuario aún no tiene ningún celular.')
  
}
    

if(calculadora === null) {
  calculadora = 'https://images.vexels.com/media/users/3/135544/isolated/preview/23724deafa9e7ec5830d49438d3e3f9f-bot--n-colorido-m--s-a--adir-icono-by-vexels.png'
}
    

if(pacman === null) {
  pacman = 'https://images.vexels.com/media/users/3/135544/isolated/preview/23724deafa9e7ec5830d49438d3e3f9f-bot--n-colorido-m--s-a--adir-icono-by-vexels.png'
}
    
if(traductor == null) {
  traductor = 'https://images.vexels.com/media/users/3/135544/isolated/preview/23724deafa9e7ec5830d49438d3e3f9f-bot--n-colorido-m--s-a--adir-icono-by-vexels.png'
}


var readCarcasa = await Jimp.read(carcasas)
var readCalculadora = await Jimp.read(calculadora)
var readPacman = await Jimp.read(pacman)
var readTraductor = await Jimp.read(traductor)

// Apps del Sistema //

var notas = 'https://media.discordapp.net/attachments/359425464885837827/735546369615462460/oie_transparent_19.png?width=481&height=481'

var readNotas = await Jimp.read(notas)

// //

readCarcasa.resize(300, 600)
readCalculadora.resize(100, 100)
readPacman.resize(100, 100)
readTraductor.resize(100, 100)
readNotas.resize(150, 150)
    
readCarcasa.composite(readCalculadora, 5, 60)
readCarcasa.composite(readPacman, 105, 60)
readCarcasa.composite(readTraductor, 200, 60)
readCarcasa.composite(readNotas, -15, 160)
    
readCarcasa.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
  
  if(err) console.log(err)
  
  message.channel.send(new Discord.MessageAttachment(buffer, 'phone.png'))
  
})
    
  }
}