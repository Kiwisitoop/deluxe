const Discord = require('discord.js');
const Jimp = require('jimp'); // JIMP

module.exports = {
  nombre: "dios",
  alias: ["grande", "jesus"],
  descripcion: "Este comando te hace ver como el dios de todos.",
  run: async (client, message, args) => {
   
    
   let card = "https://diimg.glitch.me/image/diimg1591575892995-68.png"
   let maskCircular = "https://diimg.glitch.me/image/diimg1590143591425-70.png"
   
   let usuario = message.mentions.users.first() || message.author;
   let avatar = (usuario.displayAvatarURL({format: "png"})); 
    
    
    let readMask = await Jimp.read(maskCircular);
    let readAvatar = await Jimp.read(avatar); 
    let readCard = await Jimp.read(card);
    
    readMask.resize(150, 150)  
    readAvatar.resize(150, 150).mask(readMask, 0, 0);
    readCard.resize(500, 450)
    readCard.composite(readAvatar, 170, 50)
    
    
    
    readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);
    
            message.channel.send(new
      Discord.MessageAttachment(buffer, "dios.png"))
    })
   }
  }


