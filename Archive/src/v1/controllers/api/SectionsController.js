const Section = require('../../repositories/api/Section');


module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Section.List(unit_id, req);
    res.send(data);
};

module.exports.getSectionByDepartment = async function (req, res, next) {
    const data = await Section.getSectionByDepartmentId(req.body.department_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getSectionById = async function (req, res, next) {
    const data = await Section.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

exports.getSectionByDepartmentId = async function (req, res, next) {
    const data = await Section.getSectionByDepartmentId(req.params.id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};