const Discord = require('discord.js');
const db = require("megadb");
let levels_db = new db.crearDB("niveles");
let cooldownniveles = new Map();
let prefix_db = new db.crearDB("prefixes");



module.exports = {
  
  nivelesFunc: async (message) => {
    
      let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "*"
  }
    
    if(cooldownniveles.has(message.guild.id+message.author.id)) {
      let cooldown = cooldownniveles.get(message.guild.id+message.author.id)
      if(Date.now() < cooldown) {
        return;
      }
    }
    
    if(!levels_db.tiene(message.guild.id)) levels_db.establecer(message.guild.id, {})
    if(!levels_db.tiene(`${message.guild.id}.${message.author.id}`)) levels_db.establecer(`${message.guild.id}.${message.author.id}`, {xp: 0, nivel: 1})
    let { xp, nivel } = await levels_db.obtener(`${message.guild.id}.${message.author.id}`)
    let randomxp = Math.floor(Math.random() * 20) + 1
    let levelup = 5 * (nivel ** 2) + 50 * nivel + 100
    
    cooldownniveles.set(message.guild.id+message.author.id, Date.now() + 10000)
    
    if((xp + randomxp) >= levelup) {
      levels_db.establecer(`${message.guild.id}.${message.author.id}`, {xp: 0, nivel: parseInt(nivel+1)})
      let embed = new Discord.MessageEmbed();
      embed.setColor("RANDOM")
      embed.setTitle("¡Felicidades!")
      embed.setThumbnail(message.author.displayAvatarURL())
      embed.setDescription(`¡${message.member} acabas de subir al nivel ${parseInt(nivel+1)}!`)
      embed.setFooter("Puedes ver tus estadísticas con " + prefix + `rank`)
      embed.setTimestamp()
      return message.channel.send(embed)
    }
    else{
      levels_db.sumar(`${message.guild.id}.${message.author.id}.xp`, randomxp)
      return;
    }
    
  },
  
  getRank: (users, message) => {
    let userlist = []
    
    for(var key in users){
      let usuario = message.guild.members.cache.has(key) ? message.guild.members.cache.get(key).user.tag : `||Salió|| (${key})`
      userlist.push([usuario, users[key].nivel, users[key].xp])
      }
    
    userlist.sort((user1, user2) => {
      return user2[1] - user1[1] || user2[2] - user1[2]
    })
    
    return userlist
  }
}

