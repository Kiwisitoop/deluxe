let servidores_cooldown2 = new Map();


function cVerificar(guild, user) {
  if(servidores_cooldown2.has(guild)) {
    if(servidores_cooldown2.get(guild).includes(user)) {
      return true
    }  
    return false
  
  }else{
    servidores_cooldown2.set(guild, [])
    return false
    
  }


}

function cAgregar(guild, user) {
  servidores_cooldown2.get(guild).push(user)
  setTimeout( () => {
    cRemover(guild, user)
  }, 86400000)
}

function cRemover(guild, user) {
  let servidores = servidores_cooldown2.get(guild)
  servidores.splice(servidores.indexOf(user), 1)
}

module.exports = {
  cVerificar,
  cAgregar,
  cRemover
}