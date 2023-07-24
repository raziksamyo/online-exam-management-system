const jwt = require('jsonwebtoken');
// const Role = require('../repositories/api/Unit');
const User = require('../repositories/api/User');
// const Role = require('../repositories/api/UnitCompany');

module.exports.admin = async function (req, res, next) {
    if (typeof req.session.user != "undefined" && req.session.user._id) {
        res.locals.user = req.session.user;
        global.ROLE = 'super_admin';
        next();
    } else {
        global.ROLE = '';
        res.redirect('/');
    }
};

module.exports.api = async function (req, res, next) {
    try {
        var auth = req.headers['authorization'];
        var TokenArray = auth.split(" ");
        const decoded = jwt.verify(TokenArray[1], "secret");
        req.userdata = decoded;
        /* role, user_id, unit_id */
        next();
    } catch (error) {
        return response(req, res);
    }
};

module.exports.isAuthorized = async function (req, res, next) {
    try {
        var auth = req.headers['authorization'];
        var TokenArray = auth.split(" ");
        const decoded = jwt.verify(TokenArray[1], "secret");
        req.userdata = decoded;
        const isActive = await User.isActive(req.userdata.user_id);
        if (!isActive) {
            await User.logout(req.userdata.user_id);
            return response(req, res, 'Services are interrupted temporarily. Please contact support team');
        }
        /* role, user_id, unit_id */
        next();
    } catch (error) {
        return response(req, res);
    }
};

function response(req, res, message = trans.lang('message.auth_fail')) {
    return res.json({ status: 2, message });
}

// module.exports.auth = async function(req, res, next) {
//     if(typeof req.session.user != "undefined" && req.session.user._id) {
//         res.locals.user = req.session.user;
//         const RoleData = await Role.getById(req.session.user.role);
//         global.ROLE = RoleData.slug;
//         next();
//     } else {
//         res.redirect('/admin_kavachapp');
//     }
// };

// module.exports.super_admin = async function(req, res, next) {
//     if(typeof req.session.user != "undefined" && req.session.user._id) {
//         const RoleData = await Role.getById(req.session.user.role);
//         if(RoleData.slug != 'super_admin'){
//             res.redirect('/admin_kavachapp');
//         }
//         res.locals.user = req.session.user;
//         global.ROLE = 'super_admin';
//         next();
//     } else {
//         global.ROLE = '';
//         res.redirect('/admin_kavachapp');
//     }
// };

