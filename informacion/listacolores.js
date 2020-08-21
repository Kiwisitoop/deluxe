const Discord = require('discord.js');
const db = require('megadb');
const prefix_db = new db.crearDB('prefixes');

module.exports = {
  nombre: "colorlist",
  alias: ["listacolor", "colores", "colors", "colorlista", "coloreslista", "listacolores"],
  run: async (client, message, args) => {
    

    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = process.env.PREFIX
    }
    
    
    const embed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle("Paleta de colores Candy")
    .setDescription("**1 -** Morado 🟣\n\n**2 -** Amarillo 🟡\n\n**3 -** Azul 🔵\n\n**4 -** Celeste <:skyblue_circle:726985584798859315>\n\n**5 -** Marrón 🟤\n\n**6 -** Rojo 🔴\n\n**7 -** Rosado <:pink_circle:726985204417167402>\n\n**8 -** Blanco ⚪\n\n**9 -** Verde 🟢\n\n**10 -** Naranjo 🟠")
    .addField("**Nota: **", "Estos colores solo se podrán aplicar si están escritos en los siguientes idiomas: Español - Inglés")
    .setFooter(`Puedes establecer un color en tu peril con el comando ${prefix}color`)
    message.channel.send(embed)
    }
}
