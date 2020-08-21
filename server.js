const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

//CUIDAR//

const Discord = require('discord.js'); // Discord JS.
const { Client, MessageEmbed, MessageAttachment } = require("discord.js"); // Definimos Client con c mayúscula xd.
const client = new Client(); // Definimos Client.
const { nivelesFunc, getRank } = require('./niveles.js'); // Esta constante exporta funciones de niveles.js.
const Jimp = require('jimp'); // JIMP
const cooldown = require('./cooldown.js'); // Esta constante es para exportar cooldown.js.
const config = require('./config.json') // Esta constante es para exportar config.json.
const moment = require("moment"); // Este npm es para definir moment.
const db = require("megadb"); // Este npm es para database.
const math = require("math-expression-evaluator"); // Este NPM es con el que se podrán hacer los calculos
var Weez = require("weez"); 
var weez = new Weez.WeezAPI("VFyAwIDKtRYrG8UF1zPKwgJxD4FYEl78ca01"); 
const translator = require("yandex-translate-api")("trnsl.1.1.20200601T143158Z.8c9f418886aaf252.347de09bc474f25178a18c5bacb4344f031cae7b");
const superagent = require('superagent'); //Se tiene que instalar superagent.
const ecoldown = require('./ecoldown.js');
const fs = require('fs');
const db2 = require('quick.db');
const { getPokemon } = require('./poke/pokemon');






    function T_convertor(ms) {      
      let años = Math.floor((ms) / (1000 * 60 * 60 * 24 * 365));
      let meses = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      let dias = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let horas = Math.floor(((ms) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutos = Math.floor(((ms) % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor(((ms) % (1000 * 60)) / 1000);


      let final = ""
      if(años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `
      if(meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `
      if(dias > 0) final += dias > 1 ? `${dias} días, ` : `${dias} día, `
      if(horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `
      if(minutos > 0) final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `
      if(segundos > 0) final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`
      return final
  }








var snipe_db = new db.crearDB("snipe");


let levels_db = new db.crearDB("niveles");

let prefix_db = new db.crearDB("prefixes");

var monedas_db = new db.crearDB("monedas");









client.comandos = new Discord.Collection()


let utiles = fs.readdirSync("./util").filter((f) => f.endsWith(".js"))

for(var archi of utiles) {
    let comando = require("./util/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}

let main = fs.readdirSync("./main").filter((f) => f.endsWith(".js"))

for(var archi of main) {
    let comando = require("./main/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}


let submain = fs.readdirSync("./submain").filter((f) => f.endsWith(".js"))

for(var archi of submain) {
    let comando = require("./submain/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}


let cjimp = fs.readdirSync("./Jimp").filter((f) => f.endsWith(".js"))

for(var archi of cjimp) {
    let comando = require("./Jimp/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}


let moderacion = fs.readdirSync("./moderacion").filter((f) => f.endsWith(".js"))

for(var archi of moderacion) {
    let comando = require("./moderacion/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}

let special = fs.readdirSync("./special-commands").filter((f) => f.endsWith(".js"))

for(var archi of special) {
    let comando = require("./special-commands/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}

let informacion = fs.readdirSync("./informacion").filter((f) => f.endsWith(".js"))

for(var archi of informacion) {
    let comando = require("./informacion/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}

let celular = fs.readdirSync("./celular").filter((f) => f.endsWith(".js"))

for(var archi of celular) {
    let comando = require("./celular/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}


let owner = fs.readdirSync("./owner").filter((f) => f.endsWith(".js"))

for(var archi of owner) {
    let comando = require("./owner/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}


let economia = fs.readdirSync("./economia").filter((f) => f.endsWith(".js"))

for(var archi of economia) {
    let comando = require("./economia/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}

let appstore = fs.readdirSync("./economia/appstore").filter((f) => f.endsWith(".js"))

for(var archi of appstore) {
    let comando = require("./economia/appstore/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}


let vip = fs.readdirSync("./VIP").filter((f) => f.endsWith(".js"))

for(var archi of vip) {
    let comando = require("./VIP/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi + (" fue cargado correctamente."))
}





let maskCircular = "https://diimg.glitch.me/image/diimg1590143591425-70.png"

// Evento READY y presencia de Candy

client.on("ready", async () => {
  snipe_db.purgeall() 
  setInterval(function() {
  var estados = ['"Viajando por las profundidades de *help". ¿Quieres acompañarme? ^-^', "¿Te gustan los dulces? ^o^", "¿Ya probaste con *redes? °-°", `${client.guilds.cache.size} SERVIDORES y ${client.users.cache.size} USUARIOS <3`]
  let estado = estados[Math.floor(estados.length * Math.random())];
  var types = ["PLAYING", "LISTENING", "WATCHING"]
  var typerandom = types[Math.floor(types.length * Math.random())];
    
  client.user.setPresence({
      status: "online",
      activity: {
        name: estado,
        type: typerandom,
      }
    })
 }, 120000);
  console.log("¡Estoy Lista!")
});

function tamanioTexto(font, text){
  let x = 0;
  for(let i = 0; i < text.length; i++){
    if(font.chars[text[i]]){
      x += font.chars[text[i]].xoffset
      + (font.kernings[text[i]] && font.kernings[text[i]][text[i + 1]] ? font.kernings[text[i]][text[i + 1]] : 0)
       + (font.chars[text[i]].xadvance || 0);
    }
  }
  
  return x;
  
};



client.on('guildMemberAdd', member => {

  
  
let chx = db2.get(`welcomechannel_${member.guild.id}`);
    
const wCanal = client.channels.cache.get(chx)

if(!wCanal) return;
  
  wCanal.send(`️️️☑️ ¡Bienvenido al servidor ${member}! ^^`)
});





client.on('guildMemberRemove', member => {
  
  const Ebye = ["<:gato_con_corazon:692003598292221982>", "<:Triste:694729125709086760>", "<:F_en_el_chat:691997693668622396>"]
  const aleatorio = Math.floor(Math.random()*(Ebye.length))
  
  const Canal = member.guild.channels.cache.get("716394347414683673")
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`¡Alguien ha abandonado el servidor!`)
  .setThumbnail(member.user.displayAvatarURL())
  .setDescription( "<@" + member.user.id + ">" + ", esperamos verte nuevamente por aquí " + Ebye[aleatorio])
  .setFooter("¡Te extrañaremos!")
  Canal.send(embed)
});






client.on("message", message => {
  if(message.author.bot) return;
  
      if (message.channel.type == "dm") {
  
        const ID = client.users.cache.get("461642640472014849")
        
        let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setTitle("MD de Candy")
        embed.setThumbnail(message.author.displayAvatarURL())
        embed.addField(`Enviado por:`, `<@${message.author.id}>`)
        embed.addField(`Mensaje:`, message.content)
        embed.setTimestamp()

     ID.send(embed)
   }
});



client.on("message", async message => {
  
  if(message.author.bot) return;
  
  let usuario = message.mentions.members.first() || message.member;
    
  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "*"
  }
  
  
  
   let Mention = new RegExp(`^<@!?${client.user.id}>( |)$`);

  if (message.content.match(Mention)) {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Pequeño cuartito de información ^^`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`¿Te puedo acompañar?\n[¡Invítame! <:yes:727672266942316564>](https://discord.com/oauth2/authorize?client_id=698632594765643857&scope=bot&permissions=2146958847)\n\nRedes:\n[Twitter](https://twitter.com/Candy71443742) **|** [Instagram](https://www.instagram.com/CandyBot_Official/)\n\n**Mi prefix en este servidor:** ${prefix}\n\nEstoy en ${client.guilds.cache.size} servidores y ${client.users.cache.size} usuarios.`)
  return message.channel.send(embed)

  }
  
  if(!message.content.startsWith(prefix)) {
    nivelesFunc(message)
    return;
  }

if(cooldown.Verificar(message.guild.id, message.author.id)) {
   message.delete()
    return message.reply("debes esperar 2 segundos para usar otro comando.").then(msg => msg.delete({timeout: 5000}))
}
  
cooldown.Agregar(message.guild.id, message.author.id)
  
   
  let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

  let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))
if(cmd) {
    return cmd.run(client, message, args)
}
  

  if(['botinfo', 'bot', 'candy', 'infobot', 'candyinfo', 'infocandy'].includes(command)) {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Pequeño cuartito de información ^^`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`¿Te puedo acompañar? ^^\n[¡Invítame!](https://discord.com/oauth2/authorize?client_id=698632594765643857&scope=bot&permissions=2146958847)\n\nRedes:\n[Twitter](https://twitter.com/Candy71443742) **|** [Instagram](https://www.instagram.com/CandyBot_Official/)\n\n**Mi prefix en este servidor:** ${prefix}\n\nEstoy en ${client.guilds.cache.size} servidores y ${client.users.cache.size} usuarios.`)
  return message.channel.send(embed)

  }
  
  
  if(command === "pokemon") {

try {
    
if(!args[0]) return message.channel.send(`Debes ingresar el nombre de un Pokémon.`)
    
    const pokemon = message.content.toLowerCase().split(" ")[1];
    const pokeData = await getPokemon(pokemon);
    const { sprites, stats, weight, name, id, base_experience, abilities, types, held_items } = pokeData;
    const embed = new Discord.MessageEmbed()
    .setAuthor("Pokédex", "https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png")
    embed.setColor("RANDOM")
    embed.setTitle(`${name} #${id}`)
    embed.setImage(`${sprites.front_default}`);
    stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat, true));
    types.forEach(type => embed.addField("Tipo(s)", type.type.name, true));
    embed.addField('Peso', weight, true);
    embed.addField('Experiencia base', base_experience);
    embed.setFooter("Comando en desarrollo.")
    message.channel.send(embed)

  } catch (err) {
    
return message.channel.send('¡Ha ocurrido un error! Este comando está en desarrollo, por lo que este tipo de errores es normal ahora mismo.\n\nPosibles errores y/o soluciones:\n1 **-** Este Pokémon no existe.\n2 **-** Escribe el nombre del Pokémon sin espacios.\n3 **-** Algunos Pokémones aún no están disponibles, prueba con otro.')
    
}  
  
  }   
  
  if(command === "8ball"){
    let user8 = message.author;
    if(!args[0]) return message.reply("pregúntame algo ^w^").then(msg => msg.delete({timeout: 5000}))
    var Mensajes = ["Si", "Puede ser...", "No", "¡Por supuesto!", "¿Por qué la pregunta?", "¿Por qué no?", "Tal vez...", "Quizás en un tiempo...", "No sabría decirte", "¡Definitivamente!"]
    var aleatorio = Math.floor(Math.random()*(Mensajes.length))
    
    let embed = new Discord.MessageEmbed()
    .setColor("0xFFFCFC")
    .setTitle(":8ball: 8Ball")
    .addField(`${user8.username} pregunta:`, args.join(' '))
    .addField("Respuesta:", Mensajes[aleatorio])
    message.channel.send(embed)
  }
  if(command === "prefix"){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes los permisos necesarios.")
    const prefijop = args.join(' ')
    if(!prefijop[0]) return message.channel.send("Debes escoger un prefix.")
    const embedprefijop = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("¡ERROR!")
    .setDescription("El prefix que escogiste es demasiado largo.")
    .setThumbnail("https://media1.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif?cid=ecf05e47284bd432dbce9a93b300c353974e485bb6f9539e&rid=giphy.gif")
    .setFooter("Si crees que esto es un error, repórtalo en nuestras redes sociales.")
    
    if(prefijop.length > 3) return message.channel.send(embedprefijop)
    
    const embedigual = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("¡ERROR!")
    .setDescription("El prefix que escogiste es el mismo que está actualmente.")
    .setThumbnail("https://media1.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif?cid=ecf05e47284bd432dbce9a93b300c353974e485bb6f9539e&rid=giphy.gif")
    .setFooter("Prueba con otro prefix.")
    
    if(prefijop == prefix) return message.channel.send(embedigual)
    
    prefix_db.establecer(`${message.guild.id}`, args[0])
    const embedprefix = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Mi prefix acaba de ser cambiado a **" + args[0] + "**")
    return message.channel.send(embedprefix)
  }  
  
  
  if(command === "rank"){
   
   let usuarios = getRank(await levels_db.obtener(message.guild.id), message)
    
    if(!levels_db.tiene(`${message.guild.id}`)) return message.channel.send("¡Este servidor no tiene ningún usuario en el Ranklist!")
    let usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if(!levels_db.tiene(`${message.guild.id}.${usuario.id}`)) return message.channel.send("Este usuario no cuenta con XP ni Nivel.")
    
    const card = 'https://media.discordapp.net/attachments/724713441629306944/727318651543486584/oie_qECaaH2ci5P0.png?width=682&height=338'
    const avatar = usuario.user.displayAvatarURL({format: 'png'})
    const font64 = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE)
    const hand = 'https://media.discordapp.net/attachments/724713441629306944/727315443702038578/oie_transparent_9.png?width=682&height=381'
    const moderncircle = 'https://media.discordapp.net/attachments/724713441629306944/727322344904982609/oie_transparent_12.png?width=419&height=419'
    const mask = 'https://i.ya-webdesign.com/images/circulo-blanco-png-1.png'
    let rank = usuarios.findIndex(x => x = usuarios) + 1
    
    const readCard = await Jimp.read(card)
    const readModerncircle = await Jimp.read(moderncircle)
    const readAvatar = await Jimp.read(avatar)
    const readMask = await Jimp.read(mask)
    
    let { xp, nivel } = await levels_db.obtener(`${message.guild.id}.${usuario.id}`)
    
    let levelup = 5 * (nivel ** 2) + 50 * nivel + 100
    
    readCard.resize(1018, 504)
    readMask.resize(200, 200)
    readAvatar.resize(200, 200).mask(readMask, 0, 0)
    readCard.print(font64, 20, 30, `Estadísticas de ${usuario.user.username}`)
    readCard.print(font64, 20, 120, `Nivel: ${nivel}`)
    readCard.print(font64, 20, 210, `XP: ${xp}/${levelup}`)
    readCard.print(font64, 50, 310, `Rank: #${rank}`)
    readCard.composite(readModerncircle, 615, 100)
    readCard.composite(readAvatar, 725, 210)
    
    readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) console.log(err)
      
      message.channel.send(new Discord.MessageAttachment(buffer, 'rank.png'))
      
    })
  }
  
  
  if(command === "ranklist"){
    if(!levels_db.tiene(`${message.guild.id}`)) return message.channel.send("¡Este servidor no tiene ningún usuario en el Ranklist!")
    
    let usuarios = getRank(await levels_db.obtener(message.guild.id), message)
    usuarios.map((usuario, index) => usuarios[index] = `**[${index+1}]** ${usuario[0]} **|** Nivel: ${usuario[1]} **|** XP: ${usuario[2]}/${5 * (usuario[1] ** 2) + 50 * usuario[1] + 100}\n`)
    
    let paginas = []
    let cantidad = 5
    while(usuarios.length > 0) {
      paginas.push(usuarios.splice(0, cantidad))
    }
    
    let embed = new Discord.MessageEmbed()
    embed.setColor("RANDOM")
    embed.setThumbnail(message.guild.iconURL())
    
    
    
    if(!args[0]) {
      embed.setTitle("Ranklist")
      embed.setDescription(`Ranklist del servidor **${message.guild.name}**\n\n${paginas[0].join("\n")}`)
      embed.setFooter(`(Página 1 de ${paginas.length})`)
    return message.channel.send(embed)
  }
    
    if(isNaN(args[0])) return message.channel.send("Necesitas ingresar un número de página.")
    let seleccion = parseInt(args[0])
    
    if(seleccion <= 0 || seleccion > paginas.length) return message.channel.send(`La página ${seleccion} no existe.`)
    
    embed.setTitle("Ranklist")
    embed.setDescription(`Ranklist del servidor ${message.guild.name}\n\n${paginas[seleccion-1].join("\n")}`)
    embed.setFooter(`(Pagina ${seleccion} de ${paginas.length})`)
    return message.channel.send(embed)
  }
  
     if(command === "say"){
       if(!args[0]) return message.channel.send("Dime algo <:Abrigaodepana:703687094723149878>").then(msg => msg.delete({timeout: 5000}))
       message.channel.send(args.join(' '))
       message.delete();
     }
  
  
    if(["userinfo", "user", "usuario", "usuarioinfo", "infouser"].includes(command)) {
                        let estados = {
                          "online": "<a:Online:716755786792960041> Conectado",
                          "offline": "<a:Desconectado:716771370041737306> Desconectado",
                          "idle": "<a:Ausente:716760721941200939> Ausente",
                          "dnd": "<a:NoMolestar:716753423248392192> No molestar",
                          "live": "<a:Transmitiendo:716771347686096896> Transmitiendo"
                        }
                        
                        
                        let usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
                        let embeduserinfo = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`Información de **${usuario.user.username}**`, true)
                        .setThumbnail(usuario.user.displayAvatarURL(), true)
                        .addField("Nombre completo", `**${usuario.user.tag}**`, true)
                        .addField(`ID`, `${usuario.id}`, true)
                        .addField(`Estado`, `${estados[usuario.presence.status]}`)
                        .addField("Entró en",  usuario.joinedAt.toDateString(), true)
                        .addField("Fecha de Creación de la cuenta", usuario.user.createdAt.toDateString(), true)
                        .addField("Roles del usuario", `${usuario.roles.cache.map(m => m).join(" **|** ")}`)
                        .addField(`Apodo`,`**${usuario.displayName}**`, true)
                        return message.channel.send(embeduserinfo)
      
                      }
  
    if(["serverinfo", "server", "servidor", "servidorinfo", "infoserver"].includes(command)){ 
    
      const pais = {
brazil: "🇧🇷 Brasil",
sydney: "🇦🇺 Sydney",
"us-central": "🇺🇸 U.S. Central",
india: "🇮🇳 India",
japan: "🇯🇵 Japón",
southafrica: "🇿🇦 Sudáfrica",
europe: "🇪🇺 Europa",
hongkong: "🇭🇰 Hong Kong",
russia: "🇷🇺 Rusia",
singapore: "🇸🇬 Singapur",
"us-east": "🇺🇸 U.S. East",
"us-south": "🇺🇸 U.S. South",
"us-west": "🇺🇸 U.S. West"
}
//en otro lado

   
     let embedserver = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("RANDOM") 
    .setThumbnail(message.guild.iconURL())
    .addField("ID", message.guild.id)
    .addField("Dueño", message.guild.owner)
    .addField("Región", pais[message.guild.region])
    .addField("Miembros", message.guild.members.cache.filter(m => !m.user.bot).size)
    .addField("Bots", message.guild.members.cache.filter(m => m.user.bot).size)
    .addField("Miembros totales", message.guild.members.cache.filter(m => m.user.username).size)
    .addField("Roles", message.guild.roles.cache.filter(r => r.guild.roles).size)
    .addField("Estado de los usuarios", "<a:Online:716755786792960041> Conectado: " + message.guild.members.cache.filter(x => x.user.presence.status === "online").size + "\n<a:Ausente:716760721941200939> Ausente: " + message.guild.members.cache.filter(x => x.user.presence.status === "idle").size + "\n<a:NoMolestar:716753423248392192> No molestar: " + message.guild.members.cache.filter(x => x.user.presence.status === "dnd").size + "\n<a:Transmitiendo:716771347686096896> Transmitiendo: " + message.guild.members.cache.filter(x => x.user.presence.status === "live").size + "\n<a:Desconectado:716771370041737306> Desconectado: " + message.guild.members.cache.filter(x => x.user.presence.status === "offline").size)
    .setTimestamp();
    message.channel.send(embedserver);
}

  
  if(["roles", "roleinfo", "roleserver", "rolesdelservidor", "rolestotales", "inforoles", "rolesinfo"].includes(command)) {

try {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Roles del servidor')
    .setDescription("Roles" + `\n${message.guild.roles.cache.map(m => m).join(" **|** ")}`)
    .setFooter(message.guild.name, message.guild.iconURL())
    
    message.channel.send(embed)
 
  } catch (error) {
    message.channel.send('Este servidor tiene muchos roles ^^')
  }    
}
  
  if(command == "avatar") { 
      
    var usavatar = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(c => new RegExp(args.join(" "), "gmi").test(c.displayName))

    if(!args[0]) {
      
      usavatar = message.member;
      
    }
    
          let avatarpng = usavatar.user.displayAvatarURL( { size: 1024, dynamic: true, format: 'png' } )
          
          let avatarjpg = usavatar.user.displayAvatarURL( { size: 1024, dynamic: true, format: 'jpg' } )
          
          let avatarwebp = usavatar.user.displayAvatarURL( { size: 1024, dynamic: true, format: 'webp' } )
          
          let avatargif = usavatar.user.displayAvatarURL( { size: 1024, dynamic: true, format: 'gif' } )
    
                let embedavatar = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`Avatar de **${usavatar.user.username}**`)
                .setDescription(`[PNG](${avatarpng})` + " **|** " + `[JPG](${avatarjpg})` + " **|** " + `[WEBP](${avatarwebp})` + " **|** " + `[GIF](${avatargif})`)
                .setImage(avatarpng)
                .setFooter("Pedido por: " + message.author.username, message.author.displayAvatarURL());
                return message.channel.send(embedavatar)
            }

  if(command === "saytitle"){
    if(!args[0]) return message.reply("dime algo <:KannaToySorprendido:701499595661770762>").then(msg => msg.delete({timeout: 5000}))
    let embedtitle = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(args.join(' '))
    message.channel.send(embedtitle)
    message.delete()
  }
  
  if(command === "redes"){
    let embedredes = new Discord.MessageEmbed()
    .setColor("0x847AFF")
    .setTitle("REDES SOCIALES")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("[<:Twitter:711338374216155158>Candy](https://twitter.com/Candy71443742)\n\n[<:Instagram:711338354897190913>Candy](https://www.instagram.com/CandyBot_Official/)")
    message.channel.send(embedredes)
  }
  
    var Mensajes = ["http://gif.pornomass.com/uploads/photo/original/498-xxx-porno-gif.gif", "http://www.culosadictos.com/wp-content/uploads/2014/12/folladas-gif1.gif", "http://www.culosadictos.com/wp-content/uploads/2014/12/folladas-gif2.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/08.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/07.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/06.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/05.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/04.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/03.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/02.gif", "http://linea-erotica.xxx/wp-content/uploads/2014/03/01.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/abierta-de-piernas-follada-por-el-culo.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/buena-follada-por-el-culo.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/chica-culo-grande-enculada-por-polla-gigante.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/chica-follada-llorando.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/follada-por-el-culo.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/follada-por-el-culo-con-la-boca-tapada.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/jovencita-follada-por-el-culo.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/mueve-tus-caderas.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/pelirroja-follada-por-el-culo-y-la-boca.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/postura-ideal.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/primera-penetracion-anal.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/retorciendose-de-dolor-sexo-anal.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/sexo-anal-a-tope.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/sexo-anal-con-mucho-placer.gif", "https://www.webporno.xxx/wp-content/uploads/2018/05/universitaria-follada-por-el-culo.gif", "https://i1.wp.com/pornopoke.com/wp-content/uploads/2017/02/gif-porno-muy-calientes-de-anales-2.gif?fit=500%2C282&ssl=1", "https://cdn.discordapp.com/attachments/456179441375248395/456180392152530944/8fea9856-a127-4e1f-bbd5-ddf7f7eb9c46.gif", "https://cdn.discordapp.com/attachments/456179441375248395/456180393096511488/92dfcff6-5dfd-47cb-82e4-ce7fd525fc59.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052071959035916/dfgtdeg.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052080548970496/F357721.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052087360651265/Hot-hardcore-gif-picture.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052096047054848/interracial-sex-abella-anderson-big-white-ass.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052109061849098/naked-interracial-spanking.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052132319526952/tumblr_nmwltp2zq01swqv80o1_500.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052168889401344/20180618_003452.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052169372008460/20180618_003526.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458052169799696396/20180618_003510.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458053946469253142/20180618_004139.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458054469066686465/20180618_004332.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458055059784073226/20180618_004656.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458055221722087424/20180618_004602.gif", "https://cdn.discordapp.com/attachments/456179441375248395/458055223559323648/20180618_004615.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451076833902612/0D283F698EE253A6FA2713C8C6BFA34A2B45A80C25F9F0271Etfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451085071646721/1C9CD237739DCC507241A90097B2583B744D6FADAF632418B7tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451089395974144/1D54FDB3D1F3E4C029D4666C97181B67A44C8BC3B8D0C29B7Dtfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451090192760833/3FD3A347E39DDC31D57BCA0161A544558BC177154DC4B18077tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451100422799361/4C5E3A24BC802C2DA6B6032686BA4B5613E3D6FD4E0FE53DC8tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451104507789313/4F2B6BF6494EE3EECEFD63B4E91927B1264C3826C43D24469Ftfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451144051818497/00666DEA369AAB1BAAC11EC3330E00BCF6ACD3F2A6F7AE2C68tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451152184705034/722A96D0D38CE2FD60D624B4F2A5ACDA1126DE6D2E4B9D7A4Atfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451156806696960/749C2E4CBC81FB399AADFBA74FE8F01EB612FB93199D4121CCtfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451178965073920/07114B80C3B6ED8288B6286BA8A74D4F1E9A8863FCB0710478tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451197747429376/ABEDFBE65233F461AFF482EBC8B74E9B831F1755F46CA90B73tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451202411495424/AF2D413D68B45C490C4F4230AF8365310DF57B8B8FE61CF822tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451207540998145/C0A4C453A970BA2B16E754ADA3A5CBFF50DBF3664E38E7FBECtfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451213157171200/C75C034274D24F31297828DD98C75A9ECE6C206F6B4121F223tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465451222812590080/C86ECCECACB3BF90CDB9F6418A9D9C3541DA71A83C55F61176tfile_urlpv.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465452038248071170/6789ad93-5bab-43ae-8fc0-61f56b6386e6.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465452084028768267/31044b27-0b2d-436d-9bb8-d39af44cc501.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465452128886980608/10089de1-8e61-4cbf-a46d-1de4db457afe.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465452129436303370/346b82cd-86a0-4811-b456-cbd12c57c2fe.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453133406011392/d124143e-5e74-408c-b186-df91c3c27d4a.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453411924574208/tumblr_oulf4aOCQw1wy3bc1o1_500.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453435635105803/tumblr_p0ps3akEtn1txwtk5o1_540.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453439309185025/tumblr_p0x6zaJctv1uv4whbo1_400.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453444224778240/tumblr_p3hoqhYulT1usvzq3o1_500.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453469994713088/tumblr_p4wh47FgCd1rml6dxo1_400.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465453484960120832/tumblr_p34bw7lpJ71usvzq3o1_500.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465875336798928906/18562331.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465876992110231552/OffensiveWickedIndochinesetiger-size_restricted.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465877025023066144/15494824.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465877026822422531/straightevil9-gymzj-53da64.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465877077292351499/since-the-world-went-anal-only-a-majority-of-women-polled-have-reported-a-significant-increase-in-th.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465877124411162634/since-the-world-went-anal-only-a-majority-of-women-polled-have-reported-a-significant-increase-in-th.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465877134200537109/since-the-world-went-anal-only-a-majority-of-women-polled-have-reported-a-significant-increase-in-th.gif", "https://cdn.discordapp.com/attachments/456179441375248395/465877513969729537/18481010.gif", "https://cdn.discordapp.com/attachments/456179441375248395/466958200013455360/37037437160_d28955c8b7_o.gif", "https://cdn.discordapp.com/attachments/456179441375248395/466958201875857408/75a50f102f088c5bd4fda5a824b62.gif", "https://cdn.discordapp.com/attachments/456179441375248395/466997193056845824/OpulentWildFrilledlizard-size_restricted.gif", "https://cdn.discordapp.com/attachments/456179441375248395/466997213856268318/SlushyHonoredGermanwirehairedpointer-size_restricted.gif", "https://cdn.discordapp.com/attachments/456179441375248395/467073149414932482/THICC.gif", "https://cdn.discordapp.com/attachments/456179441375248395/467846990957641738/5d9133ed-34af-467e-8f33-18d1f8f85334.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468774326817128448/3ebb29ab-07f9-4186-bb82-8da83a7a5854.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468774326381051914/f717db85-9b53-4f13-ba59-d7c26da2bb08.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468886652849225728/0f063489-bc59-411b-9b73-c06116ed0457.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468886704074522624/52afec8a-0da8-493a-bef6-980669c098dd.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468886760261287936/3e1a9121-533d-4483-adf0-f27bda59a704.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468896654632943617/tumblr_nd32m5htz91sfkfqio1_500.gif", "https://cdn.discordapp.com/attachments/456179441375248395/468971067822702593/14839349.gif", "https://cdn.discordapp.com/attachments/456179441375248395/469451176363163668/898091db-af4a-4fba-9287-e68a6d62fc80.gif"]
  var aleatorio = Math.floor(Math.random()*(Mensajes.length))
  if (command === "xxxgif") {
      const embed = new MessageEmbed()
     .setColor("RANDOM")
     .setImage(Mensajes [aleatorio])
     if(!message.channel.nsfw) return message.reply("no puedo mostrar contenido +18 fuera de los canales NSFW ^-^").then(msg => msg.delete({timeout: 5000}));
      message.channel.send(embed)
     }
  
  if(command === "md") {
    
    usuario.send(args.splice(1))
    message.delete()
  }
  
     if(command == "clear") {
       if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo los permisos necesarios.").then(msg => msg.delete({timeout: 5000}))
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes los permisos necesarios.").then(msg => msg.delete({timeout: 5000}))
         if(!args[0]) return message.channel.send("Necesitas colocar el número de mensajes que desees eliminar, debe ser inferior a 100.")
          let number = args[0]
            if(isNaN(number)) return message.channel.send("Necesitas colocar un número, no letras ni símbolos.")
           number = parseInt(number)
          if (number >= 100 || number <= 0) return message.channel.send("El valor es inválido.")
        message.channel.bulkDelete(number + 1 ).then( () => {
          message.channel.send(`Se eliminaron ${number} mensajes con éxito.`).then(m => m.delete( { timeout: 3000 } ))
        })
     }
    
  
  
  if(command === "sayimage"){
  if(!args[0]) return message.reply("Necesitas colocar una URL, asegúrate que esta sea formato png jpeg jpg o gif.").then(msg => msg.delete({timeout: 5000}))
    let embedimage = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(args.join(' '))
    message.channel.send(embedimage)
    message.delete()
  }
  
  if(command === "edad") {
    const embededad = new MessageEmbed()
  const aleatorio = Math.floor(Math.random() * 30) + 7
    embededad.setColor("RANDOM")
    embededad.setTitle("Adivinando edad...")
    embededad.setDescription("Pensando...")
    embededad.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
    
    let msg = await message.channel.send(embededad)
setTimeout(() => {
  embededad.setTitle("Según mis calculos...")
  embededad.setColor("RANDOM")
embededad.setDescription("Tú tienes " + aleatorio + " años")
  embededad.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
  msg.edit(embededad);
}, 3000)
  message.delete()
  
  setTimeout(() => {
    embededad.setColor("RANDOM")
  embededad.setTitle("Descifrando")
embededad.setDescription("Finalizando...")
    embededad.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
  
  msg.edit(embededad);

}, 1000)
message.delete()
  }  
  
      const embedsigno = new MessageEmbed()
  var Signos = ["```Acuario ♒```", "```Piscis ♓```", "```Aries ♈```", "```Tauro ♉```", "```Géminis ♊```", "```Cáncer ♋```", "```Leo ♌```", "```Virgo ♍```", "```Libra ♎```", "```Escorpio ♏```", "```Sagitario ♐```", "```Capricornio ♑```"]
  var alesignos = Math.floor(Math.random()*(Signos.length))
  if(command === "signo") {
    embedsigno.setColor("RANDOM")
    embedsigno.setTitle("Iniciando...")
    embedsigno.setDescription("```Investigando```")
    embedsigno.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
    
    let msg = await message.channel.send(embedsigno)
setTimeout(() => {
  embedsigno.setColor("RANDOM")
  embedsigno.setTitle("Tu signo Zodiacal es:")
  embedsigno.setDescription((Signos [alesignos]))
  embedsigno.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
  msg.edit(embedsigno);
}, 3000)
  message.delete()
  
  setTimeout(() => {
    embedsigno.setColor("RANDOM")
  embedsigno.setTitle("Estudiando")
embedsigno.setDescription("```Finalizando...```")
    embedsigno.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
  
  msg.edit(embedsigno);

}, 1000)
message.delete()
  }  
  
        const embedhack = new MessageEmbed()
  var Hacks = ["Free fire", "Minecraft", "Fortnite", "El wifi de tu vecino o.o", "El celular de tu novi@", "$%&/$&%?", "Pou", "Grand Theft Auto: San Andreas", "Multi Theft Auto", "GTA V", "FIFA 20", "PES 2020"]
  var alehacks = Math.floor(Math.random()*(Hacks.length))
  if(command === "hack") {
    embedhack.setColor("RANDOM")
    embedhack.setTitle("Iniciando...")
    embedhack.setDescription("Sacando código base...")
    embedhack.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
    
    let msg = await message.channel.send(embedhack)
setTimeout(() => {
  embedhack.setColor("RANDOM")
  embedhack.setTitle("Has hackeado:")
  embedhack.setDescription((Hacks [alehacks]))
  embedhack.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
  msg.edit(embedhack);
}, 3000)
  message.delete()
  
  setTimeout(() => {
    embedhack.setColor("RANDOM")
  embedhack.setTitle("Decodificando")
  embedhack.setDescription("Finalizando...")
  embedhack.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL())
  
  msg.edit(embedhack);

}, 1000)
message.delete()
  }  
  
  if(command === "loli"){
  
let link = await weez.randomLoli()
 
let embedloli = new MessageEmbed()
.setColor("RANDOM")
.setImage(link);
    
let msg = await message.channel.send(embedloli);
    msg.react("✅");
    msg.react("❎");
    }   
  
   if (command === "pp") {
              var Mensajes = ["8D", "8=D","8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8===========D", "8============D", "8=============D", "8==============D", "8===============D", "8================D", "8===================================================D", "8=======================================================D"]
            var aleatorio = Math.floor(Math.random()*(Mensajes.length))
            let usuario = message.mentions.members.first() || message.member;
              const embedpp = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`Pene de **${usuario.user.username}**`)
              .setDescription((Mensajes [aleatorio]))
              message.channel.send(embedpp);
            }
  
  //////////////////////////////HELP/////////////////////////
  
  if(["help", "ayuda"].includes(command)){
    const embedhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("¡Hola! Soy Candy. La androide modelo C°4ND8 diseñada hace unos meses con el fin de hacerle guardia a mis creadores.\n\n¿Quieres saber un poco más de mí?\n\nEs una larga historia, la verdad ni yo sé como estoy v... Hey, ¿qué tal si dejamos esto y te muestro mi lista de comandos? ^^\n\nComandos de Candy🎀")
    .addField("Moderación", "`clear` `ban` `kick` `encuesta` `prefix` `setsuggest` `setreport` `setconfession` `setwelcome` `setmodlog` `setencuesta`")
    .addField("Diversión", "`pp` `8ball` `loli` `edad` `hack` `signo` `meme` `shitpost` `say` `saytitle` `sayimage` `logro` `cerebro` `trump` `elegant` `trap` `psi` `cat` `car` `chiste` `olvido` `gay` `dios` `snipe` `mirror` `personaje` `makename` `makedesc` `makeimage` `hablar` `png` `triggered` `phone` `setestilo` `appstore` `descargar` `desinstalar` `usar` `geo` `3raya`")
    .addField("Comandos interactivos", "`hug`")
    .addField("Economía", "Los comandos de esta categoría están en desarrollo.")
    .addField("Comandos útiles", "`serverinfo` `userinfo` `avatar` `servericon` `rank` `ranklist` `covid` `npm` `jumbo` `wallpaper` `channels` `suggest` `report` `confession` `js` `jsembed` `emojis` `search`")
    .addField("Comandos Nsfw", "**Para ver los comandos +18 de Candy debes usar este comando en un canal NSFW**")
    .addField("Comandos de Ayuda", "`help` `helpmd` `makeinfo` `estilos` `phonehelp`")
    .addField("Cualquier inquietud, duda o sugerencia envíala por nuestras redes sociales.", "`redes`")
   .setFooter(`Adoptada por ${client.users.resolve('461642640472014849').tag}`)
   if(!message.channel.nsfw) return message.channel.send(embedhelp).then(async msg => {
     await msg.react('528988067411918848')
   });
  }
  
    if(["help", "ayuda"].includes(command)){
    
    const embedhelpnsfw = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("¡Hola! Soy Candy. La androide modelo C°4ND8 diseñada hace unos meses con el fin de hacerle guardia a mis creadores.\n\n¿Quieres saber un poco más de mí?\n\nEs una larga historia, la verdad ni yo sé como estoy v... Hey, ¿qué tal si dejamos esto y te muestro mi lista de comandos? ^^\n\nComandos de Candy🎀")
    .addField("Moderación", "`clear` `ban` `kick` `encuesta` `prefix` `setsuggest` `setreport` `setconfession` `setwelcome` `setmodlog` `setencuesta`")
    .addField("Diversión", "`pp` `8ball` `loli` `edad` `hack` `signo` `meme` `shitpost` `say` `saytitle` `sayimage` `logro` `cerebro` `trump` `elegant` `trap` `psi` `cat` `car` `chiste` `olvido` `gay` `dios` `snipe` `mirror` `personaje` `makename` `makedesc` `makeimage` `hablar` `png` `triggered` `phone` `setestilo` `appstore` `descargar` `desinstalar` `usar` `geo` `3raya`")
    .addField("Comandos interactivos", "`hug`")
    .addField("Economía", "Los comandos de esta categoría están en desarrollo.")
    .addField("Comandos útiles", "`serverinfo` `userinfo` `avatar` `servericon` `rank` `ranklist` `covid` `npm` `jumbo` `wallpaper` `channels` `suggest` `report` `confession` `js` `jsembed` `emojis` `search`")
    .addField("Comandos Nsfw", "`xxxgif` `fuck`")
    .addField("Comandos de Ayuda", "`help` `helpmd` `makeinfo` `estilos` `phonehelp`")
    .addField("Cualquier inquietud, duda o sugerencia envíala por nuestras redes sociales.", "`redes`")
    .setFooter(`Adoptada por ${client.users.resolve('461642640472014849').tag}`)
   if(message.channel.nsfw) return message.channel.send(embedhelpnsfw).then(async msg => {
     await msg.react('528988067411918848')
   })
  }
  
  //////////////////////////////HELP MD////////////////////////////////
  
    if(["helpmd", "ayudamd", "ayudadm", "helpdm", "mdhelp", "dmhelp"].includes(command)){
      
const mdembedhelpnsfw = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("¡Hola! Soy Candy. La androide modelo C°4ND8 diseñada hace unos meses con el fin de hacerle guardia a mis creadores.\n\n¿Quieres saber un poco más de mí?\n\nEs una larga historia, la verdad ni yo sé como estoy v... Hey, ¿qué tal si dejamos esto y te muestro mi lista de comandos? ^^\n\nComandos de Candy🎀")
    .addField("Moderación", "`clear` `ban` `kick` `encuesta` `prefix` `setsuggest` `setreport` `setconfession` `setwelcome` `setmodlog` `setencuesta`")
    .addField("Diversión", "`pp` `8ball` `loli` `edad` `hack` `signo` `meme` `shitpost` `say` `saytitle` `sayimage` `logro` `cerebro` `trump` `elegant` `trap` `psi` `cat` `car` `chiste` `olvido` `gay` `dios` `snipe` `mirror` `personaje` `makename` `makedesc` `makeimage` `hablar` `png` `triggered` `phone` `setestilo` `appstore` `descargar` `desinstalar` `usar` `geo` `3raya`")
    .addField("Comandos interactivos", "`hug`")
    .addField("Economía", "Los comandos de esta categoría están en desarrollo.")
    .addField("Comandos útiles", "`serverinfo` `userinfo` `avatar` `servericon` `rank` `ranklist` `covid` `npm` `jumbo` `wallpaper` `channels` `suggest` `report` `confession` `js` `jsembed` `emojis` `search`")
    .addField("Comandos Nsfw", "`xxxgif` `fuck`")
    .addField("Comandos de Ayuda", "`help` `helpmd` `makeinfo` `estilos` `phonehelp`")
    .addField("Cualquier inquietud, duda o sugerencia envíala por nuestras redes sociales.", "`redes`")
    .setFooter(`Adoptada por ${client.users.resolve('461642640472014849').tag}`)
     message.reply("revisa tu MD <a:abg:528988067411918848>").then(msg => msg.delete({timeout: 5000}))
   message.react("528988067411918848")
   if(message.channel.nsfw) return message.author.send(mdembedhelpnsfw)
  
  }
  
    if(["helpmd", "ayudamd", "ayudadm", "helpdm", "mdhelp", "dmhelp"].includes(command)){
      
    const mdembedhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("¡Hola! Soy Candy. La androide modelo C°4ND8 diseñada hace unos meses con el fin de hacerle guardia a mis creadores.\n\n¿Quieres saber un poco más de mí?\n\nEs una larga historia, la verdad ni yo sé como estoy v... Hey, ¿qué tal si dejamos esto y te muestro mi lista de comandos? ^^\n\nComandos de Candy🎀")
    .addField("Moderación", "`clear` `ban` `kick` `encuesta` `prefix` `setsuggest` `setreport` `setconfession` `setwelcome` `setmodlog` `setencuesta`")
    .addField("Diversión", "`pp` `8ball` `loli` `edad` `hack` `signo` `meme` `shitpost` `say` `saytitle` `sayimage` `logro` `cerebro` `trump` `elegant` `trap` `psi` `cat` `car` `chiste` `olvido` `gay` `dios` `snipe` `mirror` `personaje` `makename` `makedesc` `makeimage` `hablar` `png` `triggered` `phone` `setestilo` `appstore` `descargar` `desinstalar` `usar` `geo` `3raya`")
    .addField("Comandos interactivos", "`hug`")
    .addField("Economía", "Los comandos de esta categoría están en desarrollo.")
    .addField("Comandos útiles", "`serverinfo` `userinfo` `avatar` `servericon` `rank` `ranklist` `covid` `npm` `jumbo` `wallpaper` `channels` `suggest` `report` `confession` `js` `jsembed` `emojis` `search`")
    .addField("Comandos Nsfw", "**Para ver los comandos +18 de Candy debes usar este comando en un canal NSFW**")
    .addField("Comandos de ayuda", "`help` `helpmd` `makeinfo` `estilos` `phonehelp`")
    .addField("Cualquier inquietud, duda o sugerencia envíala por nuestras redes sociales.", "`redes`")
    .setFooter(`Adoptada por ${client.users.resolve('461642640472014849').tag}`)
      message.react("528988067411918848")
   if(!message.channel.nsfw) return message.author.send(mdembedhelp)
return message.reply("revisa tu MD <a:abg:528988067411918848>").then(msg => msg.delete({timeout: 5000}))
  
}
  
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  
  if(command === "shitpost"){
  var Shitpost = ["https://cdn.discordapp.com/attachments/705860738379677806/710986751069650984/unknown.png", "https://cdn.discordapp.com/attachments/705860738379677806/710992691361611787/IMG_20200510_155706.png", "https://cdn.discordapp.com/attachments/705860738379677806/711058871463968798/Screenshot_20200512_220000.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708868275169132564/Malardium.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708869051820277770/5e02474f030f7.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/709118335090032730/Screenshot_20200510-140030.png", "https://cdn.discordapp.com/attachments/705860738379677806/709651083248664646/FB_IMG_1589335322861.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/709659957917777920/20200402_221453.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/709741338115047474/3c7369dd05d81d31d70b494b28ded415.png", "https://cdn.discordapp.com/attachments/705860738379677806/709802359265427496/image0.png", "https://cdn.discordapp.com/attachments/705860738379677806/709802385689673775/image0.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/709802457215271032/image0.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/709802622583832596/image0.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/709802640942301244/image0.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/709838409039872102/image0.png", "https://cdn.discordapp.com/attachments/705860738379677806/709881484902793288/jjjaajja-q-pedo-con-el-post-de-arriba-xd-Nlhe9.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/710273748581744792/Screenshot_20200513-165716_Instagram.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/710849495130308698/image0.png", "https://cdn.discordapp.com/attachments/705860738379677806/708250316356976750/IMG_20200408_211614.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708186564278222968/bd745c57ccc6b3866e0438c02b5f4352.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708071673722830928/received_530851294269675.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708050127050506320/FB_IMG_1588836097657.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708015269267898368/IMG-20191216-WA0020-1.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708015269074698300/20200412_005007.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708015268722376714/50497211544_status_593daf0c244f49f4ab95fbd429427c1b.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708015268449878186/descarga-2.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708015268051550238/IMG_20200423_224912_560.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708015064858230784/95535051_1179580279053570_6994486294600482816_n.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014910734598244/FB_IMG_1587600764522.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014910491197450/f8b74d6.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014910197465180/FB_IMG_1586906337347.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014846465015828/Screenshot_2020-04-25-09-42-20-1.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014845689200690/9k.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014845139746836/descarga_11.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708014844846145586/IMG_20200502_174749.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014792866267267/IMG_20200421_123002.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014792228470794/FB_IMG_15875594271102.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014729892986881/IMG_20200411_151547_080.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014729607643216/unknown-17_1.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014683117846568/80438776_856065994863964_7702398863128847842_n.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014682837090324/20200229_192745.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014682103087217/FB_IMG_15876748462607509.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014529765834773/IMG_20200414_203913.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014528998146118/FB_IMG_1586791569676.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014528696156270/FB_IMG_1586912957533.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014528448823377/FB_IMG_1585884974275-1.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014528100827238/FB_IMG_15869716327700017.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014527681265674/images_20-1.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708014521293471844/cc2e4e88eed866361b96e6c610e7cd21.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014520890818629/20200404_154701-1.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014520727240714/FB_IMG_1588202277172.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014342775504946/94626632_236105890805236_873274770920046592_n.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014342511263885/IMG-20200416-WA0143-1.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014342284509304/FB_IMG_1587578731360.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014342099959910/image0-3-3.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014341831655548/270_sin_titulo_20200423033702.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014329206669402/IMG_20200503_142724.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014328925913118/IMG_20200503_144238.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014328581718096/IMG_28042020_220338.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014228526727288/Screenshot_20200429-102826_Instagram.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014227998376017/69945745_125343198840306_6911566579715980206_n.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014227713163355/IMG_20200505_090751.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014227507380295/IMG_20200505_154808.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014176601243719/FB_IMG_15839664594242421.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014176249053314/image2.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014175816777758/6540785ca4a9869d9a3a34da159c7b94.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014053582307388/FB_IMG_1588001858365.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014053267603556/IMG_20200427_234735.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014052936384562/te_lo_estallo.png", "https://cdn.discordapp.com/attachments/705860738379677806/708014052646846545/FB_IMG_1588141293445.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014052370153493/Screenshot_20200420_225526.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708014052147986442/20200313_134252.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013964147032154/JPEG_20200424_001909.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013963899568235/choripanysida_20200424_11.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013963530469386/images_15.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708013963274616902/5da79c041e5f6.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708013963098718248/20200127_145305.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013809821941901/image0-1-3-1.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013809515626536/Zorro_xdnt.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013809201184838/IMG-20200411-WA0076.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013808538615818/image0-17-1.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013808056139796/Screenshot_20200413-0104502.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013807712075776/IMG-20200324-WA0119-1.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013807271936100/IMG-20200331-WA0170.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013612484001913/images_4-1.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708013611670306956/image0-68.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013611255201922/Screenshot_20200421-154355.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013607467614309/Screenshot_20200503-053634.jpeg", "https://cdn.discordapp.com/attachments/705860738379677806/708013606658244638/image0-8.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013606251266148/IMG_20200506_192734.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013390290747452/94118026_265546958174288_4012017302965846016_n.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013389481377902/22_sin_titulo_20200428112403.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013388931792966/23_sin_titulo_20200428150645.png", "https://cdn.discordapp.com/attachments/705860738379677806/708013388281806948/IMG_20200414_150512.jpg", "https://cdn.discordapp.com/attachments/705860738379677806/708013387967365211/FB_IMG_1587733997730.jpg"]
  var aleatorioshit = Math.floor(Math.random()*(Shitpost.length))
  const embedshitpost = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(Shitpost [aleatorioshit])
  message.channel.send(embedshitpost)
 
  }
  
  if(command === "meme"){
    var Memes = ["https://cdn.discordapp.com/attachments/697200275051511831/712158190397030510/c365d283e7c3f6ad25b45d6f08a70592.jpg", "https://cdn.discordapp.com/attachments/697200275051511831/712158332567420948/5ca152fe36f96dc5793acaa41a6aab33.jpg", "https://cdn.discordapp.com/attachments/697200275051511831/712158406391365652/965fbb8893f0995fd693665885780587.jpg", "https://cdn.discordapp.com/attachments/410197118263754753/638423574788571168/FB_IMG_1572060590870.jpg", "https://cdn.discordapp.com/attachments/410197118263754753/635575377397284867/73074116_141702327153208_5781356826041778176_n.jpg", "https://cdn.discordapp.com/attachments/697217005899612260/703378450907529277/chileandankmemes_20200327_2.png", "https://cdn.discordapp.com/attachments/410197118263754753/649745030986072074/76982820_156334285750142_6855643720046346240_n.jpg"]
    var aleatoriomemes = Math.floor(Math.random()*(Memes.length))
    let embedmemes = new Discord.MessageEmbed()
    .setImage(Memes[aleatoriomemes])
    .setFooter("¡Comando en desarrollo, usa *redes y mándanos tus memes!")
    message.channel.send(embedmemes)
  }
  
  if(command === "phraseday"){
    const embedphrase = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Reject common sense to make the impossible possible!")
    .setFooter("Phrase of the day")
    message.channel.send(embedphrase)
  }
  
  if(command === "fraseday"){
    const embedfrase = new Discord.MessageEmbed()
    .setColor("0xE691B6")
    .setTitle("¡Rechaza el sentido común para hacer posible lo imposible!")
    .setFooter("Frase del día")
    message.channel.send(embedfrase)
  }
  
  if (command == "trump") {
    if(!args[0]) return message.reply("debes escribir algo. <:PandaTrump:693890256252043404>").then(msg => msg.delete({timeout: 5000}))
    const argstrump = args.join(' ')
    if(argstrump.length > 65) return message.channel.send(":x: **|** Excediste el límite de caracteres permitidos, solo puedo convertir una cantidad de 65 caracteres.").then(msg => msg.delete({timeout: 5000}))
    

                // Obtengo una de las imágenes por mención
                 
                let img = await weez.trump(args.join(" "))
                 
                message.channel.send({files: [img]})
              }
  
  if (command == "elegant") {
                let sep = args.join(" ").split(" | ");
           if(!sep[0, 1]) return message.reply("debes escribir 2 mensajes con el separador: |").then(msg => msg.delete({timeout: 5000}))
 
                    // Obtengo una de las imágenes por mención
                     let member = message.mentions.users.first()
                     
                    let img = await weez.elegante(sep[0], sep[1]);
                    message.channel.send({files: [img]})
                }     
  
                 if (command == "cerebro") {
                let sep = args.join(" ").split(" | ");
                   if(!sep[0, 1, 2, 3]) return message.reply("debes escribir 4 mensajes con el separador: |").then(msg => msg.delete({timeout: 5000}))

                    // Obtengo una de las imágenes por mención
                     let member = message.mentions.users.first()
                     
                   let img = await weez.cerebro(sep[0], sep[1], sep[2], sep[3]);
                    message.channel.send({files: [img]})
                }   
  
                  if (command == "logro") {
                   if(!args[0]) return message.reply("debes escribir un mensaje. :medal: ").then(msg => msg.delete({timeout: 5000}))

                    // Obtengo una de las imágenes por mención
                     let member = message.mentions.users.first()
                     
                   let img = await weez.logro(args.join(' '))
                    message.channel.send({files: [img]})
                    message.delete()
                }
  
       if (command == "gru") {
                   if(!args[0, 1, 2]) return message.reply("debes escribir 3 mensajes con el separador: |").then(msg => msg.delete({timeout: 5000}))
         let sep = args.join(" ").split(" | ");

                    // Obtengo una de las imágenes por mención
                     let member = message.mentions.users.first()
                     
                   let img = await weez.gru(sep[0], sep[1], sep[2])
                    message.channel.send({files: [img]})
                }
  
    if (command == "eyes") {
                   if(!args[0, 1, 2]) return message.reply("debes escribir 3 mensajes con el separador: |").then(msg => msg.delete({timeout: 5000}))
         let sep = args.join(" ").split(" | ");

                    // Obtengo una de las imágenes por mención
                     let member = message.mentions.users.first()
                     
                     let img = await weez.eyes(sep[0], sep[1], sep[2])
                    message.channel.send({files: [img]})
                }
  
  if(command === "drake") {
    if(!args[0]) return message.channel.send("Menciona a un usuario.").then(msg => msg.delete({timeout: 5000}))
    if(usuario === message.member) return message.channel.send("No te puedes mencionar a ti mismo.").then(msg => msg.delete({timeout: 5000}))

 
// Obtengo una de las imágenes por mención
 
let user = message.mentions.users.first()
 
let  img = await weez.drake(message.author.displayAvatarURL({format: 'png'}), user.displayAvatarURL({format: 'png'}))
 
message.channel.send({files: [img]})
     }

    if(command === "trap"){


  
let link = await weez.randomTrap()
 
let embedtrap = new MessageEmbed()
.setColor("RANDOM")
.setImage(link);
    
let msg = await message.channel.send(embedtrap);
    msg.react("✅");
    msg.react("❎");
    }
  
    if(command === "psi") {


// Obtengo una de las imágenes por mención
 
let user = message.mentions.users.first() || message.author;
 
let  img = await weez.psicopata(user.displayAvatarURL({format: 'png'}))
 
message.channel.send({files: [img]})
     }
  
    if(command === "cat"){
    let Cat = ["https://ichef.bbci.co.uk/news/410/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg", "https://naturallysavvy.com/wp-content/uploads/2018/11/My-Cat-has-an-Itching-Problem-What-can-I-do-696x436.jpg", "https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg", "https://img.imgur.com/h0Lq8vr.jpg", "https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg", "https://images-na.ssl-images-amazon.com/images/I/61CzZ1b1NhL.jpg", "https://i.pinimg.com/originals/91/e3/e8/91e3e822ac393fce619b93df53d153b9.jpg", "https://i.pinimg.com/originals/5b/8f/4c/5b8f4ca8916661d1c4310bed5e1b76b0.jpg", "https://i.pinimg.com/originals/e1/99/f8/e199f8fadc23f8491b1526af71d0d074.jpg", "https://caracteres.mx/wp-content/uploads/2019/08/cat-hat-1.jpg", "https://thebrexitplan.com/wp-content/uploads/2020/03/Cats-icatcare.org-.jpg", "https://www.maskaywasi.org.pe/images/perdidos/gato_07.jpg", "https://cdn130.picsart.com/294072879056201.jpg", "https://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg", "https://cdn130.picsart.com/294072879056201.jpg", "https://www.faceofmalawi.com/wp-content/uploads/2020/04/1800x1200_cat_relaxing_on_patio_other.jpg", "https://s3.amazonaws.com/realtalktime.com/wp-content/uploads/2020/03/28114559/Cats2.jpg", "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg", "https://inteng-storage.s3.amazonaws.com/img/iea/4N610VqxGJ/sizes/cat-cloning_resize_md.jpg", "https://cdn.mos.cms.futurecdn.net/otjbibjaAbiifyN9uVaZyL.jpg", "https://cdn.mos.cms.futurecdn.net/otjbibjaAbiifyN9uVaZyL.jpg", "https://i.pinimg.com/474x/f0/80/98/f080985c3406741f82f78378313a9c15.jpg", "https://i.pinimg.com/originals/d8/ca/1b/d8ca1be5b904bc59a32575b539897806.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg", "https://cats-stories.com/wp-content/uploads/2020/02/cat-1.jpg", "https://assets.janbaaz.pk/wp-content/uploads/2019/07/26153241/1564155160.jpg", "https://www.thehappycatsite.com/wp-content/uploads/2017/09/somali-kittens.jpg", "https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/072319_ee_cat-allergy_feat.jpg", "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/112809642-fostering-cats-kittens-632x475.jpg", "https://i.pinimg.com/originals/5c/03/2c/5c032cf45701ec35e3b0d257c8893972.jpg", "https://i.pinimg.com/originals/6f/48/49/6f4849f3842cfbc99a1e8fb3d4ba791f.jpg", "https://i.pinimg.com/originals/66/a1/0e/66a10e72c47916ed48f9128dba212d82.jpg", "https://www.sciencenews.org/wp-content/uploads/2020/02/021520_catallergies_main-1028x579.jpg", "https://www.dailydot.com/wp-content/uploads/b8e/19/e4721c4a5b5da1ce89f9fb16b57da789.jpg", "https://i.pinimg.com/originals/b2/60/f6/b260f61ed79d7a3057d1dd1a43adf716.jpg", "https://1843magazine.static-economist.com/sites/default/files/styles/article-main-image-overlay/public/WC-cat-header%203.jpg", "https://images-na.ssl-images-amazon.com/images/I/71OS1e3xdkL.jpg", "https://img.etimg.com/thumb/width-640,height-480,imgsize-679134,resizemode-1,msid-66059743/the-truth-about-cats-and-rats.jpg", "https://www.thebaynet.com/media/photos/gallery/5d46bd01-940a-4739-933c-b4ec8dc88cc5.jpg", "https://cdn.playbuzz.com/cdn/cc0ba38c-7937-420e-bdaf-2421ce21d831/045406cc-5df0-436d-8ece-d132300a6ddf.jpg", "https://i.pinimg.com/originals/78/ac/b0/78acb0a2bbc780e7078939814e66f53f.jpg", "https://www.anipedia.net/imagenes/gatos-800x375.jpg", "https://www.zooplus.es/magazine/wp-content/uploads/2019/09/fotolia_119180897-768x512.jpg", "https://www.nationalgeographic.com/content/dam/animals/2019/12/cat-whisperers/cat-whisperers-nationalgeographic_1048225.jpg", "https://cdn.pixabay.com/photo/2019/12/17/16/06/cat-4701934_1280.jpg", "https://cdn-prod.medicalnewstoday.com/content/images/hero/327/327448/327448_1100.jpg", "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/02/021520_cats_feat_opt2-1028x579.jpg", "https://hi-meow.weebly.com/uploads/5/5/1/6/55161755/1665453_orig.jpeg", "https://nationalzoo.si.edu/sites/default/files/animals/sandcat-001.jpg", "https://static.scientificamerican.com/sciam/cache/file/3FC2F9E2-3EC1-46F3-B3E5566D0BB2C696_source.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2018/06/cats-on-catnip-andrew-marttila-3.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2018/06/cats-on-catnip-andrew-marttila-19.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2018/06/cats-on-catnip-andrew-marttila-7.jpg", "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2020/04/5eaab985996f7_12ts3j9y0wp41__700.jpg", "https://api.time.com/wp-content/uploads/2019/12/CatFilterReaction.jpg", "https://catsventure.com/wp-content/uploads/2017/08/large-cat-breeds.jpg", "https://hattoncoc.org/wp-content/uploads/hyperactive-cat-e1457644875113.jpg", "https://iheartcats.com/wp-content/uploads/2014/06/shutterstock_89411911.jpg", "https://media1.popsugar-assets.com/files/thumbor/GSwUftRG5aqL5pwwngcaxV1LLIg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/08/942/n/24155406/969a82835c82e08f48bec2.51392464_/i/Wearable-Cat-Head.jpg", "https://www.petmd.com/sites/default/files/calico-cat-yawning-by-window.jpg", "https://www.petmd.com/sites/default/files/Tabby-cat-yawning-and-showing-all-his-teeth.jpg", "https://www.healthline.com/hlcmsresource/images/galleries/cat-scratch-fever/4609-cat-732x549-thumbnail.jpg", "https://i.insider.com/5e84effc92e19177d7551824?width=1136&format=jpeg", "https://www.vetwest.com.au/sites/default/files/styles/large/public/images/article/senior-short-hair-cat_0.jpg", "https://howlongdolive.com/wp-content/uploads/2016/07/how-long-do-cats-live-2-cats.jpg", "https://i.redd.it/9tka6tezx6hz.jpg", "https://www.msah.com/sites/default/files/Cat-Yawning-with-Meow-Graphic_0.jpg", "https://www.southbostonanimalhospital.com/hubfs/Blog/How_to_Prevent_hairballs.jpg", "https://cdn.vox-cdn.com/thumbor/uj3IMNMi2LiJNvWVwkpyiKTXsqM=/0x0:4758x3569/1200x800/filters:focal(0x0:4758x3569)/cdn.vox-cdn.com/uploads/chorus_image/image/42021742/8536633928_62a8d4fb3b_o.0.0.jpg", "https://i.pinimg.com/236x/6d/d9/84/6dd98470942715d5e13aa22498e653bf--cat-illustrations-funny-cats.jpg", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2016/05/7-reasons-cats-clean-themselves-so-much.jpg", "https://www.hartz.com/wp-content/uploads/2016/12/how_to_treat_your_cat_for_ear_mites_featured_2000x786.jpg", "https://www.catster.com/wp-content/uploads/2016/03/cat-behavior-ears-TN.jpg", "https://i.pinimg.com/originals/05/f9/c9/05f9c943d6824b60aeff2ee339e880c3.jpg", "https://vetstreet.brightspotcdn.com/dims4/default/37be56d/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F0f%2F064090a33f11e087a80050568d634f%2Ffile%2FMunchkin-4-645mk062311.jpg", "https://www.thisiscolossal.com/wp-content/uploads/2019/08/cat-hat-og.jpg", "https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2722_siberian-460x290-460x290.jpg", "https://www.petsecure.com.au/wp-content/uploads/2015/03/Siberian-e1434600145381.jpg", "https://www.gopetplan.com/sites/default/files/2018-07/rsz_shutterstock_264112589.jpg", "https://www.adn.com/resizer/xTYxrv84grO3v-jQEBUZCh_xh9g=/992x0/s3.amazonaws.com/arc-wordpress-client-uploads/adn/wp-content/uploads/2017/11/05034838/cat-2914984_960_7202.jpg", "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Allergies/cat-thumb2.jpg", "https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089__340.jpg", "https://i.insider.com/5e2ef209ab49fd373f6ba714?width=1136&format=jpeg", "https://img.ohmirevista.com/article/480/animal/razas-de-gatos-los-rizos-del-selkirk-rex-tambien-varian_85915097413e4c01fdeca38b9f77ce9f5922adc3.jpg", "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/people_foods_cats_can_eat_slideshow/thinkstock_rf_photo_of_cat_sitting_at_table.jpg", "https://www.kisseshappen.com/wp-content/uploads/2016/09/cat-eating.jpg", "https://www.zastavki.com/pictures/originals/2013/Animals___Cats_Cat_with_a_plate_at_the_table_046957_.jpg", "https://vetstreet.brightspotcdn.com/dims4/default/7cc218c/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa5%2F69%2Fe639b7ab40c2a290e3296de726d8%2FPersian-AP-PIFN6J-645sm3614.jpg", "https://media14.s-nbcnews.com/j/MSNBC/Components/Video/201905/tdy_news_grumpy_cat_190517_1920x1080.focal-760x428.jpg", "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/100901720-cat-adoption-first-30-days-632x475.jpg", "https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/07/IMG_3481.jpg", "https://cdn.theatlantic.com/thumbor/Gx_yfIcKgXHozfK-VflUUBbbUMI=/900x600/media/img/photo/2015/03/aoshima-japans-cat-island/c05_RTR4RUIK/original.jpg", "https://cdn.mos.cms.futurecdn.net/PYmA3tQpWVLw9V5rynQieg.jpg", "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/Skyword/images/white-calico-hiding-under-bed_313125_ref.png", "https://cdn.vox-cdn.com/thumbor/s1LixhLPUC4V9yeKWFavE_XpMdU=/0x6:2500x1881/1200x800/filters:focal(0x6:2500x1881)/cdn.vox-cdn.com/uploads/chorus_image/image/38423438/3841311454_0c3f1ce026_o.0.0.jpg", "https://www.nationalgeographic.com/content/dam/news/2017/06/19/domestic-cat-history/01-domestic-cat-history.ngsversion.1497886214053.adapt.1900.1.jpg", "https://www.cats.org.uk/media/2218/ginger-kitten-banner-image.jpg", "https://www.hartz.com/wp-content/uploads/2016/12/How_To_Stop_Your_Cat_From_Biting_263x340.png", "https://i.ytimg.com/vi/AIQLBiGUCQ4/maxresdefault.jpg", "https://vetstreet.brightspotcdn.com/dims4/default/fbf0716/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F44%2Fca%2F0d2d9db049ff933701e6ab7fc477%2Fmunckin-kitten-ap-vzjbhr-645-x-380.jpg", "https://cats-breed.com/wp-content/uploads/2014/01/munchkin-cat.jpg"]
    let aleatoriocat = Math.floor(Math.random()*(Cat.length))
    const catembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(Cat[aleatoriocat])
    message.channel.send(catembed)
  }
  
  if(command === "encuesta"){
    let embedencuestas = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Encuesta")
    .setDescription("**" + args.join(' ') + "**")
    .addField("Opción 1", "✅ Sí", true)
    .addField("Opción 2", "❌ No", true)
    .setTimestamp();
   let msg = await message.channel.send(embedencuestas);
    msg.react("✅");
    msg.react("❌");
    message.delete()
    }
  
  
  
  if(command === "servericon"){
    
      const iconoPNG = message.guild.iconURL( { size: 1024, dynamic: true, format: 'png' } )

      const iconoJPG = message.guild.iconURL( { size: 1024, dynamic: true, format: 'jpg' } )
      
      const iconoWEBP = message.guild.iconURL( { size: 1024, dynamic: true, format: 'webp' } )
      
    
    const embedsvimage = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Icono de **${message.guild.name}**`)
    .setDescription(`[PNG](${iconoPNG}) **|** [JPG](${iconoJPG}) **|** [WEBP](${iconoWEBP})`)
    .setImage(iconoPNG)
    .setTimestamp();
    message.channel.send(embedsvimage)
  }
  
  if(command === "fuck"){
    
    if(!message.channel.nsfw) return message.reply("no puedo mostrar contenido +18 fuera de los canales NSFW ^-^").then(msg => msg.delete({timeout: 5000}));
    if(!args[0]) return message.reply("menciona a una persona 7w7").then(msg => msg.delete({timeout: 5000}));
    
    if(usuario === message.member) return message.channel.send("¿Follarte a ti mismo es posible?").then(msg => msg.delete({timeout: 5000}));
    let Fuck = ["https://www.elergonomista.com/wp-content/uploads/2019/05/h10.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h11.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h12.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h13.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h17.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h18.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h20.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h14.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h19.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h22.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h23.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h26.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h27.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h29.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h30.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h39.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h38.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h37.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h36.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h35.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h34.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h33.gif", "https://www.elergonomista.com/wp-content/uploads/2019/05/h32.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famj/tumblr_me6kcxvIOZ1rrjkhio1_500.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famo/tumblr_mq910f5lwu1rat3p6o1_400.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famv/tumblr_ms9gobWso21sgyznwo1_250.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famw/tumblr_mscd4r03rQ1sgyznwo2_500.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famM/tumblr_msxmci0JF81sfh0upo1_500.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famW/tumblr_mt0vvis3zy1sfh0upo1_500.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/m/2famY/tumblr_mt4trfc4vc1sgyznwo2_400.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fan9/tumblr_mzaa5rfib31sgyznwo2_500.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fanv/tumblr_n5e28iIJX21tv541co3_400.gif", "http://ist1-1.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fany/tumblr_n5pckh1SXx1tv541co2_400.gif", "http://ist1-1.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fanA/tumblr_n5pd6wdKkb1tv541co1_500.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fanC/tumblr_n5pdfhK2KN1tv541co5_400.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fanB/tumblr_n5pd6wdKkb1tv541co2_400.gif", "http://ist1-1.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fanE/tumblr_n5pdp8947t1tv541co8_400.gif", "http://ist2-2.filesor.com/pimpandhost.com/1/2/6/1/126173/2/f/a/n/2fanF/tumblr_n5r6v3EW321tv541co1_500.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859104709705731/23.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858718150197265/5.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859179414585373/27.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859085600325692/25.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859019288379482/19.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858839742939205/10.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859100901277705/22.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858718150197265/5.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858722780577817/1.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858932323549427/14.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858837553512553/7.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858834672025617/9.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858895166341226/11.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858920424439931/15.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858895166341226/11.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858974073782344/20.gif", "https://cdn.weebs.cl/images/Ic0VwR9o.gif", "https://cdn.weebs.cl/images/oQbGH35a.gif", "https://cdn.weebs.cl/images/kI3E_6Yt.gif", "https://cdn.weebs.cl/images/7yY7fOde.gif", "https://cdn.weebs.cl/images/__hUU0In.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-19-1.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-5.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-9.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-10.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-11.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-11-22.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-12.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-15.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-17.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-20.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-22.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-23.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-24.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-25.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-27.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-26.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-28.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-29.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-30.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-31.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-32.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-34.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-36.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-37.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-38.gif", "https://wetgif.com/wp-content/uploads/gif-hentai-incest-40.gif", "https://media.beemtube.com/galleries/1219/2221061653/12192221374523.gif", "https://media.beemtube.com/galleries/1219/2221061653/12192221374738.gif", "https://media.beemtube.com/galleries/1219/2221061653/12192221374308.gif", "https://media.beemtube.com/galleries/1219/2221061653/12192221374348.gif", "https://www.gifspx.com/gifs-animados-x/gspx_pack-de-gifs-hentai-sentaditas-con-una-buena-pillada.gif", "https://images.meteociel.fr/im/9513/anijkjkkjgif_dup7.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858848244531306/8.gif", "https://static.hentai-image.com/upload/20121119/3/2953/17.gif", "https://static.hentai-image.com/upload/20121119/3/2953/32.gif", "https://static.hentai-image.com/upload/20121119/3/2953/6.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859097021284436/21.gif", "https://3.bp.blogspot.com/-9aVCNR9WJ1Q/WGpMA6I93cI/AAAAAAAABxs/2chywoecs6cUeQsHmYMYb_GUCa4pQSBKwCLcB/s1600/teniohagif3.gif", "https://i.imgur.com/N2933F0.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858766422048840/4.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859191452237838/29.gif", "https://25.media.tumblr.com/ca4251ed66ada2c65236da2f03f4c09c/tumblr_myozkvRusc1sflbiso1_500.gif", "https://2.bp.blogspot.com/-kIzBXTpl5KE/WYxxR3DIFzI/AAAAAAAAJaA/u_6Y5A6cutwFH10r4d70tIfz-A37pz-9ACLcBGAs/s1600/senseigif2.gif", "https://66.media.tumblr.com/7fb311c1dff130abb48a0630d97118bd/tumblr_ob82atzHUm1uao6a1o3_1280.gif", "https://1.bp.blogspot.com/-5qX_s_jNBZM/WgJQNp1AaSI/AAAAAAAAAto/g164DsfvkggwggSfOF7MbRqjKo-Wi23JQCLcBGAs/s640/tumblr_n5v4n84POR1tv5c1wo3_400.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858974073782344/20.gif", "https://4.bp.blogspot.com/-zkrM7qnNlUI/Vxe5CaY3Z4I/AAAAAAAAIHs/KqQFI7ivqvYklUT0ur0UM-MXmZrgyLJ4QCKgB/s1600/anime%2Bhentai%2Bgif%252C%2Bboobs%252C%2Bass%252C%2Bhots%2Band%2Bsexy%2Bmilfs%252C%2B%2Bsex%252C%2Bcojiendo%252C%2B%2Bblowjob%252C%2Bblonde%252C%2Bschool%252C%2Bhot%252C%2B%2B%252812%2529.gif", "https://img-hw.xvideos.com/videos/profiles/galleries/c9/f4/e9/alberto_rawraq_x18/gal2776295/pic_2_big.gif", "http://picsnude.com/AnimePorn1606/hardcore-hentai-gif-beautiful-big-tits.gif", "https://i.imgbox.com/adkcAuHe.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859130185646153/24.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858820889673750/6.gif", "https://i.imgur.com/xA2xlDG.gif", "https://i.imgur.com/YsUDx27.gif", "https://i.imgur.com/lx5mXpN.gif", "https://thumb-p8.xhcdn.com/a/6r1Qsv5MT5K4XnZ7A2mZ3g/000/127/100/658_450.gif", "https://ei.rdtcdn.com/m=eVYR81q/_thumbs/gallery/000/003/990/s_4751769_300701_3990081_/hentai-gifs-5332521.gif", "https://thumb-p1.xhcdn.com/a/mKmjAGTMXGMZsrxbUyvuFQ/000/076/264/081_1000.gif", "https://24.media.tumblr.com/tumblr_m4ie6vZeiQ1rwtt7po1_1280.gif", "https://xnxxhentai.com/wp-content/uploads/2020/02/hentai-gifs-1.gif", "https://i.imgbox.com/mEBv0OrY.gif", "https://img1.gelbooru.com/images/d7/46/d7465d96d8f2bed86930ec74d6b98da1.gif", "https://img1.gelbooru.com/images/d7/46/d7465d96d8f2bed86930ec74d6b98da1.gif", "https://cdn.discordapp.com/attachments/587824646850740245/587825725961404427/classic_244.gif", "https://cdn.discordapp.com/attachments/587824646850740245/587825727723012108/classic049.gif", "https://1.bp.blogspot.com/-RdVpMDuwxgQ/Wg9Agt8RZaI/AAAAAAAACAU/dGA3nFzgCQgr02WhQ5CRn50ZDpXha_5FgCLcBGAs/s640/tumblr_n9x9xxlyyQ1rsa561o1_500.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688859209676095494/26.gif", "https://24.media.tumblr.com/a22e5add7f84a9d82dd3dea67530f0c0/tumblr_mq8ymzyQFg1rmvspko1_250.gif", "https://hentailollipop.com/wp-content/uploads/2018/12/doggystyle-anal-hentai-gif.gif"]
    let aleatoriofuck = Math.floor(Math.random()*(Fuck.length))
    let Fucktitle = [`**${message.author.username}** se ha follado a **${usuario.user.username}**`, `**${usuario.user.username}** se ha dejado follar por **${message.author.username}**`, `**${message.author.username}** se folló a **${usuario.user.username}**`]
    let aleatoriotitle = Math.floor(Math.random()*(Fucktitle.length))
    const embedfuck = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(Fucktitle[aleatoriotitle])
    .setImage(Fuck[aleatoriofuck])
    if(message.channel.nsfw) return message.channel.send(embedfuck);
  }
  
  if(command === "hug"){
    
    let Textop = ["menciona a alguien, no seas tímido <:wumplus:360209987815079936>", "¿por qué no mencionas a alguien? :face_with_monocle:"]
    let aleatoriotextop = Math.floor(Math.random()*(Textop.length))
    
    
    if(!args[0]) return message.reply(Textop[aleatoriotextop])
    
    if(usuario === message.member) return message.channel.send("¡Anímate, el autoabrazo no es una opción! <:Confirmo:699749018934444142>")
   
    let Hug = ["https://pa1.narvii.com/6088/4c8d276f9fe16d5797ff60d6c409e394133655a4_hq.gif", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://78.media.tumblr.com/3fbddffeee51bccf95f4ee0a400738f2/tumblr_inline_n68k0pLbKj1rq1ito.gif", "https://pa1.narvii.com/6976/2200cfd5c2e32aec068aa75ec95d300f3880bc65r1-540-260_hq.gif", "https://i.pinimg.com/originals/63/63/06/636306b78e9a992418f10c427a0a3b66.gif", "https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif", "https://thumbs.gfycat.com/ImmaterialHappygoluckyHoneybadger-small.gif", "https://thumbs.gfycat.com/AcidicAchingCrownofthornsstarfish-max-1mb.gif", "https://k38.kn3.net/taringa/2/0/5/4/2/5/09/faby_lee/ADC.gif", "https://media1.tenor.com/images/07cee38da33c400443f1b050176c8be2/tenor.gif?itemid=5205153", "https://33.media.tumblr.com/826a784897bf75177d3369d5f2a026ea/tumblr_mzui9iywOG1t8690mo1_500.gif", "https://i.pinimg.com/originals/02/7e/0a/027e0ab608f8b84a25b2d2b1d223edec.gif", "https://i.pinimg.com/originals/72/9f/af/729faf0a6ad394bbc2bafc8e71796615.gif", "https://pa1.narvii.com/6392/62ae87c1a5045fc1b970a0d34e5a74171cfd537b_00.gif", "https://pa1.narvii.com/6519/ab397b582e2f93661c6e00a07c450f32a37389b2_hq.gif", "https://k30.kn3.net/taringa/9/9/0/4/3/4/3/elpachonisimo/8E7.gif", "https://pa1.narvii.com/6547/9200caa5630823c465d52fd6fc7a191b7ef8e00d_hq.gif", "https://33.media.tumblr.com/cd1311de5d24a41238003d09bcbf4f1a/tumblr_niwizxhzuD1tq2n3ko1_500.gif", "https://i.gifer.com/79xh.gif", "https://pa1.narvii.com/6220/c2b4d0dc8487f850000e32ba174336abd5eaf004_hq.gif", "https://i.pinimg.com/originals/13/fe/95/13fe9541f86cff237f1800e9279b1567.gif", "https://cdn.weeb.sh/images/rkN2u_XP-.gif", "https://cdn.weeb.sh/images/Hy4hxRKtW.gif", "https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788", "https://data.whicdn.com/images/174550561/original.gif", "https://media1.tenor.com/images/81f693db5e5265c9ae21052d55ab7b3d/tenor.gif?itemid=13576354", "https://i.pinimg.com/originals/e4/a6/cb/e4a6cb1e65ae0f256a5b9131c0d444d7.gif", "https://media1.tenor.com/images/1d94b18b89f600cbb420cce85558b493/tenor.gif?itemid=15942846", "https://media1.tenor.com/images/6beb6a29603bb0769408c8ff32e035ab/tenor.gif?itemid=5525930", "https://media1.tenor.com/images/4800e2bebb6d54456acab62c62a3df7b/tenor.gif?itemid=10464529", "https://acegif.com/wp-content/gif/anime-hug-86.gif", "https://acegif.com/wp-content/gif/anime-hug-79.gif", "https://acegif.com/wp-content/gif/anime-hug-50.gif", "https://acegif.com/wp-content/gif/anime-hug-83.gif", "https://acegif.com/wp-content/gif/anime-hug-52.gif", "https://acegif.com/wp-content/gif/anime-hug-73.gif", "https://acegif.com/wp-content/gif/anime-hug-19.gif", "https://acegif.com/wp-content/gif/anime-hug-2.gif", "https://acegif.com/wp-content/gif/anime-hug-6.gif", "https://acegif.com/wp-content/gif/anime-hug-84.gif", "https://acegif.com/wp-content/gif/anime-hug-10.gif", "https://acegif.com/wp-content/gif/anime-hug-30.gif", "https://acegif.com/wp-content/gif/anime-hug-13.gif", "https://acegif.com/wp-content/gif/anime-hug-17.gif", "https://acegif.com/wp-content/gif/anime-hug-20.gif", "https://acegif.com/wp-content/gif/anime-hug-81.gif", "https://acegif.com/wp-content/gif/anime-hug-22.gif", "https://acegif.com/wp-content/gif/anime-hug-23.gif", "https://acegif.com/wp-content/gif/anime-hug-24.gif", "https://acegif.com/wp-content/gif/anime-hug-25.gif", "https://acegif.com/wp-content/gif/anime-hug-26.gif", "https://acegif.com/wp-content/gif/anime-hug-28.gif", "https://acegif.com/wp-content/gif/anime-hug-31.gif", "https://acegif.com/wp-content/gif/anime-hug-32.gif", "https://acegif.com/wp-content/gif/anime-hug-33.gif", "https://acegif.com/wp-content/gif/anime-hug-35.gif", "https://acegif.com/wp-content/gif/anime-hug-36.gif", "https://acegif.com/wp-content/gif/anime-hug-37.gif", "https://acegif.com/wp-content/gif/anime-hug-40.gif", "https://acegif.com/wp-content/gif/anime-hug-41.gif", "https://acegif.com/wp-content/gif/anime-hug-43.gif", "https://acegif.com/wp-content/gif/anime-hug-44.gif", "https://acegif.com/wp-content/gif/anime-hug-45.gif", "https://acegif.com/wp-content/gif/anime-hug-46.gif", "https://acegif.com/wp-content/gif/anime-hug-47.gif", "https://acegif.com/wp-content/gif/anime-hug-48.gif", "https://acegif.com/wp-content/gif/anime-hug-53.gif", "https://acegif.com/wp-content/gif/anime-hug-54.gif", "https://acegif.com/wp-content/gif/anime-hug-60.gif", "https://acegif.com/wp-content/gif/anime-hug-62.gif", "https://acegif.com/wp-content/gif/anime-hug-68.gif", "https://acegif.com/wp-content/gif/anime-hug-70.gif", "https://acegif.com/wp-content/gif/anime-hug-71.gif", "https://acegif.com/wp-content/gif/anime-hug-72.gif", "https://acegif.com/wp-content/gif/anime-hug-74.gif", "https://acegif.com/wp-content/gif/anime-hug-76.gif", "https://acegif.com/wp-content/gif/anime-hug-77.gif", "https://acegif.com/wp-content/gif/anime-hug-80.gif", "https://acegif.com/wp-content/gif/anime-hug-82.gif", "https://acegif.com/wp-content/gif/anime-hug-88.gif", "https://acegif.com/wp-content/gif/anime-hug-94.gif", "https://media1.tenor.com/images/8fb9323e3270013e1f0d6c4d73e69a21/tenor.gif?itemid=7560705", "https://media1.tenor.com/images/9dd307122cc02a0dec959a072e783215/tenor.gif?itemid=7192427", "https://i.pinimg.com/originals/5e/07/70/5e0770c65a4f2669f2a751a5280231b8.gif", "https://media1.tenor.com/images/7ebe3d82d23d0ef6a8dd9d56347888b7/tenor.gif?itemid=8481995", "https://media1.tenor.com/images/38236017468622beae12b0ccc8f6e1ae/tenor.gif?itemid=7189187", "https://24.media.tumblr.com/f103b738f187825e43cc0ca5d0632c68/tumblr_n1j2sg2XtD1rewcrdo1_500.gif", "https://d.wattpad.com/story_parts/323765975/images/147f0800eb32162a975467768664.gif", "https://i.pinimg.com/originals/11/bb/43/11bb43404d06d1adabd683953fd8e294.gif", "https://i.pinimg.com/originals/f7/c0/8f/f7c08f19ec947f8a0f0b9b2eebced471.gif", "https://k38.kn3.net/taringa/1/8/7/9/1/0/64/bipolarae/E70.gif?917", "https://i.pinimg.com/originals/16/c5/d0/16c5d033f46a9ead3bf046d12ad4ebb5.gif", "https://pa1.narvii.com/6464/0fbb76c24af4c171ec8277b25579332e66f9f6eb_00.gif", "https://i.pinimg.com/originals/c5/19/0e/c5190e7b3a0357ad0980f00f5b8cebe6.gif", "https://i.pinimg.com/originals/f3/cc/47/f3cc47182b6c6b3159278913e810bf19.gif", "https://media1.tenor.com/images/c2e8c095f01a2c5a4ab20aa79d370876/tenor.gif?itemid=15150252", "https://media1.tenor.com/images/6d73b0a9cadef5310be4b6160d2f959a/tenor.gif?itemid=12099823", "https://media1.tenor.com/images/3d62384321435408f50823ae6f5ca033/tenor.gif?itemid=12270770", "https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750", "https://i.pinimg.com/originals/88/75/77/887577c90366fe724e1cce123bfd0ac1.gif", "https://media1.tenor.com/images/1b27c69585088b0e99e7007029401852/tenor.gif?itemid=15261239", "https://cdn.weeb.sh/images/BJ0sOOmDZ.gif", "https://cdn.weeb.sh/images/HJTWcTNCZ.gif", "https://cdn.weeb.sh/images/BkZngAYtb.gif", "https://cdn.discordapp.com/attachments/399448944889036801/698690651642134587/57f89d73b85d50f7f7f0d6c0cb79192e.gif", "https://cdn.weeb.sh/images/HkRwnuyuW.gif", "https://cdn.discordapp.com/attachments/399448944889036801/695692751164932186/chhug.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671869162749952/cAlH4eoeRTN.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671920660414474/ogkDVa1Bqgy.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671861134852176/bxAjfO2aVvH.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671891900071977/f3SntdcZ96M.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671913718841384/nQ0grWdYy23.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671845574115398/7ybNPEXCNAT.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671852653969469/Ava-eskfG2Z.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671836266823750/1u03LKie0I0.gif", "https://cdn.discordapp.com/attachments/708671169867546634/708671927723622400/Paz0aoGVVep.gif", "https://cdn.nekos.life/hug/hug_089.gif", "https://cdn.nekos.life/hug/hug_054.gif", "https://cdn.nekos.life/hug/hug_028.gif", "https://cdn.nekos.life/hug/hug_087.gif", "https://cdn.nekos.life/hug/hug_031.gif", "https://cdn.nekos.life/hug/hug_055.gif", "https://cdn.nekos.life/hug/hug_060.gif", "https://cdn.weebs.cl/images/rVl9dzqt.gif", "https://cdn.weebs.cl/images/0bUSg7Vq.gif", "https://cdn.weebs.cl/images/6hgY2K1t.gif", "https://cdn.weebs.cl/images/pe379pOt.gif", "https://cdn.weebs.cl/images/6VSPE_oc.gif", "https://cdn.weebs.cl/images/tLxawQxb.gif", "https://cdn.weebs.cl/images/y-1DCcK2.gif", "https://cdn.weebs.cl/images/ccoeCWQi.gif", "https://cdn.weeb.sh/images/S1gUsu_Qw-.gif", "https://cdn.weeb.sh/images/ByPGRkFVz.gif", "https://cdn.weeb.sh/images/BkBs2uk_b.gif", "https://cdn.weebs.cl/images/D0RAnnCU.gif", "https://cdn.nekos.life/hug/hug_033.gif", "https://cdn.weeb.sh/images/H1ui__XDW.gif", "https://cdn.nekos.life/hug/hug_079.gif", "https://cdn.weeb.sh/images/ByuHsvu8z.gif", "https://cdn.weeb.sh/images/ry6o__7D-.gif", "https://cdn.weeb.sh/images/rk6PsvOUM.gif", "https://cdn.nekos.life/hug/hug_083.gif", "https://cdn.nekos.life/hug/hug_032.gif", "https://cdn.nekos.life/hug/hug_027.gif", "https://cdn.nekos.life/hug/hug_076.gif", "https://cdn.weeb.sh/images/HJU2OdmwW.gif", "https://cdn.nekos.life/hug/hug_086.gif", "https://cdn.nekos.life/hug/hug_056.gif", "https://cdn.nekos.life/hug/hug_080.gif", "https://cdn.nekos.life/hug/hug_041.gif", "https://cdn.weeb.sh/images/BkFnJsnA-.gif", "https://cdn.discordapp.com/attachments/399448944889036801/700734341763825744/1563199860_original.gif", "https://cdn.weeb.sh/images/BkuUhO1OW.gif", "https://cdn.weebs.cl/images/qEJ3sTVy.gif", "https://cdn.weebs.cl/images/-GzbEDYC.gif", "https://cdn.nekos.life/hug/hug_062.gif", "https://cdn.discordapp.com/attachments/399448944889036801/586591986933301250/hug_11.gif", "https://cdn.discordapp.com/attachments/399448944889036801/650328951142612993/source.gif", "https://cdn.nekos.life/hug/hug_022.gif", "https://cdn.discordapp.com/attachments/399448944889036801/667893730484682762/93.gif"]
    let aleatoriohug = Math.floor(Math.random()*(Hug.length))
    let Hugtitle = [`**${message.author.username}** abrazó a **${usuario.user.username}**`, `**${usuario.user.username}** ha sido abrazado por **${message.author.username}**`, `**${message.author.username}** le dio un caluroso abrazo a **${usuario.user.username}**`, `**${message.author.username}** le ha dado un fuerte abrazo a **${usuario.user.username}**`]
    let aleatoriohugtitle = Math.floor(Math.random()*(Hugtitle.length))
    const embedhug = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(Hugtitle[aleatoriohugtitle])
    .setImage(Hug[aleatoriohug])
    message.channel.send(embedhug)
  }
  
  if(command === "time"){
    message.channel.send((new Date()).toString())
  }
  
  if(command === "test"){
    message.channel.send("tost")
  }

  
  if(command === "765567811") {
    let plantilla = "https://diimg.glitch.me/image/diimg1590212806762-31.png";
   
    let usuario = message.mentions.users.first() || message.author;
    
    let readPlantilla = await Jimp.read(plantilla);
    let readAvatar = await Jimp.read(usuario.displayAvatarURL({format: "png"}));
    
    readAvatar.resize(140, 140)
    
    readPlantilla.composite(readAvatar, 10, 60)
    
    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    
    readPlantilla.print(font, 200, 160, usuario.username)
    
    readPlantilla
      .getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);
       message.channel.send(new
       Discord.MessageAttachment(buffer, "profile.png"))
        
       })
  }
  
  if(command === "card2123"){
    
    let usuario = message.mentions.users.first() || message.author;
    
    let maskCircular = "https://diimg.glitch.me/image/diimg1590143591425-70.png"
    let card = "https://diimg.glitch.me/image/diimg1590209307079-89.png"
    
    let avatar = (usuario.displayAvatarURL({format: "png"}));
    let name = usuario.username;
    
    let readMask = await Jimp.read(maskCircular);
    let readAvatar = await Jimp.read(avatar); 
    let readCard = await Jimp.read(card);
    
    readMask.resize(150, 150);
    readAvatar.resize(150, 150).mask(readMask, 0, 0);
    
    readCard.resize(320, 350)
    
    readCard.composite(readAvatar, 80, 25)
    
    let font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    
    readCard.print(font32, 75, 250, name);
      readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);
      
      message.channel.send(new
       Discord.MessageAttachment(buffer, "nombre.png"))
    })
  }
  
  if(command === "avatarprueba"){
    
    let usuario = message.mentions.users.first() || message.author;
    
    let maskCircular = "https://diimg.glitch.me/image/diimg1590143591425-70.png"
    
    let avatar = (usuario.displayAvatarURL({format: "png"}));
    
    let readMask = await Jimp.read(maskCircular);
    let readAvatar = await Jimp.read(avatar); 
    
    readMask.resize(150, 150);
    readAvatar.resize(150, 150).mask(readMask, 0, 0);
    
      readAvatar.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);

         message.channel.send(new
       Discord.MessageAttachment(buffer, "nombre.png"))
    })
        
  }
  
  if(command === "prueba"){
  
   let card = "https://diimg.glitch.me/image/diimg1590262617314-79.png"
   let maskCircular = "https://diimg.glitch.me/image/diimg1590143591425-70.png"
     let usuario = message.mentions.users.first() || message.author;
   let avatar = (usuario.displayAvatarURL({format: "png"})); 
   
   
  if(!levels_db.tiene(`${message.guild.id}`)) return message.channel.send("¡Este servidor no tiene ningún usuario en el Ranklist!")
   let name = usuario.username;
    if(!levels_db.tiene(`${message.guild.id}.${usuario.id}`)) return message.channel.send("Este usuario no cuenta con XP ni Nivel.")
    let { xp, nivel } = await levels_db.obtener(`${message.guild.id}.${usuario.id}`)
    let levelup = 5 * (nivel ** 2) + 50 * nivel + 100
    
    let readMask = await Jimp.read(maskCircular);
    let readAvatar = await Jimp.read(avatar); 
    let readCard = await Jimp.read(card);
    
    readMask.resize(300, 300)  
    readAvatar.resize(300, 300).mask(readMask, 0, 0);
    readCard.resize(1024, 450)
    readCard.composite(readAvatar, 300, 25)
    
    let font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    let font64 = await Jimp.loadFont("https://raw.githubusercontent.com/Liimiitz/fortniters/master/storage/fonts/Burbank26px.fnt");
    
    readCard.print(font64, 325, 325, name);
    readCard.print(font32, 10, 70, `XP: ${xp}/${levelup}`)
    readCard.print(font32, 10, 30, `Nivel: ${nivel}`)
    
    readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);
    
            message.channel.send(new
      Discord.MessageAttachment(buffer, "rank.png"))
    })
   }
  
  if(command === "kick"){
    
      let usuariok = message.mentions.users.first();

    
    if(!usuariok) return message.channel.send("¡Menciona a un usuario!").then(msg => msg.delete({timeout: 5000}))
    if(usuariok === message.author) return message.reply("no te puedes kickear a ti mismo.").then(msg => msg.delete({timeout: 5000}))
   if(!args[1]) return message.channel.send("Necesitas escribir un motivo.").then(msg => msg.delete({timeout: 5000}))
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("¡No tienes los permisos suficientes para usar este comando!.").then(msg => msg.delete({timeout: 5000}))
    if (!message.guild.member(usuariok).kickable) return message.reply('no puedo kickear al usuario mencionado.');
    const guild = message.guild.name;
    
    const embedk = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Has sido kickeado de **${guild}**`)
    .setThumbnail(usuariok.avatarURL())
    .addField("Usuario", `**${usuariok.tag}**`)
    .addField("Motivo", args.slice(1).join(' '))
    .addField("ID", usuariok.id)
    .addField("Moderador", `**${message.author.username}**`)
    
    message.guild.member(usuariok).kick(args.slice(1).join(' ')).reason
    usuariok.send(embedk)
    message.channel.send(embedk)
  }
  
  if(command === "ban") {
    

        
    let usuariob = message.mentions.users.first()
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("¡No tienes los permisos suficientes para usar este comando!.").then(msg => msg.delete({timeout: 5000}))
    if(!usuariob) return message.channel.send("¡Menciona a un usuario!").then(msg => msg.delete({timeout: 5000}))
    if(usuariob === message.author) return message.reply("no te puedes banear a ti mismo.").then(msg => msg.delete({timeout: 5000}))
    if(!args[1]) return message.channel.send("Necesitas escribir un motivo.").then(msg => msg.delete({timeout: 5000}))
    if (!message.guild.member(usuariob).bannable) return message.reply('no puedo banear al usuario mencionado.');
    const guild = message.guild.name;
    
    const embedb = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Has sido baneado de **${guild}**`)
    .setThumbnail(usuariob.avatarURL())
    .addField("Usuario", `**${usuariob.tag}**`)
    .addField("Motivo", args.slice(1).join(' '))
    .addField("ID", usuariob.id)
    .addField("Moderador", `**${message.author.username}**`)
    
    message.guild.member(usuariob).ban(args.slice(1).join(' ')).reason
    usuariob.send(embedb)
    message.channel.send(embedb)
  }
  
  if(command === "fruits") {
    try {
      await message.react("707002075485175908"); //Pikacool
      await message.react("699749018934444142"); //Confirmo
      await message.react("699721441733640282"); //Ahegao
      await message.react("703687094723149878"); //Abrigaodepana
      await message.react("698278788513136700"); //Gatomirando
      await message.react("702702067688538113"); //Reeeeee
      await message.react("698349902182219846"); //Gato arcoiris
      await message.react("698351657137995848"); //Furret bailando
      await message.react("699386057543647293"); //Waifu acostada
      await message.react("707018653513810030"); //Yoshi
      await message.react("698349306238992405"); //Neko arcoiris
      await message.react("699385489500667964") //Nezuko2
      await message.react("707016321723924540") //Suck
    } catch (error) {
      console.error("Uno de los emojis ha fallado al colocarse.");
    }
  }
  
  if (command === "ping") {
    let ping = Math.floor(message.client.ws.ping);
      const embed = new Discord.MessageEmbed()
      
      .setColor("RANDOM")
      .setTitle("¿Pong?")
      
      let msg = await message.channel.send(embed)
      setTimeout(() => {
      
      const embed2 = new Discord.MessageEmbed()
      
      embed2.setColor("RANDOM")
      embed2.setDescription("Tengo una latencia de " + ping + "ms")
      
      msg.edit(embed2)
    }, 1000)
  }
  
  if(command === "invite") {
    const userinv = message.author;
    let embedinv = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("¿Deseas invitarme a tu servidor? <:pandalove:727034490957856788>")
    .setDescription(`[¡Invítame! <a:BandoriYukina:727032890134888549>](https://discord.com/oauth2/authorize?client_id=698632594765643857&scope=bot&permissions=2146958847)`)
    return message.channel.send(embedinv)
  }
  
  if(command === "ext") {
    if(!args[0]) return message.channel.send("Debes ingresar un texto.")
    var cadena = args.join(' ')
    cadena = cadena.replace(/[aeou]/ig, "i");
    return message.channel.send(cadena)
  }
  
  if(command === "newticket") {
    let ticketmem = message.author.username;
    let ticket = await message.guild.channels.create("Ticket de " + ticketmem)
    const embedticket = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Ticket", "https://www.reptiland-le-renouveau.fr/imgs/ticket.gif")
    .setTitle("¡Bienvenido a tu ticket!")
    .setThumbnail("https://gifimage.net/wp-content/uploads/2018/06/ticket-gif-5.gif")
    .setDescription("Recuerda, el staff no siempre responderá tu duda al instante.")
    .addField("No menciones al staff por ayuda, sé paciente.", "Espero que todas tus dudas sean resueltas <3")
    .addField("Para el staff", "Puedes cerrar el ticket con `closeticket`")
    .setFooter("`ticket` para obtener ayuda más detallada sobre el comando `newticket`")
    message.channel.send("Tu ticket ha sido creado con éxito.").then(msg => msg.delete({timeout: 5000}))
    ticket.send(embedticket)
  }

  if(command === "love") {
   
    let lovecard = "https://cdn.discordapp.com/attachments/716299501715062826/716980452505944084/love.jpg"
    let maskCircular = "https://diimg.glitch.me/image/diimg1590143591425-70.png"
    let maskCircular2 = "https://diimg.glitch.me/image/diimg1590143591425-70.png"
    
    const usuariolove = message.mentions.users.first();
    if(!usuariolove) return message.channel.send("Menciona a un usuario.")
    const randomlove = Math.floor(Math.random() * 100);
    let avatar = (usuariolove.displayAvatarURL({format: "png"}));
    let avatar2 = (message.author.displayAvatarURL({format: "png"}));
    let readCard = await Jimp.read(lovecard);
    let readMask = await Jimp.read(maskCircular);
    let readMask2 = await Jimp.read(maskCircular2); 
    let readAvatar = await Jimp.read(avatar);
    let readAvatar2 = await Jimp.read(avatar2);
    
    
    let heard = "";
    
      if(randomlove < 50) {
    readMask.resize(300, 300)
    readMask2.resize(300, 300)
    readAvatar.resize(300, 300).mask(readMask, 0, 0);
    readAvatar2.resize(300, 300).mask(readMask2, 0, 0);
    readCard.resize(1024, 450)
    readCard.composite(readAvatar, 690, 40)
    readCard.composite(readAvatar2, 20, 40)
        heard=":broken_heart: ";
        let fuentesita = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        readCard.print(fuentesita, 10, 370, "Quizás no sea la persona indicada.")
        
      }else if(randomlove < 80) {
    readMask.resize(300, 300)
    readMask2.resize(300, 300)
    readAvatar.resize(300, 300).mask(readMask, 0, 0);
    readAvatar2.resize(300, 300).mask(readMask2, 0, 0);
    readCard.resize(1024, 450)
    readCard.composite(readAvatar, 690, 40)
    readCard.composite(readAvatar2, 20, 40)
        heard=":heart: ";
        let fuente = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        readCard.print(fuente, 270, 370, "Adelante... 7w7")
        
      }else if(randomlove < 101) {
    readMask.resize(300, 300)
    readMask2.resize(300, 300)
    readAvatar.resize(300, 300).mask(readMask, 0, 0);
    readAvatar2.resize(300, 300).mask(readMask2, 0, 0);
    readCard.resize(1024, 450)
    readCard.composite(readAvatar, 690, 40)
    readCard.composite(readAvatar2, 20, 40)
        heard=":sparkling_heart: "
         let fuente64 = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
         readCard.print(fuente64, 230, 370, "¡Son la pareja perfecta!")
        
      }
    
    readCard.getBuffer(Jimp.MIME_PNG, function(err, buffer) {
      if(err) return console.log(err);
    
     message.channel.send(`El porcentaje de amor entre **${message.author.username}** y **${usuariolove.username}** es de:\n` + heard + ' **' + randomlove + ' %**' + ' ' + heard, new
      Discord.MessageAttachment(buffer, "love.png"))
     })
   }
  
  if(command === "js") {
    const embedargumentos = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("¿Necesitas ayuda?")
    .setDescription("Este comando sirve para crear un mensaje con **MarkDown JS**")
    .addField("¿Me puedes dar un ejemplo del uso de este comando?", "¡Claro!, aquí un pequeño ejemplo:")
    .setImage("https://cdn.discordapp.com/attachments/713239309083344897/716843912073052221/unknown.png")
    if(!args[0]) return message.channel.send(embedargumentos)
    message.channel.send("```js\n" + args.join(' ') + "\n```")
    message.delete()
  }
  
  if(command === "jsembed") {
    const embedargs = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("¿Necesitas ayuda?")
    .setDescription("Este comando sirve para crear un mensaje embed con **MarkDown JS**")
    .addField("¿Me puedes dar un ejemplo del uso de este comando?", "¡Claro!, aquí un pequeño ejemplo:")
    .setImage("https://cdn.discordapp.com/attachments/713239309083344897/716836100785569963/unknown.png")
    if(!args[0]) return message.channel.send(embedargs)
   
    const embedjs = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("```js\n" + args.join(' ') + "\n```")
    .setFooter(`By: ${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
    return message.channel.send(embedjs)
    message.delete()
  }
  
  if(["covid", "covid19", "covid-19", "coronavirus"].includes(command)) {

    try{
    let res = await require('node-fetch')(`https://corona.lmao.ninja/v2/all?yesterday=false`);
    let data = await res.json();
    let covid = new Discord.MessageEmbed() // En caso de usar v11 debes reemplazar MessageEmbed por RichEmbed
    .setTitle('Covid-19') 
    .setThumbnail("https://queplan.cl/assets/images/landings/coronavirus/coronavirus.png")
    .addField('Casos', data.cases.toLocaleString(), true) // Obtenemos la cantidad de casos de COVID-19
    .addField('Casos hoy', data.todayCases.toLocaleString(), true) // Obtenemos la cantidad de casos de COVID-19 nuevos hoy
    .addField('Muertes', data.deaths.toLocaleString(), true) // Obtenemos la cantidad de muertes por COVID-19
    .addField('Muertes hoy', data.todayDeaths.toLocaleString(), true) // Obtenemos la cantidad de muertes por COVID-19 hoy
    .addField('Condición critica', data.critical.toLocaleString(), true) // Obtenemos la cantidad de gente en Condición critica
    .addField('Recuperados', data.recovered.toLocaleString(), true) // Obtenemos la cantidad de gente que se ha recuperado
    .setColor('FF0000')
    message.channel.send(covid)
}catch(e){
message.channel.send('Ha ocurrido un error!') // De repente se cae la API, con este try catch evitaremos un error en caso de que se haya caído 
}
  }
  
if(command === "car") {
    if(!args[0]) return message.channel.send("Menciona a un usuario.").then(msg => msg.delete({timeout: 5000}))
   
  if(usuario === message.member) return message.channel.send("No te puedes mencionar a ti mismo.").then(msg => msg.delete({timeout: 5000}))

 
// Obtengo una de las imágenes por mención
 
let user = message.mentions.users.first()
 
let  img = await weez.coche(message.author.displayAvatarURL({format: 'png'}), user.displayAvatarURL({format: 'png'}))
 
message.channel.send({files: [img]})

}
  
  if(command == "npm") {
    
    
let npmSearch = require('npm-module-search')

let modulo = args.join(" ").toLowerCase()

if (!args[0]) {
  const embedmodul = new Discord.MessageEmbed()
  .setColor("#a00f0f")
  .setTitle("¿Necesitas ayuda?")
  .setDescription("¡Debes ingresar un módulo para realizar la búsqueda!")
  .setImage("https://cdn.discordapp.com/attachments/713239309083344897/717158896782802944/unknown.png")
  .setFooter("¿Aún tienes dudas? ¡Envíanoslas a nuestras redes sociales!")
return message.channel.send(embedmodul);
}    
    
  
npmSearch.search(modulo, function (err, modules) { 

try {
  
var module = modules[0]
const embed = new Discord.MessageEmbed()
.setThumbnail('https://images-ext-1.discordapp.net/external/-NXRfQPM329Ppw6RFeMnwDmLyqPo8Nj9gxy8vNBIuJs/https/i.imgur.com/8DKwbhj.png?width=72&height=28')
.setTitle(module.name + ' - npmjs Package Información')
.addField("**Descripción:**", module.description)
.addField("**Creador:**", module.author.name, false)
.addField("**Creado:**", moment(module.date).format("DD/MM/YYYY, HH:mm:ss"), false)
.addField("**Versión:**",  module.version, false)
.addField("**NPMjs Package:**", `[NPM Link](${module.links.npm}})`, false)
.addField("**Github:**",  `${module.links.repository ? module.links.repository.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No tiene."}`, false)
.setTimestamp()
.setColor("#a00f0f")

message.channel.send(embed)
  
} catch (err) {
  
  return message.channel.send(`Este módulo no existe.`)
  
}
    })
  
  
  }
  
 if(command === "chiste") {

    //Aqui empezamos a obtener los datos de la API
    superagent.get("https://risapi.glitch.me/").end((err, res) => {
        let body = res.body;

        //Finalmente enviamos el "chiste" que nos proporciona la API
        message.channel.send(body.chiste)
    
       })
   }
  
  if(command === "olvido") {
  
  if(!args[0]) return message.reply("mencione a un usuario"); 

 let userolvido = message.mentions.users.first()
 
let img = await weez.olvido(userolvido.displayAvatarURL({format: 'png'}))
 
message.channel.send({files: [img]})

   }
  

 
  if(command === "gay") {
        let user = message.mentions.users.first() || message.author;
    
const embed = new Discord.MessageEmbed()
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':gay_pride_flag: ';
      var Randomcalc50 = ["Eres menos gay de lo que pensaba...", "Lo acabo de descubrir, que raro...", "Nunca dudé de tu sexualidad.", "Tal vez algo ha fallado...", "Oh, creo que algo ha fallado. ¡Vuelve a intentarlo!"]
      var random50 = Math.floor(Math.random()*(Randomcalc50.length))
      embed.setFooter(Randomcalc50[random50])

    }else if(random < 80){
        heard=':gay_pride_flag:  ';
      var Randomcalc80 = ["Supongo que habré fallado al calcular...", "0 Fallos, esto es correcto ^^", "Nunca dudé de tu sexualidad.", "¿Deberías preocuparte?", "¡No te preocupes!"]
      var random80 = Math.floor(Math.random()*(Randomcalc80.length))
      embed.setFooter(Randomcalc80[random80])
        
    }else if(random < 100){
        heard=':gay_pride_flag: ';
      var Randomcalc100 = ["Pues...", "¿Ya tienes novio? ^^", "¿Te importa si te doy un abrazo?", "¿Estaría bien intentarlo de nuevo?", "¡Venga, intentémoslo de nuevo...!", "Mis cálculos son correctos..."]
      var random100 = Math.floor(Math.random()*(Randomcalc100.length))
      embed.setFooter(Randomcalc100[random100])

    }
            
    embed.setAuthor(user.username+', eres:')
    embed.setDescription(heard+' **'+random+' Gay %**'+' '+heard)
    embed.setColor("RANDOM")

message.channel.send(embed);
  }
});





















// Snipe //


client.snipes = new Map();
 


client.on("messageDelete", async (message) => {

  if(message.author.bot) return; 
  
  const canal = message.mentions.channels.first() || message.channel
  
  client.snipes.set(canal.id, {
    content: message.content,
    author: message.author.tag,
    avatar: message.author.displayAvatarURL({format: 'png', dynamic: true}),
    image: message.attachments.first() ? message.attachments.first().proxyURL : null 
  })
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Mensaje eliminado LOGS //
  

client.on("messageDelete", async (message) => {
 
 
  var chx = db2.get(`modlogchannel_${message.guild.id}`)
  
  const wCanal = client.channels.cache.get(chx)
  
  if(!wCanal) return;

  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Mensaje borrado")
    .addField(`**Autor:**`, message.author)
    .addField(`**Contenido:**`, message.content)
    .addField(`**Canal:**`, `<#${message.channel.id}>`)
    
  wCanal.send(embed) 
  
});


client.login(process.env.TOKEN); 