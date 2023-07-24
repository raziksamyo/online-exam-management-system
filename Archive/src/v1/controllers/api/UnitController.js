
const Unit = require('../../repositories/api/Unit');
const Employee = require('../../repositories/api/Employee');
const GroupValidaton = require('../../repositories/api/GroupValidaton');
const UnitCompany = require('../../repositories/api/UnitCompany');
const Vendor = require('../../repositories/api/Vendor');
const Gate = require('../../repositories/api/Gate');
const Module = require('../../repositories/api/Module');
const IdCard = require('../../repositories/api/IDCard');
const Logistics = require('../../repositories/api/Logistics');
const RemoteEmployee = require('../../repositories/api/RemoteEmployee');

module.exports.detail = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    let data = await Unit.detail(unit_id);
    res.send(data);
};
module.exports.comapnyDetail = async function (req, res, next) {
    let unit_id = req.userdata.unit_id;
    let data = await UnitCompany.comapnyDetail(unit_id);
    res.send(data);
};

module.exports.setting = async function (req, res, next) {
    const unit_id = req.userdata.unit_id;
    const is_employee_bulk_upload = await Unit.setting(unit_id);
    const UnitCompanyData = await UnitCompany.getByUnitId(unit_id)
    const validationGroup = await GroupValidaton.validationGroup(unit_id);
    const idCard = await IdCard.getByUnit(unit_id);
    const logisticsData = await Logistics.getByUnit(unit_id);
    const module = await Module.getModulesByUnit(unit_id, true);
    const remoteEmployee = await RemoteEmployee.getByUnit(unit_id);
    const total_vendor = await Vendor.totalVendor(unit_id);
    const total_gate = await Gate.totalGate(unit_id);
    res.send({
        status: 1, message: trans.lang('message.loaded_success'), data: {
            is_employee_bulk_upload,
            is_download_watermark: UnitCompanyData.is_download_watermark,
            total_unapproved_employee: await Employee.totalDraft(unit_id),
            total_deny_employee: await Employee.totalDeny(unit_id),
            no_of_groups: validationGroup.no_of_groups,
            no_of_group_members: validationGroup.no_of_group_members,
            is_validitaion_group: validationGroup.group_validation,
            group_validation_module: module,
            assign_validity_to_unit: idCard.assign_validity_edit_to_unit,
            no_of_logistics_employee: logisticsData.number_of_employee,
            is_logistics_unit: logisticsData.is_unit,
            no_of_remote_employee: remoteEmployee.no_of_remote_employee,
            enable_remote_employee: remoteEmployee.enable_remote_employee,
            total_vendor: total_vendor,
            total_gate: total_gate,
        }
    });
};

module.exports.getUnitsByCity = async function (req, res, next) {
    const data = await Unit.getUnitByCityId(req.params.id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

module.exports.getModuleByUnit = async function (req, res, next) {
    const data = await Module.getModulesByUnit(req.userdata.unit_id, true);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};


module.exports.getModuleById = async function (req, res, next) {
    const ModuleData = await Module.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: ModuleData });
};