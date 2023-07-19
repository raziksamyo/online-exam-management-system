const IDCard = require('../../repositories/api/IDCard');


module.exports.update = async function (req, res, next) {
    IDCard.update(req, res, function (data) {
        res.send(data);
    });
};


module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await IDCard.list(unit_id, req);
    res.send(data);
};


module.exports.getById = async function (req, res, next) {
    const resp = await IDCard.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};

module.exports.getByUnit = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const resp = await IDCard.getByUnit(unit_id, true);
    res.send(resp);
};