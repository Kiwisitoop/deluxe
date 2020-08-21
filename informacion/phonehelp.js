const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "phonehelp",
  alias: ['helpphone', "helphone", "celularhelp", "ayudacelular", "ayudaphone", "celularayuda", "helpcelular", "phoneayudahelp", "comandocelular", "celularinfo"],
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = '*'
    }
    
const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
.setDescription(`Aquí podrás solucionar algunas dudas con respecto a los comandos de la categoría **Celular** ^^\n\n${prefix}phone **|** Este comando te servirá para ver tu celular ^^\n\n${prefix}estilos **|** ¡Échale un ojo a la lista de estilos que mi padre guardó para ti!\n\n${prefix}setestilo <estilo> **|** Escoge uno de los celulares de la lista ^^\n\n${prefix}appstore **|** ¡Ve la lista de aplicaciones disponibles para instalar en tu nuevo celular!\n\n${prefix}instalar <aplicación> **|** ¡Instala una nueva aplicación!\n\n${prefix}desinstalar <aplicación> **|** ¡Desinstala la aplicación seleccionada!\n\n${prefix}usar <aplicación> <modo de uso> **|** Este comando sirve para utilizar la aplicación seleccionada. Puedes ver más información acerca de esa aplicación usando solo el comando y nombre de la aplicación.\n\n¡Ya sería todo!`)
.setFooter(`Si tienes más dudas y/o sugerencias, háznoslas saber en nuestro servidor de soporte (${prefix}invite).`)
   
message.channel.send(embed)

  }
}