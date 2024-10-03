let Examen = [];

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100) + 1;
    Examen.push(numero);
}

console.log(Examen);

Examen.sort((a, b) => a - b)    // SI (A) ES MENOR QUE (B) ENTONSES IRA PRIMERO (A)
                                //PERO SI (A) ES MAYOR QUE (B) ENTONSES (B) IRA PRIMERP
console.log(Examen)

let tres = Examen.filter((num, index ) => index >= 3);
console.log(tres);

Examen.push(1,2,3)
console.log(Examen)