const Discord = require('discord.js')
const math = require("math-expression-evaluator")
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')
const game = require("pacman-djs")
const translator = require("yandex-translate-api")("trnsl.1.1.20200601T143158Z.8c9f418886aaf252.347de09bc474f25178a18c5bacb4344f031cae7b")


module.exports = {
  nombre: "usar",
  alias: ["use", "daruso", "usodar", "iniciar"],
  run: async (client, message, args) => {
    
    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = '*'
    }
    
const usuario = message.author;    
    
if(!db2.has(`carcasa_${usuario.id}`)) {
  
  return message.channel.send(`Oh, se me olvidaba... Mi padre me dijo que te diera a elegir entre algunos estilos de celulares.\n\nUsa el comando ${prefix}estilos para verlos todos ^^`)
  
}
    
var apps = {
  
"calculadora": 'https://media.discordapp.net/attachments/359425464885837827/726482904401838150/oie_W06GZKxjc7O0.png?width=481&height=481',
"pacman": 'https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402',"pac-man": "https://media.discordapp.net/attachments/724713441629306944/726852286206181728/oie_transparent_8.png?width=536&height=402",
"traductor": 'https://media.discordapp.net/attachments/724713441629306944/727547911717781565/oie_TP6SrZ0WMLTv.png?width=174&height=188',
"notas": 'https://media.discordapp.net/attachments/359425464885837827/735546369615462460/oie_transparent_19.png?width=481&height=481'  
  
}

    
if(!args[0]) return message.channel.send(`Selecciona una aplicación para utilizarla.`)
    
if(!apps[args[0].toLowerCase()]) return message.channel.send(`Esta aplicación no existe.`)
    
if(args[0].toLowerCase() === 'calculadora') {
  
if(!db2.has(`calculadora_${usuario.id}`)) {
    return message.channel.send(`No tienes esta aplicación instalada en tu celular.\n\nUsa el comando ${prefix}appstore para ver todas las aplicaciones disponibles ^^`)
  } else {
  
  const embedhc = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`¡Usando apps!`)
    .setDescription(`Esta aplicación sirve para hacer cálculos matemáticos ^^\n\nPuedes usar las siguientes expresiones: * / + -\n\nModo de uso: ${prefix}usar calculadora <ecuación>`)
  
  if (!args[1]) return message.channel.send(embedhc)
    
  
let resultado;
  try {
    resultado = math.eval(args.slice(1).join(" ")) // El Args toma el calculo
  } catch (e) {
    resultado = "Entrada inválida."; // Cuando es incorrecta
  }
  
    const embedcalc = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Calculadora")
    .setThumbnail('https://media.discordapp.net/attachments/724713441629306944/726638031066497124/calculadora_1.png?width=481&height=481')
    .setDescription(`Entrada: ${args.slice(1).join(" ")}\n\nSalida: ${resultado}`, false) // Te da el calculo
    .setFooter(`¡Todos tus dudas matemáticas resueltas en segundos!`)
    
  return message.channel.send(embedcalc)
             }
          }
    

else if(['pacman', 'pac-man'].includes(args[0].toLowerCase())) {
  
  
if(!db2.has(`pacman_${usuario.id}`)) {
    return message.channel.send(`No tienes esta aplicación instalada en tu celular.\n\nUsa el comando ${prefix}appstore para ver todas las aplicaciones disponibles ^^`)
  } else {
      
    
  let mapa = [
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣",
  "▣▩◇◇◇▩▩▩ᗣ▩▩▩◇◇◇▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣◇▩▩▩▩▩▩ᗣ▩▩▩▩▩▩◇▣",
  "▣◇▩▩▩▩▩▩▩▩▩▩▩▩▩◇▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩◇◇◇▩▩▩ᗧ▩▩▩◇◇◇▩▣",
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣"
]
  
  let start = new game.PacGame(mapa, 3, {
  win_text: message.author.username + ", ganaste!",
  to_lose_text: "¡" + message.author.username + ", perdiste!",
  time_out_text: "¡Se acabó el tiempo!",
  coin_points: 20,
  coin_text: "🟡",
  time_text: "⏲"
   })
 
start.start_game(message)
    
start.on("end", (type, monedas, tiempo) => {

 if(type == "ghost") {
    //haz algo
  }
  else if(type == "player") {
    //haz algo
  }
  else if(type == "time") {
    //haz algo
  }
  else if(type == "error") {
    //haz algo
  
             }
         })
       }
     }
    
else if(args[0].toLowerCase() === 'traductor') {
  
  if(!db2.has(`traductor_${usuario.id}`)) {
    return message.channel.send(`No tienes esta aplicación instalada en tu celular.\n\nUsa el comando ${prefix}appstore para ver todas las aplicaciones disponibles ^^`)
  } else {
    
 let sep = args.slice(1).join(" ").split("/")
if(!sep[0, 1]) return message.channel.send(`Necesitas ingresar el idioma al cual se traducirá tu mensaje, ejemplo: **en/Hola mundo**`)
let lang = sep[0]
let msg = sep.slice(1).join(' ')

translator.translate(msg, { to: lang}, function(err, res) {
  if(err) return message.channel.send(err)
  
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Traductor`)
.setThumbnail('https://media.discordapp.net/attachments/724713441629306944/727547911717781565/oie_TP6SrZ0WMLTv.png?width=174&height=188')
.addField(`Texto a traducir:`, `> ${sep[1]}`)
.addField(`Traducción:`, `> ${res.text || `Ha ocurrido un error. Estamos intentando solucionar este tipo de problemas, disculpe las molestias.`}`)
.setFooter(`Aplicación en versión Beta. No todas las traducciones serán precisas ^^`)

return message.channel.send(embed)
  
})
}     
  
}     
    
else if(args[0].toLowerCase() === 'notas') {
  
if(!args[1]) {
  
  var nota1 = await db2.fetch(`nota1_${usuario.id}`)
  var nota2 = await db2.fetch(`nota2_${usuario.id}`)
  var nota3 = await db2.fetch(`nota3_${usuario.id}`)
  var nota4 = await db2.fetch(`nota4_${usuario.id}`)
  var nota5 = await db2.fetch(`nota5_${usuario.id}`)
  var nota6 = await db2.fetch(`nota6_${usuario.id}`)
  var nota7 = await db2.fetch(`nota7_${usuario.id}`)
  var nota8 = await db2.fetch(`nota8_${usuario.id}`)
  var nota9 = await db2.fetch(`nota9_${usuario.id}`) 
  var nota10 = await db2.fetch(`nota10_${usuario.id}`)
  
  if(nota1 == null) {
    nota1 = ''
  }
  
  if(nota2 == null) {
    nota2 = ''
  }
  
  if(nota3 == null) {
    nota3 = ''
  }
  
  if(nota4 == null) {
    nota4 = ''
  }
  
  if(nota5 == null) {
    nota5 = ''
  }
  
  if(nota6 == null) {
    nota6 = ''
  }
  
  if(nota7 == null) {
    nota7 = ''
  }
  
  if(nota8 == null) {
    nota8 = ''
  }
  
  if(nota9 == null) {
    nota9 = ''
  }
  
  if(nota10 == null) {
    nota10 = ''
  }
  
  const noargs = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`Notas de ${usuario.username}`)
  .setDescription(`1 **-** ${nota1}\n\n2 **-** ${nota2}\n\n3 **-** ${nota3}\n\n4 **-** ${nota4}\n\n5 **-** ${nota5}\n\n6 **-** ${nota6}\n\n7 **-** ${nota7}\n\n8 **-** ${nota8}\n\n9 **-** ${nota9}\n\n10 **-** ${nota10}`)
  
  return message.channel.send(noargs)
  
}  
  
if(!['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(args[1])) return message.channel.send(`El número de nota es inválido.`)
    
if(isNaN(args[1])) return message.channel.send(`El número de nota es inválido.`)
  
if(!args[2]) return message.channel.send(`Debes ingresar una nota.`)
  
    
if(args[1] == '1') {
 
  const embed1 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota1_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed1)
  
}
    
else if(args[1] == '2') {
  
  const embed2 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota2_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed2)
  
}
    
 else if(args[1] == '3') {
  
  const embed3 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota3_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed3)
   
}   
 
 else if(args[1] == '4') {
  
  const embed4 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota4_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed4)
   
}
    
else if(args[1] == '5') {
  
  const embed5 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota5_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed5)
   
}
    
 else if(args[1] == '6') {
  
  const embed6 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota6_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed6)
   
}    
    
 else if(args[1] == '7') {
  
  const embed7 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota7_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed7)
   
}
    
 else if(args[1] == '8') {
  
  const embed8 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota8_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed8)
   
}    
    
 else if(args[1] == '9') {
  
  const embed9 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota9_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed9)
   
}    
    
 else if(args[1] == '10') {
  
  const embed10 = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(`¡Nueva nota!`)
  .setDescription(args.slice(2).join(' '))
  
  db2.set(`nota10_${usuario.id}`, args.slice(2).join(' '))
  
  return message.channel.send(embed10)
   
    }
  
}
    
   }
}
