// const User = require('../../repositories/admin/User');
// // const Role = require('../../models/Role');
// const ejs = require('ejs');

// module.exports.index = async function (req, res, next) {
//     if (typeof req.session.user != 'undefined' && req.session.user._id) {
//         res.redirect('/dashboard');
//     } else {
//         res.render('admin/auth/login', { layout: 'admin/auth/login' });
//     }
// };

// module.exports.logout = async function (req, res, next) {
//     await User.logout(req.session.user._id)
//     req.session.destroy(function () {
//         res.redirect('/');
//     });
// };

// exports.login = function (req, res, next) {
//     User.login(req, res, function (data) {
//         res.status(200).json(data);
//     });
// };


// exports.verifyOtp = function (req, res, next) {
//     User.verifyOtp(req, res, async function (data) {
//         res.status(200).json(data);
//     });
// };

// module.exports.editProfile = async function (req, res, next) {
//     const user_id = req.session.user._id;
//     const data = await User.getById(user_id);
//     res.render('admin/profile/edit_profile', {
//         layout: locals.layout, pageTitle: 'Edit Profile', data
//     });
// };

// exports.updateProfile = function (req, res, next) {
//     User.updateProfile(req, res, function (data) {
//         res.status(200).json(data);
//     });
// };

// module.exports.changePassword = function (req, res, next) {
//     res.render('admin/profile/change_password', {
//         layout: locals.layout, pageTitle: 'Change Password'
//     });
// };

// exports.resetPassword = function (req, res, next) {
//     User.resetPassword(req, res, function (data) {
//         res.status(200).json(data);
//     });
// };

// exports.sendOtp = function (req, res, next) {
//     User.sendOtp(req, res, async function (data) {
//         res.status(200).json(data);
//     });
// };

// exports.resendOtp = function (req, res, next) {
//     User.resendOtp(req, res, async function (data) {
//         res.status(200).json(data);
//     });
// };

// exports.newPassword = function (req, res, next) {
//     User.newPassword(req, res, async function (data) {
//         res.status(200).json(data);
//     });
// };