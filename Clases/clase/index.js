//FUNCIONES//
/*
// funcion sin rentorno
function uno(){
    let a = 9
    let b = 10
    let suma = a + b
    console.log('funcion uno',suma)
}

uno()


//funcion con parametros pero sin rentorno
function dos(a,b){
    let suma = a + b
    console.log('funcion dos',suma)

}
dos(5,6)

//funcion sin parametros pero con rentorno
function tres(){
    let a =7
    let b = 15
    let suma = a + b 
    return suma
}

console.log('la funcion tres retorna:', tres())

//funcion con parametros y con retorno
function cuatro(a,b){
    let suma = a + b
    return suma

}
console.log('la funcion cuatro retorna :',cuatro(3,2))

*/

/*
let f5 = function(){
    return 6
}
console.log(f5())

let f6 = ()=>{
    return 7
}
console.log(f6())

let obj = {
    nombre: 'arturo',
    edad: 19

}
obj.carrera = 'ingenieria'
//obj[o] = 3


//console.log(obj);
//console.log(obj.nombre)

let peop1= 'soy global'
window.prop1 = 'prop global'
let obj2 = {
    prop1: 'soy local',
    prop2: 'juan',
    prop3: {
        prop31: true,
        prop32: false,
        prop33: [44, 66, 77,{
            uno: 1,
            dos: 2,
            tres: 3,
            cuatro: [22, 4 , 5]
        }]
    
    },
    prop4: function(){return this.prop1},
    prop5: ()=> {return this.prop1}
}

/*

/*
console.log(obj2)
console.log(obj2.prop4())
console.log(obj2.prop5())
console.log(window
console.log(obj2.prop3.prop33.cuatro[3].cuatro[2])

let J = prompt('teclea una cantidad')
let suma = Number(J) + 9
console.log(suma)
*/
//sentimetros, kilometros y millas, resolver diagrama de flujo.


//let x = 5000
//alert (`valor de x : ${x} y ${x}`)


/*
let o = {
    nombre: 'juan',
    profecion: 'mecanico'
}

let a = o
console.log(o)
console.log(a)
a.nombre = 'pepe'
console.log(a)
console.log(o)
*/

/*
let s = 't'
let f = s
    let s: string
console.log(s)
console.log(f)
f = 'hhhh'
console.log(f)
console.log(s)
*/

// CLASES //#########################################################################################################3
/*
class Animal{
    constructor(tipo, genero, edad, color){
        this.tipo = tipo
        this.genero = genero
        this.edad = edad
        this.color = color

    }
    
    setTipo(dato){
        this.tipo = dato
        
    }
    getTipo(){
        return this.tipo
    }
    
}

class Perro extends Animal{
    constructor(tipo, genero, edad, color, raza){
        super(tipo, genero, edad, color, raza)
        this.raza = raza

    }
}
let mamiferos = new Animal('terrestre','canino', '15', 'cafe')
let buldog = new Perro('terrestre', 'canino', '15', 'cafe', 'buldog')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*##################################################################################
// TAREA //
//clase veiculo haser que herede en estas clases ----> terrestres , acuaticos , volador
class veiculo{
    constructor(dimenciones, energia, transporte, color, pasajero){
        this.dimenciones = dimenciones
        this.energia = energia
        this.transporte = transporte
        this.color = color
        this.pasajero = pasajero
    }
}

class terrestres extends veiculo{
    constructor(dimenciones, energia, transporte, color, pasajero, ruedas, esqueleto){
        super(dimenciones, energia, transporte, color, pasajero, ruedas, esqueleto)
        this.ruedas = ruedas
        this.esqueleto = esqueleto
    }
}

class pesado extends terrestres{
    constructor(dimenciones, energia, transporte, color, pasajero, ruedas, esqueleto, fuego){
        super(dimenciones, energia, transporte, color, pasajero, ruedas, esqueleto, fuego)
        this.fuego = fuego
    }

}
let grande = new pesado('grande', 'conbustion', 'militar', 'rojo', 'de 4 personas', '4', 'blindado', 'poder de fuego')
let suelo = new terrestres('grande', 'conbustion', 'personal', 'rojo', 'de 4 personas', '4', 'acero inoxidable')
///////////////////////////////////////////////////////////////////////
class acuaticos extends veiculo{
    constructor(dimenciones, energia, transporte, color, pasajero, blindado, sumergible){
        super(dimenciones, energia, transporte, color, pasajero, blindado, sumergible)
        this.blindado = blindado
        this.sumergible = sumergible
    }
}
class publico extends acuaticos{
    constructor(dimenciones, energia, transporte, color, pasajero, blindado, sumergible,crusero){
        super(dimenciones, energia, transporte, color, pasajero, blindado, sumergible, crusero)
        this.crusero = crusero
    }
} 
let crusero = new acuaticos('mediano', 'conbustion', 'jobi ', 'gris', 'compradores', 'no', 'si',)
let profundo = new acuaticos('gigante', 'nuclear', 'de militares', 'gris', 'autorizados', 'super blindado', 'si')
////////////////////////////////////////////////////////////////////////
class volador extends veiculo{
    constructor(dimenciones, energia, transporte, color, pasajero, uso, proposito){
        super(dimenciones, energia, transporte, color, pasajero, uso, proposito)
        this.uso = uso
        this.proposito = proposito 
        
    }
}
class comercial extends volador{
    constructor(imenciones, energia, transporte, color, pasajero, uso, proposito, dibertido){
        super(menciones, energia, transporte, color, pasajero, uso, proposito, dibertido)
        this.dibertido = dibertido
    }
}
let deporte = new volador('grande', 'sustentacion', '1 personas', 'gris', 'deportista', 'deportivo', 'deportivo', 'si')
let vuelo = new volador('grande', 'conbustion', '2 personas', 'gris', 'pilotos', 'militar', 'belico')

//#############################################################################################################################################
*/


// IMPORTACIONES Y EXPORTACIONES//

/*
let arr = [1, 2, 7, 8]   SE ESTA FORMANDO UN ARREGLO EN LA MEMORIA RAM

let a = arr             a = AL ARREGLO 
let c = [...arr]        c = A OTRO ARREGLO QUE SE FORMA EN LA MEMORIA RAM (...arr)= ESTA COPIANDO LOS VALORES Y NO EL ARREGLO
arr [12] = 55           

console.log(a)
console.log(c)
*/

/*
function uno(...dato){
    for (let i = 0; i<dato.length; i++){
        console.log(dato[i])

    }
}

uno(1,2,3,4,5,6,7)
*/

