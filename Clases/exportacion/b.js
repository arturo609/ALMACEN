const PI = 3.14

let nombre = 'Alan'


function test(dato){
    console.log(dato)
}

class Alumno {
    constructor(...dato){
        this.carrera = dato[0]
        this.matricula = dato[1]
        this.seccion = dato[2]
        this.turno = dato[3]

    }
    getCarrera(){
        return this.carrera

    }
}


export {PI, 
        nombre, 
        test, 
        Alumno} 
// ESTA ES UNA FORMA MAS FACIL DE EXPORTAR, Y TAMBIEN PARA SABER QUE PAQUETES ESTA EXPORTANDO
