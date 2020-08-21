const Discord = require('discord.js')
const Jimp = require('jimp')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "setestilo",
  alias: ["establecerestilo", "estiloset", "setestilos", "setphone", "phoneset", "styleset", "setcelular", "establecercelular", "setiphone", "iphoneset", "setstyle"],
  run: async (client, message, args) => {
  
    
  let prefix;
  if(prefix_db.tiene(message.guild.id)) {
    prefix = await prefix_db.obtener(message.guild.id)
  } else {
    prefix = '*'
  }
    
    
const usuario = message.author;    
    
if(!args[0]) return message.channel.send(`Debes ingresar el nombre de un estilo.\n\nPuedes ver los distintos estilos disponibles con el comando ${prefix}estilos`)
    
var colores = { 
    
"emojis": "https://cdn.discordapp.com/attachments/724713441629306944/725741072428302506/CarcasaEmojis.png",
"overwatch": "https://media.discordapp.net/attachments/724713441629306944/725790554213974047/oie_transparent.png?width=232&height=481",
"deadpool": "https://media.discordapp.net/attachments/724713441629306944/725815710902648913/oie_transparent_phixr_1.png?width=232&height=481"  
  
}
    
var carcasa = colores[args[0].toLowerCase()]


if(!carcasa) return message.channel.send(`Estilo inexistente, puedes ver los distintos tipos de estilos con el comando ${prefix}estilos`)

  

var readCarcasa = await Jimp.read(carcasa)

readCarcasa.resize(300, 600)
readCarcasa.composite(readCarcasa, 300, 600)
    
    
readCarcasa.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
  
  if(err) console.log(err)
  
  message.channel.send(`¡Así luce tu nuevo celular!`, new Discord.MessageAttachment(buffer, 'estilo.png'))
  
})

    db2.set(`carcasa_${usuario.id}`, carcasa)
    
  }
}