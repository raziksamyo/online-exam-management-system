const OtpCode = require('../../repositories/api/OtpCode');

exports.getOtpCodeByUnit = async function (req, res, next) {
    const data = await OtpCode.getOtpCodeByUnit(req.userdata.unit_id);
    res.status(200).json(data);
}