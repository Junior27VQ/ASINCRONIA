//new project
//Simulador de Retiro  de Cajero Automatico
const retirarDinero=(monto)=>{    
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const saldoDisponible = 500;
            if(monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve("Retiro exitoso de $"+monto+". Saldo restante: $"+saldoRestante);
            }else {
                reject("Fondo insuficiente. Limite de retiro: $500")
            }
            resolve("Retiro exitoso de: "+monto);
        }, 1500);
        
    });
}

// Caso exitoso
retirarDinero(200)
    .then((mensaje) => console.log(mensaje)) // Esto se ejecuta si la promesa se resolvió
    .catch((error) => console.log(error));   // Esto se ejecuta si la promesa falló

// Caso fallido
retirarDinero(600)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
