function dividir(num1, num2) {
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Error: solo numeros números.";
    }
    
    
    if (num2 === 0) {
        return "Error: No se puede dividir entre cero.";
    }

    
    return num1 / num2;
}


console.log(dividir(10, 2)) 
console.log(dividir(10, 0))
console.log(dividir("diez", 2)) 
