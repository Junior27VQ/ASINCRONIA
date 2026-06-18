//Ejercicio3: Consulta de Clima Local
const consultarClima = (ciudad) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const clima={temperatura: "24°C", condicion: "Soleado"}
            resolve(clima);
        },1500);
    })
}

async function mostrarClima(ciudad){
    try{
        console.log("Procesando...")
        const clima = await consultarClima();
        console.log("El Clima de "+ciudad+" es:");
        console.log("Temperatura: "+clima.temperatura+" Condicion: "+clima.condicion)
    } catch(error){
        console.log("Error al obtener el clima: "+error)
    }
};
mostrarClima("Quito");