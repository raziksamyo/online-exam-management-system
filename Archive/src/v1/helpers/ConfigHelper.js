var configObj = require('../repositories/admin/Config');

module.exports.getConfigValue = function (key) {
    return new Promise(async function (resolve, reject) {
        var sval = await configObj.getValBykey(key);
        resolve(sval)
    });
}