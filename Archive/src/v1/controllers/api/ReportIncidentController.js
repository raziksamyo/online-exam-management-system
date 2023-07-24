const ReportIncidentCategory = require('../../repositories/api/ReportIncidentCategory');
const ReportIncidentSubCategory = require('../../repositories/api/ReportIncidentSubCategory');
// const ReportIncidentUnit = require('../../../models/user_api/v1/ReportIncidentUnit');

exports.getCategory = async function (req, res, next) {
    const data = await ReportIncidentCategory.getReportIncidentCategories(req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

exports.getCategoryById = async function (req, res, next) {
    const data = await ReportIncidentCategory.getCategoryById(req.params.id);
    if (!data) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};


exports.getSubCategoryByCategoryId = async function (req, res, next) {
    const data = await ReportIncidentSubCategory.getSubCategoryByCategoryId(req.params.id, req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

exports.getSubCategoryById = async function (req, res, next) {
    const data = await ReportIncidentSubCategory.getSubCategoryById(req.params.id);
    if (!data) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};
// exports.addReport = function (req, res, next) {
//     ReportIncidentUnit.store(req, res, function (data) {
//         res.status(200).json(data);
//     });
// };