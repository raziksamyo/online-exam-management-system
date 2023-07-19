const WeighBridge = require('../../repositories/api/WeighBridge');
const WeighmentCheckpoint = require('../../repositories/api/WeighmentCheckpoint');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await WeighBridge.List(unit_id, req);
    res.send(data);
};

module.exports.activeWeighbridge = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await WeighBridge.activeWeighbridge(unit_id);
    res.send(data);
};

module.exports.getById = async function (req, res, next) {
    const WeighBridgeData = await WeighBridge.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: WeighBridgeData });
};


module.exports.getWeighmentCheckpointById = async function (req, res, next) {
    const WeighmentCheckpointData = await WeighmentCheckpoint.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: WeighmentCheckpointData });
};

module.exports.update = async function (req, res, next) {
    const WeighBridgeData = await WeighBridge.update(req.body, req);
    res.send(WeighBridgeData);
};

module.exports.changeStatus = async function (req, res, next) {
    const data = await WeighBridge.changeStatus(req.body, req);
    res.send(data);
};


module.exports.weighment1List = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await WeighmentCheckpoint.List(req, unit_id, 1);
    res.send(data);
};


module.exports.weighmentChangeStatus = async function (req, res, next) {
    const data = await WeighmentCheckpoint.changeStatus(req.body, req);
    res.send(data);
};

module.exports.weighment2List = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await WeighmentCheckpoint.List(req, unit_id, 2);
    res.send(data);
};

exports.getWeighmentChecklist = async function (req, res, next) {
    req.body.unit_id = req.userdata.unit_id;
    req.body.position = (req.body.position == undefined) ? 1 : req.body.position;
    WeighmentCheckpoint.getWeighmentChecklist(req, function (data) {
        res.status(200).json(data);
    });
};