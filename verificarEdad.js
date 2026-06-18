//Ejercicio2: Verificacion de Edad para Suscripcion
const verificarEdad = (edad) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(edad>18){
                resolve("Acceso concedido. Bienvenido a la plataforma");
            }else{
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000)
    })
}

// Caso exitoso
verificarEdad(20)
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));

// Caso fallido
verificarEdad(10)
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));
