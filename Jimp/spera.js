const Jimp = require('jimp')
const Discord = require('discord.js')

module.exports = {
  nombre: "lop",
  alias: [],
  run: async (client, message, args) => {
    
    const card = 'https://image.freepik.com/foto-gratis/fondo-pared-cemento-azul-oscuro-sala-exposicion-vacia-presentar-producto_28629-1269.jpg'
    const emojis = 'https://cdn.discordapp.com/attachments/724713441629306944/725741072428302506/CarcasaEmojis.png'
    const overwatch = 'https://media.discordapp.net/attachments/724713441629306944/725790554213974047/oie_transparent.png?width=232&height=481' 
    const deadpool = 'https://media.discordapp.net/attachments/724713441629306944/725815710902648913/oie_transparent_phixr_1.png?width=232&height=481'
    
    let font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
    
    const readCard = await Jimp.read(card)
    const readEmojis = await Jimp.read(emojis)
    const readOverwatch = await Jimp.read(overwatch)
    const readDeadpool = await Jimp.read(deadpool)
    
    readCard.resize(626, 626)
    readEmojis.resize(135, 270)
    readOverwatch.resize(135, 270)
    readDeadpool.resize(135, 270)
    
    readCard.print(font32, 230, 300, 'Overwatch')
    readCard.print(font32, 80, 300, 'Emojis')
    readCard.print(font32, 420, 300, 'Deadpool')
    
    readCard.composite(readDeadpool, 420, 20)
    readCard.composite(readOverwatch, 240, 20)
    readCard.composite(readEmojis, 60, 20)
    
    readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      
      if(err) console.log(err)
      
      message.channel.send(new Discord.MessageAttachment(buffer, 'lop.png'))
      
    })
    
  }
}