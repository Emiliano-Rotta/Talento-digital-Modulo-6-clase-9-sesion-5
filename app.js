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
// const fs = require('fs');

// const data = 'Esto es un ejemplo de datos persistidos en un archivo';

// fs.writeFile('data.txt', data, (err) => {
//     if (err) throw err;
//     console.log('Datos guardados en data.txt');

//     // Leer los datos almacenados
//     fs.readFile('data.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log('Datos leídos del archivo:', data);
//     });
// });


//1 Ciclo de Vida del Proceso:
// Crea un archivo processEvents.js (o en este mismo archivo) que imprima mensajes en consola usando los eventos beforeExit, exit, y uncaughtException. Agrega una función que intente dividir un número por cero para provocar un error y observar el comportamiento del proceso.




// process.on('beforeExit', () => {
//     console.log('El proceso está por finalizar.');
// });
// process.on('exit', (code) => {
//     console.log(`Proceso finalizado con código: ${code}`);
// });
// process.on('uncaughtException', (err) => {
//     console.log(`Error capturado: ${err} `);
// });

// const dividePorCero = () => {

//     if (10 / 0 === Infinity) {
//         throw new Error("Se intentó dividir por cero, lo que resultó en Infinity.");
//     }
//     return 10 / 0;
// };
// dividePorCero()

//2Temporizador con Finalización de Proceso:
// En el archivo timerProcess.js,(o en este mismo archivo) crea un temporizador que ejecute una acción cada segundo y finalice después de 10 segundos, mostrando un mensaje de salida con el código de proceso en exit.

// let count = 0
// const interval = setInterval(() => {
//     count++
//     console.log(count)
//     if (count === 10) {
//         clearInterval(interval);
//         process.on('exit', (code) => {
//             console.log(`Proceso finalizado con código: ${code}`);
//         });

//     }
// }, 1000)


//3 Servidor HTTP Básico:
// Usa el módulo http para crear un servidor que responda en la ruta / con "Bienvenidos a mi servidor en Node.js". El servidor debe escuchar en el puerto 3001.

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Bienvenidos a mi servidor en Node.js');

// });

// server.listen(3001, () => {
//     console.log('Servidor escuchando en http://localhost:3001');
// });


//4 Servidor con Rutas Dinámicas:
// Mejora el servidor del ejercicio anterior para manejar dos rutas adicionales: /hora, que responda con la hora actual, y /saludo, que devuelva un saludo


// const http = require('http');
// const url = require('url')

// const server = http.createServer((req, res) => {
//     const parsedUrl  = url.parse(req.url, true)
// if (req.url === '/'){
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Bienvenidos a mi servidor en Node.js');
// } else if (parsedUrl.pathname === '/hora') {  //podria haber sido (req.url === '/hora' && req.method === 'GET')
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`Hora actual: ${new Date().toLocaleTimeString()}`)
//  } else if (parsedUrl.pathname === '/saludo') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`Hola a todos`)
//  }
//  else{
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('error ');

//  }
// });

// server.listen(3001, () => {
//     console.log('Servidor escuchando en http://localhost:3001');
// });

//----------------------------------------------------------------------------
//ver archivo estatico.js


