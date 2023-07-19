const LocalServiceCategory = require('../../repositories/api/LocalServiceCategory');

module.exports.getCategory = async function (req, res, next) {
    const data = await LocalServiceCategory.getCategory();
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};


module.exports.getSubCategoryByCategoryId = async function (req, res, next) {
    const category_id = req.params.categoryId;
    const data = await LocalServiceCategory.getSubCategoryByCategoryId(category_id);
    res.send({ status: 1, message: trans.lang('message.loaded_success'), data });
};