// process.on('beforeExit', () => {
//     console.log('El proceso está por terminar');

// });

// process.on('exit', (code) => {
//     console.log(`Proceso terminado con código: ${code}`);
// });

// console.log('Proceso en ejecución');



// eventos: 
// beforeExit: antes de que finalice el proceso
// exit: el proceso finalizó
// uncaughtException: Este evento se emite cuando ocurre una excepción no capturada (un error que no fue manejado por un bloque try...catch. usarlo limitadamente. 

//unhandledRejection: Este evento se emite cuando una promesa rechazada no tiene un manejador .catch().

// const http = require('http');
// const PORT = 3000

// const server = http.createServer((req, res) => {


//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // Existen otros valores comunes para Content-Type, como:
//     //text/plain sin formato
//     // text/html para contenido HTML.
//     // application/json para datos JSON.
//     // image/jpeg para imágenes JPEG
   
//     res.end('¡Hola desde el servidor HTTP en Node.js!');


// });

// server.listen(PORT, () => {
//     console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });

//writeHead no es el unico..
//res.setHeader(name, value) me sirve para actualizar una cabecera res.setHeader('Content-Type', 'application/json');
//res.getHeader(name) Recupera el valor de una cabecera específica que se haya configurado previamente. const contentType = res.getHeader('Content-Type');
// res.removeHeader(name) para eliminar una cabecera res.removeHeader('X-Custom-Header');
//  res.statusCode  res.statusCode = 404;
// res.statusMessage  res.statusCode = 404;  res.statusMessage = 'Página no encontrada';

// const http = require('http');
// const PORT = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('X-Powered-By', 'Node.js');
//     res.write('<h1>Hola desde el servidor Node.js</h1>');
//     res.write('<p>Este es un servidor HTTP básico.</p>');
//     res.end('<p>¡Hasta pronto!</p>');
// });
// server.listen(PORT, () => {
//     console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });


//------------------------------------------------
// Persistencia de Datos
const fs = require('fs');

const data = 'Esto es un ejemplo de datos persistidos en un archivo';

fs.writeFile('data.txt', data, (err) => {
    if (err) throw err;
    console.log('Datos guardados en data.txt');

    // Leer los datos almacenados
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Datos leídos del archivo:', data);
    });
});


//1 Ciclo de Vida del Proceso:
// Crea un archivo processEvents.js (o en este mismo archivo) que imprima mensajes en consola usando los eventos beforeExit, exit, y uncaughtException. Agrega una función que intente dividir un número por cero para provocar un error y observar el comportamiento del proceso.

//2Temporizador con Finalización de Proceso:
// En el archivo timerProcess.js,(o en este mismo archivo) crea un temporizador que ejecute una acción cada segundo y finalice después de 10 segundos, mostrando un mensaje de salida con el código de proceso en exit.

//3 Servidor HTTP Básico:
// Usa el módulo http para crear un servidor que responda en la ruta / con "Bienvenidos a mi servidor en Node.js". El servidor debe escuchar en el puerto 3001.

//4 Servidor con Rutas Dinámicas:
// Mejora el servidor del ejercicio anterior para manejar dos rutas adicionales: /hora, que responda con la hora actual, y /saludo, que devuelva un saludo


