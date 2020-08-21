module.exports = {
  nombre: "editar",
  alias: ["edit"],
  run: async (client, message, args) => {
 
try {
    
    const ID = "461642640472014849"
    
    if(message.author != ID) return message.channel.send(":x: **|** Debes ser desarrollador de Candy para utilizar este comando.")
    
if(!args[0]) return message.channel.send("Debes escribir la ID de un mensaje (debe ser uno mío).")
    
if(isNaN(args[0])) return message.channel.send(`Debes ingresar una ID válida.`)
  
if(!args[1]) return message.channel.send("Debes escribir un mensaje, no puedo editar un mensaje y dejarlo vacío.")    
    
    
message.channel.messages.fetch(args[0]).then(x => x.edit(args.slice(1).join(' ')))
  
  message.delete()
    
} catch (err) {
  
message.channel.send(`Debes ingresar una ID válida.`)

}
  
  
}
  
}


