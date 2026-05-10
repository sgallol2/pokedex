const express = require('express');
const path = require('path');
const app = express();

// Configurar motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
const pokeneaRoutes = require('./routes/pokenea');
const visualRoutes = require('./routes/visual');

// Middleware
app.use(express.json());

// Montar rutas
app.use('/pokenea', pokeneaRoutes);
app.use('/visual', visualRoutes);

// Ruta raíz opcional
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Pokeneas');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Pokeneas corriendo en el puerto ${PORT}`);
});
