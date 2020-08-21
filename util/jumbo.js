const emojiNames = require("emoji-unicode-map");
const emojiImages = require("emoji-img");




module.exports = {
  nombre: "jumbo",
  alias: ["emoji"],
  descripcion: "Este comando hace un emoji de tamaño regular.",
  run: (client, message, args) => {
 

 
if (!args[0]) { // Si no se especifica ningún emoji, devolver un mensaje y parar la ejecución.
        message.channel.send(`Debes introducir un emoji.`);
        return;
    };
 
    let emojiRegExp = /<a?:[^:]+:(\d+)>/gm, // Esto servirá para conseguir la ID de un emoji personalizado.
        emoji, // Esta variable se usará más adelante, por ahora se queda sin definir.
        unicodeEmojiName = emojiNames.get(args[0]); // Intentar sacar el nombre del emoji (por si es unicode)
 
    if (!unicodeEmojiName) { // Si el emoji es personalizado...
        if (args[0].startsWith("<")) { // Si se usa el emoji, obtiene la ID
            let emojiID = emojiRegExp.exec(args[0])[1];
            emoji = client.emojis.cache.get(emojiID);
        }
        else { // Si no se pasa el emoji, intenta obtenerlo mediante la ID
            emoji = client.emojis.cache.get(args[0]);
        };
 
        if (!emoji) { // Si el emoji no existe o no se encuentra, se para.
            message.channel.send(`Emoji no encontrado.`);
            return;
        };
 
        message.channel.send({ // Manda el archivo con el emoji.
            files: [
                `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`
            ]
        });
        return;
    };
 
    // Si el emoji no es personalizado...
 
    let unicodeEmojiImage = emojiImages.get(unicodeEmojiName); // Busca una imágen el local con el nombre que conseguimos antes.
 
    if (!unicodeEmojiImage) { // Si tampoco existe, se para el programa.
        message.channel.send(`${client.cEmojis.cross} Emoji no encontrado.`);
        return;
    };
 
    message.channel.send({ // Si existe, lo manda al canal.
        files: [
            {
                attachment: unicodeEmojiImage,
                name: unicodeEmojiName + ".png"
              }
           ]
        })
     }
  }