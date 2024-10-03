let barras = {
    Nombre: 'arturo',
    Gustos: 'exoticos'
}

let a = barras
let b = barras

console.log(a)
console.log(b)

a.Nombre = 'Armando';

console.log(a)
console.log(b)

//¿Qué observas?
//que "a" y "b" se han cambiado a pesar de que nomas se le dijo a "a" que cambiara
//Explica por qué se produce este comportamiento y cómo evitarlo.
//tienen la misma direccion en la memora ram, para evitarlo solo se copia las propuedades

