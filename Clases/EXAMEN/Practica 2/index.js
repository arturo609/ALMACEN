let Persona = {
    Nombre: 'Arturo',
    Edad: 19,
    Ciudad: 'Gomez'
}


console.log(Persona)
Persona.hobbies = ['leer', 'correr', 'jugar video juegos', 'mirar el telefono']
console.log(Persona)

function incremento(Persona){
    let Nuevoser={
        ...Persona, Edad:(Persona.Edad) +1
        
    }
    return Nuevoser;
}
let Mayor = incremento(Persona)
console.log(Mayor)

delete Persona.Edad;
console.log(Persona)
