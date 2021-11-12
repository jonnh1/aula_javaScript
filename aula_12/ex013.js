var agora = new Date()
var hora = agora.getHours()

//console.log(`Agora são exatamente ${hora} Horas.`)
if (hora < 12 ) {
    console.log(`Agora são exatamente ${hora} Horas da manhã.`)
} else if (hora < 18){
    console.log(`Agora são exatamente ${hora} Horas da tarde.`)
}else if(hora>23){
    console.log(`Hora invalida`)
}else{
    console.log(`Agora são exatamente ${hora} Horas da noite.`)}

    
    
