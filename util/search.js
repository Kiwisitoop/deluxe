const Discord = require('discord.js')

module.exports = {
  nombre: "search",
  alias: ["buscar"],
  run: async(client, message, args) => {
    
const random = client.users.cache.random()
    
const buscando = new Discord.MessageEmbed()

.setTitle(`Buscando un usuario...`)
.setDescription(`Esto tardará unos segundos.`);

const esperando = await message.channel.send(buscando)
    
setTimeout(() => {
  
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`¡Usuario encontrado!`)
.setThumbnail(random.displayAvatarURL({dynamic: true}))
.setDescription(`Nombre: ${random.username}\nTag: #${random.discriminator}\nNombre completo: ${random.tag}\nID: ${random.id}`)

esperando.edit(embed)
  
}, 3000)

    
  }
}