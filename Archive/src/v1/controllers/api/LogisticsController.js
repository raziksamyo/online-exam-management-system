const Logistics = require('../../repositories/api/Logistics');
const LogisticsChecklist = require('../../repositories/api/LogisticsChecklist');

module.exports.getLogisticsTripByUnit = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Logistics.getLogisticsTripByUnit(unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.pickupChecklistList = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await LogisticsChecklist.List(req, unit_id, 1);
    res.send(data);
};

module.exports.dropdownChecklistList = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await LogisticsChecklist.List(req, unit_id, 2);
    res.send(data);
};

module.exports.pickupActiveChecklistList = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await LogisticsChecklist.activeList(unit_id, 1);
    res.send(data);
};

module.exports.dropdownActiveChecklistList = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await LogisticsChecklist.activeList(unit_id, 2);
    res.send(data);
};

module.exports.checklistChangeStatus = async function (req, res, next) {
    const data = await LogisticsChecklist.changeStatus(req.body, req);
    res.send(data);
};

module.exports.getById = async function (req, res, next) {
    const data = await LogisticsChecklist.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.update = async function (req, res, next) {
    const resp = await LogisticsChecklist.update(req.body, req);
    res.send(resp);
};