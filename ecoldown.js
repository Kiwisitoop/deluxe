let eco_cooldown = new Map();


function Ecoverificar(guild, user) {
  if(eco_cooldown.has(guild)) {
    if(eco_cooldown.get(guild).includes(user)) {
      return true
    }  
    return false
  
  }else{
    eco_cooldown.set(guild, [])
    return false
    
  }


}

function Ecoagregar(guild, user) {
  eco_cooldown.get(guild).push(user)
  setTimeout( () => {
    Ecoremover(guild, user)
  }, 300000)
}

function Ecoremover(guild, user) {
  let ecoservidores = eco_cooldown.get(guild)
  ecoservidores.splice(ecoservidores.indexOf(user), 1)
}

module.exports = {
  Ecoverificar,
  Ecoagregar,
  Ecoremover
}