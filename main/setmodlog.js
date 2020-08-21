let db2 = require("quick.db");


module.exports = {
  nombre: "modlog",
  alias: ["modlogs", "setmod", "setmodlogs", "setmodlog", "logs", "log"],
  descripcion: "Este comando sirve para establecer un canal de modlogs.",
  run: async (client, message, args) => {




let canal = message.mentions.channels.first();

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **|** No tienes los permisos suficientes para utilizar este comando.").then(msg => msg.delete({timeout: 5000}))


if (!canal) return message.reply("debes mencionar un canal ^^").then(msg => msg.delete({timeout: 5000}))


 db2.set(`modlogchannel_${message.guild.id}`, canal.id)


message.channel.send(`Ahora las actualizaciones irán a ${canal}`);
    

  }
}