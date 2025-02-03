//practica generación de ADN.
const propiedadesADN = ['Adenina', 'Citosina', 'Guanina', 'Timina'];

console.log(`Tenemos Que Realizar El Siguiente Ejercicio.`);
console.log(`El Cual Se Trata De Generar Un Listado Aleatorio De Numeros.`);

console.log(`Propiedad 1: ${propiedadesADN[0]}`);
console.log(`Propiedad 2: ${propiedadesADN[1]}`);
console.log(`Propiedad 3: ${propiedadesADN[2]}`);
console.log(`Propiedad 4: ${propiedadesADN[3]}`);

console.log(`Ahora Vamos A Generar Un Listado Aleatorio De ADN Con Las Iniciales De Las Letras..`);
const bases = ['A', 'C', 'G', 'T'];

// Función para generar una base aleatoria
function generadorADN() {
    const indiceAleatorio = Math.floor(Math.random() * bases.length);
    return bases[indiceAleatorio];
}

const miADN = [];
for (let i = 0; i < 24; i++) {
    miADN.push(generadorADN());
}

console.log(miADN);