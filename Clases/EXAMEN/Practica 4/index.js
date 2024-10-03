class Nodo {
    constructor(data) {
        this.back = null;  // por que no hay un nodo anterior 
        this.data = data;  //data, propiedad que almacena un valor que queramos
        this.next = null;  // por que es el iltimo nodo
    }
}

let nodo1 = new Nodo(10);  
let nodo2 = new Nodo(20);  
let nodo3 = new Nodo(30);  

nodo1.data = 100;  
nodo2.data = 200;  // Cambia el valor de data
nodo3.data = 300;  

nodo1.next = nodo2; 
nodo2.next = nodo3; 
nodo3.next = null; 


nodo1.back = null;  // no apunta a ningun lado
nodo2.back = nodo1; // apunta al nodo1
nodo3.back = nodo2; // apunta al nodo2

console.log("Nodo 1:", nodo1);
console.log("Nodo 2:", nodo2);
console.log("Nodo 3:", nodo3);

