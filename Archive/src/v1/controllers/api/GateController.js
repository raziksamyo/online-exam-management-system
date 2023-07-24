const Gate = require('../../repositories/api/Gate');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Gate.List(unit_id, req);
    res.send(data);
};

module.exports.getByImeiId = async function (req, res, next) {
    const resp = await Gate.getByImeiId(req.body.imei);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};

module.exports.getById = async function (req, res, next) {
    const resp = await Gate.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};


module.exports.getGateTypes = async function (req, res, next) {
    const resp = await Gate.getGateTypes();
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};


module.exports.update = async function (req, res, next) {
    const resp = await Gate.update(req);
    res.send(resp)
};

module.exports.getByUnit = async function (req, res, next) {
    const resp = await Gate.getByUnit(req.userdata.unit_id);
    res.send(resp);
};