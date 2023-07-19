const DataServiceCategory = require('../../repositories/api/DataServiceCategory');
const DataSubServiceCategory = require('../../repositories/api/DataSubService');

module.exports.getHelpdeskDataServiceCategory = async function (req, res, next) {
    const data = await DataServiceCategory.getDataServiceCategory(true);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};

module.exports.getLogisticsDataServiceCategory = async function (req, res, next) {
    const data = await DataServiceCategory.getDataServiceCategory(false, true);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};

module.exports.getSecurityDataServiceCategory = async function (req, res, next) {
    const data = await DataServiceCategory.getSecurityDataServiceCategory();
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};

module.exports.getDataServiceCategoryForHeads = async function (req, res, next) {
    const data = await DataServiceCategory.getDataServiceCategoryForHeads();
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};

module.exports.getDataServiceCategory = async function (req, res, next) {
    const data = await DataServiceCategory.getDataServiceCategory();
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};

module.exports.getDataServiceCategoryById = async function (req, res, next) {
    const data = await DataServiceCategory.getDataServiceCategoryById(req.params.id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.data_not_found'), data });
    } else {
        res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
    }
};

module.exports.isSecurityCategory = async function (req, res, next) {
    const resp = await DataServiceCategory.isSecurityCategory(req.body.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};

module.exports.isLogisticsDriverCategory = async function (req, res, next) {
    const resp = await DataServiceCategory.isLogisticsDriverCategory(req.body.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data: resp });
};

module.exports.getById = async function (req, res, next) {
    const data = await DataServiceCategory.getById(req.params.id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};

exports.getDataServiceCategoriesAndSubCategories = async function (req, res, next) {
    const data = await DataServiceCategory.getDataServiceCategoriesAndSubCategories(req);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

exports.getSubCategoryByCategoryId = async function (req, res, next) {
    const data = await DataSubServiceCategory.getSubCategoryByCategoryId(req.params.categoryId, req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};

exports.getSubCategoryByLogisticsType = async function (req, res, next) {
    const data = await DataSubServiceCategory.getSubCategoryByLogisticsType(req.params.type, req.userdata.unit_id);
    if (!data || data.length === 0) {
        res.status(200).json({ status: 0, message: '', data });
    } else {
        res.status(200).json({ status: 1, message: '', data });
    }
};