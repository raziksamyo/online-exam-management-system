const DeviceImei = require('../../repositories/api/DeviceImei');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const resp = await DeviceImei.List(unit_id, req);
    res.send(resp);
};

module.exports.isImeiExists = async function (req, res, next) {
    const resp = await DeviceImei.isImeiExists(req.body.imei, '', req.body.unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};

module.exports.getByImei = async function (req, res, next) {
    const resp = await DeviceImei.getByImei(req.body.imei);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};

module.exports.getByImeiByUnit = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const resp = await DeviceImei.getImeiByUnitId(unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};