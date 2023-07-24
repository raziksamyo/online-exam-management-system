const Functions = require('../../repositories/api/Functions');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Functions.List(unit_id, req);
    res.send(data);
};

module.exports.getAllFunctionByUnit = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Functions.getFunctionByUnitId(unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getFunctionById = async function (req, res, next) {
    const data = await Functions.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

exports.getAllFunctionByUnitId = async function (req, res, next) {
    const data = await Functions.getFunctionByUnitId(req.params.id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

module.exports.getFunctionDepartmentSection = async function (req, res, next) {
    const data = await Functions.getFunctionDepartmentSectionByUnitId(req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};