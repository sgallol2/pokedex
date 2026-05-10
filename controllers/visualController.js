const pokeneas = require('../data/pokeneas');
const os = require('os');

// Controlador para la vista visual (HTML)
const getVisualPokenea = (req, res) => {
    // Seleccionar un pokenea aleatorio
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];

    // Obtener el container ID
    const containerId = process.env.HOSTNAME || os.hostname();

    // Renderizar la vista EJS pasando los datos dentro de viewdata
    res.render('visual', { viewdata: { pokenea, containerId } });
};

module.exports = {
    getVisualPokenea
};
