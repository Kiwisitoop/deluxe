const Discord = require('discord.js');


module.exports = {
  nombre: "androidw",
  alias: ["wandroid", "androidwallpaper", "wallpaperandroid", "fondoandroid", "androidfondo"],
  descripcion: "Este comando sirve para mostrar wallpapers de Android.",
  run: (client, message, args) => {
    
    const Androidwallpapers = ["https://i.pinimg.com/originals/81/f8/ea/81f8eaed1c29c1053cdd4b16079c59dc.png", "https://www.ecopetit.cat/wpic/mpic/188-1882895_war-of-the-planet-of-the-apes.jpg"]
    const aleatorio = Math.floor(Math.random()*(Androidwallpapers.length))
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Wallpaper Android")
    .setDescription("Hola, comando en desarrollo.")
    .setImage(Androidwallpapers[aleatorio])
    return message.channel.send(embed)
  }
  
}