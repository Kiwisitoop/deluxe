const db2 = require('quick.db');

module.exports = {
  nombre: "setwelcome",
  alias: ["welcome", "setwel"],
  descripcion: "Este comando sirve para establecer un canal de bienvenidas.",
  run: async (client, message, args) => {
    
    if(args[0] === 'reset') {
      db2.delete(`welcomechannel_${message.guild.id}`)
      message.channel.send("Se reinició el canal de bienvenidas.")
      return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **|** No tienes los permisos suficientes para utilizar este comando.")
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      message.channel.send("Debes mencionar un canal.")
      return;
    }
    
    db2.set(`welcomechannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`El canal de bienvenidas ahora es ${channel}`)
    
  }
}