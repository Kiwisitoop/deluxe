const Discord = require('discord.js')
const Jimp = require('jimp')

module.exports = {
  nombre: "png",
  alias: ["convertir", "aplicar", "transformar"],
  run: async (client, message, args) => {

try {    

if(message.author.bot) return;

if(!args.join(' ')) {

const noargs = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("¿Necesitas ayuda?")
.setDescription('Debes escribir la URL de una imagen para poner tu avatar en ella.\n\nEjemplo de uso:')
.setImage('https://cdn.discordapp.com/attachments/724713441629306944/725685932891570276/unknown.png')
.setFooter(`¡Envíanos tus mejores resultados a nuestras redes sociales y estarás participando por futuros premios!`)

return message.channel.send(noargs)

}
  
let maskCircular = args.join(' ')


const usuario = message.mentions.users.first() || message.author;
const avatar = usuario.displayAvatarURL({format: 'png'})

let readMask = await Jimp.read(maskCircular)
let readAvatar = await Jimp.read(avatar)

    readMask.resize(200, 200)
    readAvatar.resize(200, 200).mask(readMask, 0, 0)
    
    readAvatar.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err)
      
      message.channel.send(new Discord.MessageAttachment(buffer, "profile.png"))
    })
  
  message.delete()
    
} catch (error) {
  message.channel.send(`URL inválida.`).then(msg => msg.delete({timeout: 10000}))
}
  
  }
}