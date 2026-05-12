const pokeneas = require('../data/pokeneas');
const os = require('os');

const getVisualPokenea = (req, res) => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];

    const containerId = process.env.HOSTNAME || os.hostname();

    res.render('visual', { viewdata: { pokenea, containerId } });
};

module.exports = {
    getVisualPokenea
};
