const User = require('../../repositories/api/User');
const Unit = require('../../repositories/api/Unit');
const OtpCode = require('../../repositories/api/OtpCode');
const Module = require('../../repositories/api/Module');
const UnitCompany = require('../../repositories/api/UnitCompany');
// // const Role = require('../../models/Role');
// const ejs = require('ejs');

// module.exports.index = async function (req, res, next) {
//     if (typeof req.session.user != 'undefined' && req.session.user._id) {
//         res.redirect('/dashboard');
//     } else {
//         res.render('admin/auth/login', { layout: 'admin/auth/login' });
//     }
// };

module.exports.logout = async function (req, res, next) {
    const data = await User.logout(req.userdata.user_id);
    res.status(200).json(data);
};

exports.loginByAccessToken = function (req, res, next) {
    Unit.loginByAccessToken(req, res, function (data) {
        res.status(200).json(data);
    });
};

exports.login = function (req, res, next) {
    User.login(req, res, function (data) {
        res.status(200).json(data);
    });
};

exports.verifyOtp = function (req, res, next) {
    User.verifyOtp(req, res, async function (data) {
        res.status(200).json(data);
    });
};

exports.updateProfile = function (req, res, next) {
    User.updateProfile(req, res, function (data) {
        res.status(200).json(data);
    });
};

module.exports.changePassword = function (req, res, next) {
    res.render('admin/profile/change_password', {
        layout: locals.layout, pageTitle: 'Change Password'
    });
};

exports.resetPassword = function (req, res, next) {
    User.resetPassword(req, res, function (data) {
        res.status(200).json(data);
    });
};

exports.sendOtp = function (req, res, next) {
    User.sendOtp(req, res, async function (data) {
        res.status(200).json(data);
    });
};

exports.resendOtp = function (req, res, next) {
    User.resendOtp(req, res, async function (data) {
        res.status(200).json(data);
    });
};

exports.newPassword = function (req, res, next) {
    User.newPassword(req, res, async function (data) {
        res.status(200).json(data);
    });
};

exports.sendOtpForOtpCode = function (req, res, next) {
    OtpCode.sendOtp(req, res, async function (data) {
        res.status(200).json(data);
    });
};

exports.verifyOtpForOtpCode = function (req, res, next) {
    OtpCode.verifyOtp(req, res, async function (data) {
        res.status(200).json(data);
    });
};

exports.syncConfiguration = async function (req, res, next) {
    let resp = {
        isActive: 1,
        isPdfDownloadActive: 0,
        enabledModules: '[]',
    }
    const unitData = await Unit.getByAccessToken(req.body.access_key);
    if (unitData) {
        const unitCompanyData = await UnitCompany.getByUnitId(unitData._id, true);
        const isActive = await User.isActive(unitCompanyData.user);
        if (!isActive) {
            resp.isActive = 0;
        }
        resp.isPdfDownloadActive = unitCompanyData.is_download_watermark;
        let modules = await Module.getModulesByUnit(unitData._id);
        modules = modules.map((m) => {
            return {
                name: m.name,
                slug: m.slug,
                is_group_validation: m.is_group_validation
            }
        });
        resp.enabledModules = JSON.stringify(modules);
    } else {
        resp.isActive = 0;
        resp.enabledModules = '[]';
    }
    res.status(200).json(resp);
};