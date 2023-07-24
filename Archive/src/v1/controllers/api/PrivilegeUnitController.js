const PrivilegeUnit = require('../../repositories/api/PrivilegeUnit');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const resp = await PrivilegeUnit.list(unit_id, req);
    res.send(resp);
};

module.exports.listByCategory = async function (req, res, next) {
    const resp = await PrivilegeUnit.listByCategory(req.userdata.unit_id, req.params.category);
    res.send(resp);
};

module.exports.getById = async function (req, res, next) {
    const data = await PrivilegeUnit.getById(req.params.id, req.userdata.unit_id);
    res.send(data);
};

exports.getAssignedPrivilege = async function (req, res, next) {
    PrivilegeUnit.getAssignedPrivilege(req, res, function (data) {
        res.status(200).json(data);
    });
};
