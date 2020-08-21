const Discord = require('discord.js');
const Jimp = require('jimp'); // JIMP


module.exports = {
  nombre: "espejo",
  alias: ["mirror"],
  descripcion: "Este comando sirve para demostrar tu amor mediante un espejo 7w7",
  run: async (client, message, args) => {
    
    let card = "https://i.pinimg.com/736x/e0/c2/15/e0c2159610d92ef3ed045cf7319bc51f.jpg"
    
    let usuario = message.mentions.users.first()
    if(!usuario) return message.channel.send("Debes mencionar a un usuario.")
    let avatar = (usuario.displayAvatarURL({format: 'png'}))
    
    
    let readAvatar = await Jimp.read(avatar)
    let readCard = await Jimp.read(card)
    
    readAvatar.resize(500, 400)
    readCard.composite(readAvatar, 50, 500)
    
    readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);
      
      message.channel.send(new
                          Discord.MessageAttachment(buffer, 'espejo.png'))
      
      
    })
    
  }
}




//https://i.pinimg.com/736x/e0/c2/15/e0c2159610d92ef3ed045cf7319bc51f.jpg