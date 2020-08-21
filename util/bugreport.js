const Discord = require('discord.js');


module.exports = {
  nombre: "bugreport",
  alias: ["bug"],
  descripcion: "Manda los bugs de Candy a un canal.",
  run: (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Nuevo bug")
    .addField("Autor:", message.author.username)
    .addField("Bug:", args.join(' '))
    .setTimestamp()
    return message.channel.send(embed)
  }
}