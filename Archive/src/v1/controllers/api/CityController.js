const City = require('../../repositories/api/City');

module.exports.getCities = async function (req, res, next) {
    const data = await City.getAllCity();
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};