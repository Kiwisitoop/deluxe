const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "profile",
  alias: ["perfil", "profil", "perfile"],
  run: async (client, message, args) => {
    
    
let prefix;

if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = "*"
}
    
   const usuario = message.mentions.users.first() || message.author;
    
    var coins = await db2.fetch(`coins_${usuario.id}`)
    
    var candys = await db2.fetch(`candys_${usuario.id}`)
    
    var color = await db2.fetch(`color_${usuario.id}`, args[0])
    
    var descripcion = await db2.fetch(`profdesc_${usuario.id}`, args.join(' '))
    
    var bank = await db2.fetch(`bank_${usuario.id}`)
    
    var calculadora = await db2.fetch(`calculadora_${usuario.id}`)

    var pacman = await db2.fetch(`pacman_${usuario.id}`)
    
    var traductor = await db2.fetch(`traductor_${usuario.id}`)
    
    
    if(coins == null) {
      coins = '0'
    }
    
    if(candys == null) {
      candys = '0'
    }
    
    if(descripcion == null) {
      descripcion = `Este usuario aún no ha definido su descripción personalizada. Puedes establecer una con el comando ${prefix}descripcion`
    }
    
    if(bank == null) {
      bank = '0'
    }
    
    
var colores = { 
    
"morado": "0x8927C4", "púrpura": "0x8927C4", "purpura": "0x8927C4", "purple": "0x8927C4",
"amarillo": "0xF0FF00", "yellow": "0xF0FF00", 
"azul": "0x0049FF", "blue": "0x0049FF", 
"celeste": "0x00FFFF", "sky_blue": "0x00FFFF", "skyblue": "0x00FFFF",
"marrón": '0x884E00', "café": '0x884E00', "cafe": '0x884E00', "marron": "0x884E00", "brown": "0x884E00", 
"rojo": "0xFF0000", "red": '0xFF0000', 
"negro": "0x0B0B0A", "black": "0x0B0B0A", 
"rosado": "0xFF6EBA", "rosa": "0xFF6EBA", "pink": "0xFF6EBA", 
"blanco": "0xFFFEFF", "white": "0xFFFEFF", 
"verde": "0x83FF00", "green": "0x83FF00",
"naranjo": "0xFF9300", "naranja": "0xFF9300", "orange": "0xFF9300", 

}
    
if(!colores[color]) {
  color = message.guild.member(usuario).displayHexColor 
}
    
if(calculadora == null) {
  calculadora = ''
} else {
  calculadora = '<:calculadora:726637593088753715>'
}
    
if(pacman == null) {
  pacman = ''
} else {
  pacman = '<:pacman:727335360115507301>'
}

  if(traductor == null) {
    traductor = ''
  } else {
    traductor = '<:traductor:727570796800770220>'
  }
    
    
    const embed = new Discord.MessageEmbed()
    
    .setTitle(usuario.username)
    .setColor(colores[color] || color)
    .setThumbnail(usuario.displayAvatarURL({format: 'png'}))
    .setDescription(`Coins: ${coins}${process.env.MONEDA}\nBanco: ${bank}${process.env.BANCO}\nCaramelos: ${candys}${process.env.CANDY}\n\nApps:\n${calculadora}${pacman}${traductor}` + `\n\nDescripción:\n` + descripcion)
    
    message.channel.send(embed)
    
  }
}