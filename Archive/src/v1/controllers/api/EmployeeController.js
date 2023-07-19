const Employee = require('../../repositories/api/Employee');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Employee.list(unit_id, req);
    res.send(data);
};


module.exports.denyList = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Employee.denyList(unit_id, req);
    res.send(data);
};

module.exports.approved = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Employee.changeStatus(unit_id, req.body, 1);
    res.send(data);
};

module.exports.deny = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Employee.changeStatus(unit_id, req.body, 0);
    res.send(data);
};

module.exports.getById = async function (req, res, next) {
    const data = await Employee.getApprovedById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};