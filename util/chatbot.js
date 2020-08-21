const chatbot = require("espchatbotapi")

module.exports = {
  nombre: "hablar",
  alias: ["chat", "chatbot"],
  descripcion: "Este comando sirve para hablar con Candy.",
  run: async (client, message, args) => {
    
    const chatbot = require("espchatbotapi")
//Manda el mensaje a la API y te devuelve una respuesta
   chatbot.hablar("hola").then(respuesta => {
     console.log(respuesta)
   })
//En la consola te responde: "Hola, que tal"

// Comando para obtener respuesta con los usuarios.
// Para esta opcion debe tener definido 'args'

    chatbot.hablar(args).then(respuesta => {
    message.channel.send(respuesta)

    })
  }
}