const pokeneas = require('../data/pokeneas');
const os = require('os');

// Controlador para obtener un Pokenea aleatorio (JSON)
const getRandomPokenea = (req, res) => {
    // Seleccionar un pokenea aleatorio
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];

    // Obtener el container ID
    const containerId = process.env.HOSTNAME || os.hostname();

    // Enviar respuesta
    res.json({
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        habilidad: pokenea.habilidad,
        containerId: containerId
    });
};

module.exports = {
    getRandomPokenea
};
