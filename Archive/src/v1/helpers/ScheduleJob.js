const User = require('../models/User');

module.exports.optExpire = async function (user_id) {
    return new Promise(function (resolve, reject) {
        User.updateOne({ _id: user_id }, { otp: '' }, (err, result) => {
            console.log("job end");
            resolve(true);
        });
    });
}