const Vendor = require('../../repositories/api/Vendor');
const VendorType = require('../../repositories/api/VendorType');

module.exports.list = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    const data = await Vendor.List(unit_id, req);
    res.send(data);
};

module.exports.changeStatus = async function (req, res, next) {
    const data = await Vendor.changeStatus(req.body, req);
    res.send(data);
};

module.exports.isValidVender = async function (req, res, next) {
    const VendorData = await Vendor.getById(req.params.id, req);
    let flag = false;
    if (VendorData) {
        const isValidVender = await Vendor.isValidVender(req.params.id);
        if (isValidVender) {
            flag = true;
        }
    }
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: flag });
};

module.exports.getById = async function (req, res, next) {
    const data = await Vendor.getById(req.params.id, req);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.update = async function (req, res, next) {
    const data = await Vendor.update(req, res);
    res.send(data);
};

module.exports.getVendorByUnit = async function (req, res, next) {
    const data = await Vendor.getByUnitId(req.userdata.unit_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getVendorType = async function (req, res, next) {
    const data = await VendorType.getVendors();
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

module.exports.getDetailByUnitId = async function (req, res, next) {
    const data = await Vendor.getDetailByUnitId(req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

module.exports.bulkUpload = async function (req, res, next) {
    const unit_id = req.userdata.unit_id
    const data = await Vendor.bulkUpload(req, res, unit_id);
    res.send(data);
};