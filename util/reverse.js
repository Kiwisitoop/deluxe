module.exports = {
  nombre: "reverse",
  alias: ["reversa", "rever", "asrever"],
  descripcion: "Este comando sirve para revertir los argumentos.",
  run: async (client, message, args) => {
    
    if(!args[0]) return message.channel.send(":x: **|** Debes ingresar un texto.")
        
    const reverse = args.join(' ').split('').reverse().join('')
    
    message.channel.send(reverse)
    
  }
}