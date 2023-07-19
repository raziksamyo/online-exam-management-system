// const Group = require('../../repositories/admin/Group');
// const Country = require('../../repositories/admin/Country');
// const State = require('../../repositories/admin/State');
// const City = require('../../repositories/admin/City');
// const Area = require('../../repositories/admin/Area');
// const ejs = require('ejs');

// module.exports.index = function (req, res, next) {
//     res.render('admin/group/index', { layout: locals.layout, pageTitle: 'Group' });
// };

// module.exports.list = function (req, res, next) {
//     Group.groupList(req, function (data) {
//         res.send(data);
//     });
// };

// module.exports.add = async function (req, res, next) {
//     const country_data = await Country.getCountries();
//     const html = await ejs.renderFile(`${locals.views}admin/group/add.ejs`, { country_data });
//     res.send({ status: 1, html });
// };

// module.exports.store = function (req, res, next) {
//     Group.store(req, res, function (data) {
//         res.send(data);
//     });
// };

// module.exports.edit = async function (req, res, next) {
//     const data = await Group.getById(req.body.id);
//     const country_data = await Country.getCountries();
//     const state_data = await State.getStateByCountryId(data.country);
//     const city_data = await City.getCityByStateId(data.state);
//     const area_data = await Area.getAreaByCityId(data.city);
//     const html = await ejs.renderFile(`${locals.views}admin/group/edit.ejs`, { data, country_data, state_data, city_data, area_data });
//     res.send({ status: 1, html });
// };

// module.exports.update = function (req, res, next) {
//     Group.update(req, res, function (data) {
//         res.send(data);
//     });
// };

// module.exports.changeStatus = function (req, res, next) {
//     Group.changeStatus(req, function (data) {
//         res.send(data);
//     });
// };

// module.exports.getGroupOptionByArea = async function (req, res, next) {
//     const data = await Group.getGroupByAreaId(req.body.area_id);
//     const html = await ejs.renderFile(`${locals.views}admin/group/group_option.ejs`, { data, group_id: false });
//     res.send({ status: 1, html });
// };