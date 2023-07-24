const Department = require('../../repositories/api/Department');

module.exports.getDepartmentByFunctionId = async function (req, res, next) {
    let function_id = req.body.function_id;
    const data = await Department.getDepartmentByFunctionId(function_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });

};

module.exports.list = async function (req, res, next) {
    const data = await Department.List(req.userdata.unit_id, req);
    res.send(data);
};

module.exports.getDepartmentById = async function (req, res, next) {
    const data = await Department.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getDepartmentByFunctionIdForGlobal = async function (req, res, next) {
    const data = await Department.getDepartmentByFunctionId(req.params.id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

module.exports.getDepartmentSection = async function (req, res, next) {
    const data = await Department.getDepartmentSectionByUnitId(req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

exports.getDepartmentByUnit = async function (req, res, next) {
    const data = await Department.getDepartmentByUnit(req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};