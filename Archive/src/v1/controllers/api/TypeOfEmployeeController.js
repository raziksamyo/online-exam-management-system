const TypeOfEmployee = require('../../repositories/api/TypeOfEmployee');

module.exports.getEmployeeType = async function (req, res, next) {
    const data = await TypeOfEmployee.getTypeOfEmployees();
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getByName = async function (req, res, next) {
    const data = await TypeOfEmployee.getByName(req.params.name);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getById = async function (req, res, next) {
    const data = await TypeOfEmployee.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};