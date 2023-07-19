const EmergencyType = require('../../repositories/api/EmergencyType');

module.exports.getByUnitId = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await EmergencyType.getByUnitId(unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.status(200).json({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};


module.exports.getCategory = async function (req, res, next) {
    const resp = await EmergencyType.getCategory();
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};


module.exports.getEmergencyTypeById = async function (req, res, next) {
    const resp = await EmergencyType.getEmergencyTypeById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};