const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const pokeneaRoutes = require('./routes/pokeneaJson');
const visualRoutes = require('./routes/visual');

app.use(express.json());

app.use('/pokenea', pokeneaRoutes);
app.use('/visual', visualRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Pokeneas');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Pokeneas corriendo en el puerto ${PORT}`);
});
