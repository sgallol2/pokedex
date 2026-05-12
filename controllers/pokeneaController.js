const pokeneas = require('../data/pokeneas');
const os = require('os');

const getRandomPokenea = (req, res) => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];

    const containerId = process.env.HOSTNAME || os.hostname();

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
