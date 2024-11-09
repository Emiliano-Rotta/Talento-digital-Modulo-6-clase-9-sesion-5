//Creación de un Servidor con Express y Manejo de Archivos Estáticos

// Los archivos estáticos son aquellos recursos (archivos HTML, CSS, JavaScript del lado del cliente, imágenes, fuentes, etc.) que no cambian en el servidor y se entregan tal cual al cliente o navegador. A diferencia de los datos dinámicos generados en el servidor (por ejemplo, resultados de una búsqueda en tiempo real), estos archivos están predefinidos y no necesitan procesamiento adicional antes de ser enviados al usuario.

const express = require('express');
const app = express();
const PORT = 3000;

//para trabajar con archivos estaticos necesitamos esto
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Bienvenidos a mi servidor con archivos estáticos');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});






//Ejercicio:
// Crear un servidor con express que lea un archivo index.html de la carpeta public. Luego agregar una imagen, un CSS, y si se animan, un archivo javascript