const Discord = require('discord.js');

module.exports = {
  nombre: "emojis",
  alias: ["listemojis", "listemoji", "emojilista", "listaemoji", "emojislist", "emojilista"],
  descripcion: "Este comando muestra los emojis de un servidor.",
  run: async (client, message, args) => {
    
    let fullN = message.guild.emojis.cache.size;
    
    if (fullN < 1) return message.channel.send(':x: **|** Este servidor no tiene emojis.');
    
    let commonN = message.guild.emojis.cache.filter(e => !e.animated && (e.roles.cache.size >= 1 ? e.roles.cache.intersect(message.guild.me.roles.cache).size >= 1 : true)).size;
    
    let animatedN = message.guild.emojis.cache.filter(e => e.animated && (e.roles.cache.size >= 1 ? e.roles.cache.intersect(message.guild.me.roles.cache).size >= 1 : true)).size;
    
    let cantuse = message.guild.emojis.cache.filter(e => e.roles.cache.size >= 1 ? e.roles.cache.intersect(message.guild.me.roles.cache).size < 1 : false).size;
    
    let atext = message.guild.emojis.cache.filter(e => e.animated && (e.roles.cache.size >= 1 ? e.roles.cache.intersect(message.guild.me.roles.cache).size >= 1 : true)).map(e => e.toString()).join(" ");
    
    let ntext = message.guild.emojis.cache.filter(e => !e.animated && (e.roles.cache.size >= 1 ? e.roles.cache.intersect(message.guild.me.roles.cache).size >= 1 : true)).map(e => e.toString()).join(" ");
    
    let ctext = message.guild.emojis.cache.filter(e => e.roles.cache.size >= 1 ? e.roles.cache.intersect(message.guild.me.roles.cache).size < 1 : false).map(e => e.name).join(", ");
    
    let realtext = "";
    
    let a = false;
    let n = false;
    
    if (animatedN > 0) {
      a = true;
      realtext += `**Animado (${animatedN}): ** ${atext}`
    }
    
    if (commonN > 0) {
      n = true;
      if(a) realtext += `\n\n**Común (${commonN}): ** ${ntext}`
      else realtext += `**Común (${commonN}): ** ${ntext}`
    }
    
    if (cantuse > 0) {
      if(n) realtext += `\n\n**No puedo utilizar (${cantuse}): ** ${ctext}`
      else realtext += `**No puedo utilizar (${cantuse}): ** ${ctext}`
    }
    
    message.channel.send(realtext, { split: { char: " " } });
  }
}