const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')


module.exports = {
  nombre: "color",
  alias: ["setcolor", "colorset"],
  run: async (client, message, args) => {
    
    
const usuario = message.author;        
  
let prefix;    
if(prefix_db.tiene(message.guild.id)) {
  prefix = await prefix_db.obtener(message.guild.id)
} else {
  prefix = process.env.PREFIX
}
    
if(!args[0]) {
  
  const embed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle("Paleta de colores Candy")
    .setDescription("**1 -** Morado 🟣\n\n**2 -** Amarillo 🟡\n\n**3 -** Azul 🔵\n\n**4 -** Celeste <:skyblue_circle:726985584798859315>\n\n**5 -** Marrón 🟤\n\n**6 -** Rojo 🔴\n\n**7 -** Rosado <:pink_circle:726985204417167402>\n\n**8 -** Blanco ⚪\n\n**9 -** Verde 🟢\n\n**10 -** Naranjo 🟠")
    .addField("**Nota: **", "Estos colores solo se podrán aplicar si están escritos en los siguientes idiomas: Español - Inglés")
    .setFooter(`Puedes establecer un color en tu peril con el comando ${prefix}color`)
return message.channel.send(embed)
  
}
    
if(["reset", "restart", "reiniciar"].includes(args[0].toLowerCase())) {
  db2.delete(`color_${usuario.id}`, args[0])
 return message.channel.send('El color de tu perfil ha sido reiniciado.')
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

if(!colores[args[0].toLowerCase()]) {
  return message.channel.send("El color que elegiste es inválido.")
}

    const embed = new Discord.MessageEmbed()
    .setColor(colores[args[0].toLowerCase()])
    .setDescription(`¡Así luce tu nuevo color! ¿Te gusta? ^^`)
    
    message.channel.send(embed)
    
    db2.set(`color_${usuario.id}`, args[0].toLowerCase())
    
  }
}