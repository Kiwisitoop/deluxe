const Discord = require('discord.js')
const db2 = require('quick.db')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

module.exports = {
  nombre: "shop",
  alias: ["tienda", "tiendita"],
  run: async (client, message, args) => {
    

const embed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(`¡Bienvenido a la Tienda!`)
.setDescription(`Desde aquí podrás comprar aquellas preciosas llaves que te darán acceso a nuevos comandos ocultos ^^\n\nLlave: ${process.env.LLAVENORMAL} x1 **|** Precio: 1.000${process.env.MONEDA} **|** Duración: 5 días.\n\nLlave: ${process.env.LLAVENORMAL} x5 **|** Precio: 10.000${process.env.MONEDA} **|** Duración: 10 días.`)
.setFooter(`Comando en desarrollo...`)

message.channel.send(embed)
    
  }
}