const Mailjet = require('node-mailjet');

exports.send = function (to_name, to_email, subject, body, cc = []) {
    return new Promise(function (resolve, reject) {
        if (locals.isLive == 1) {
            const mailjet = Mailjet.apiConnect(
                process.env.MJ_APIKEY_PUBLIC,
                process.env.MJ_APIKEY_PRIVATE,
            );
            const request = mailjet
                .post('send', { version: 'v3.1' })
                .request({
                    Messages: [
                        {
                            From: {
                                Email: process.env.FROM_EMAIL,
                                Name: process.env.FROM_NAME
                            },
                            To: [
                                {
                                    Email: to_email,
                                    Name: to_name
                                }
                            ],
                            Cc: cc,
                            // Bcc: []
                            Subject: subject,//"Your email flight plan!",
                            // TextPart: textpart,//"Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                            HTMLPart: body//"<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
                        }
                    ]
                })
            request
                .then((result) => {
                    resolve(true)
                })
                .catch((err) => {
                    resolve(false)
                })
        } else {
            resolve(true)
        }
    });
}