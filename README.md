# Generador Aleatorio De Secuencias ADN
¡Bienvenido a este generador de secuencias de ADN!

## Descripción
Este proyecto en JavaScript genera una secuencia aleatoria de 24 bases de ADN utilizando las cuatro bases nitrogenadas fundamentales:
-  **Adenina (A)**
-  **Citosina (C)**
-  **Guanina (G)**
-  **Timina (T)**
La secuencia resultante se muestra como una cadena de texto continua en la consola.

## ¿Cómo funciona?
El código utiliza:
- Un array con las bases del ADN.
- Una función que genera un array de 24 bases elegidas aleatoriamente.
- `join('')` para convertirlo en una cadena legible.

## Uso
1. Copia el código en un archivo `.js`.
2. Ejecuta el archivo con Node.js o inclúyelo en un entorno web.
3. Observa la secuencia de ADN generada en la consola.

## Código Principal
```javascript
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
