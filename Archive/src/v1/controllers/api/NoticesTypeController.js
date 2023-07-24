const NoticesType = require('../../repositories/api/NoticesType');

module.exports.getAllNoticeType = async function (req, res, next) {
    const notice_type_data = await NoticesType.getNoticesTypes();
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: notice_type_data });
};

module.exports.getNoticeTypeByUnit = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const notice_type_unit_data = await NoticesType.getNoticesTypesByUnit(unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: notice_type_unit_data });
};