
const LoadingUnloading = require('../../repositories/api/LoadingUnloading');


module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await LoadingUnloading.loadingUnloadingList(unit_id, req.params.unitType, req);
    res.send(data);
};

module.exports.getByUnitType = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await LoadingUnloading.getByUnitType(unit_id, req.params.unitType);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: data });
};

module.exports.getById = async function (req, res, next) {
    const data = await LoadingUnloading.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: data });
};


module.exports.changeStatus = async function (req, res, next) {
    const data = await LoadingUnloading.changeStatus(req.body, req);
    res.send(data);
};

module.exports.update = async function (req, res, next) {
    const data = await LoadingUnloading.update(req.body, req);
    res.send(data);
};

module.exports.getLoadingBayPoints = async function (req, res, next) {
    const data = await LoadingUnloading.getLoadingBayPoints(req);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

module.exports.getUnloadingBayPoints = async function (req, res, next) {
    const data = await LoadingUnloading.getUnloadingBayPoints(req);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

exports.getLoadingUnloadingChecklist = async function (req, res, next) {
    req.body.type = (req.body.type == undefined) ? 3 : req.body.type;
    LoadingUnloading.getLoadingUnloadingChecklist(req, function (data) {
        res.status(200).json(data);
    });
};