const admin = require('firebase-admin');

module.exports.send = function (title, msg, receiver_token, type) {
    return new Promise(async function (resolve, reject) {
        if (!receiver_token) {
            resolve(false); return;
        }
        // if (locals.isLive != 1) {
        //     resolve(true); return;
        // } else {
        if (!admin.apps.length) {
            var serviceAccount = require('../../../config/privatekey.json');
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        }
        var message = {
            android: {
                ttl: 10000,
                priority: 'high',
                data: {
                    title: title,
                    type: JSON.stringify(type),
                    body: decodeURIComponent(msg)
                }
            },
            token: receiver_token
        };
        admin.messaging().send(message).then(res => {
            console.log("Success", res)
            resolve(true); return;
        }).catch(err => {
            console.log("Error:", err)
            resolve(false); return;
        })
        // }
    })
};