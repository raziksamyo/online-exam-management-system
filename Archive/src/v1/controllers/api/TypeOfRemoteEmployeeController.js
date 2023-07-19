const RemoteEmployee = require('../../repositories/api/RemoteEmployee');

module.exports.getRemoteTypeEmployee = async function (req, res, next) {
    const data = await RemoteEmployee.getRemoteTypeEmployee(req.userdata.unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};