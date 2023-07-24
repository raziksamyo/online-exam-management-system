var request = require('request');

module.exports.send = async function (to, template_id, props = []) {
    return new Promise(async function (resolve, reject) {
        let from = '';
        let DltTemplateId = '';
        let SmsType = 'transactional';
        let body = "This is a test message powered by Exotel. Report abuse to +918088919888 -Exotel";
        switch (template_id) {
            case 'VIRAGA':
                body = `ATPL : ${props[0]} is the secure access code to login into your KavachApp account. The OTP is valid for 05:00 mins only.`;
                DltTemplateId = '1007201219498482068';
                from = 'ATPLLI';
                break;
            case 'VIRAVI':
                body = `ATPL : ${props[0]} is the secure access code to download the ${props[1]} list report. The OTP is valid for 05:00 mins only.`;
                DltTemplateId = '1007158740201248605';
                from = 'ATPLDW';
                break;
            case 'VIRAKA':
                body = `ATPL : ${props[0]} has invited you to ${props[1]} on ${props[2]} at ${props[3]}. Use OTP ${props[4]} at reception for hassle free entry. Click here to navigate ${props[5]}`;
                DltTemplateId = '1007166143258636449';
                from = 'ATPLVI';
                break;
            case 'VIRAMA':
                body = `ATPL : ${props[0]} is waiting at the reception for your validation. Please open the app to approve / deny.`;
                DltTemplateId = '1007815615109592893';
                from = 'ATPLOP';
                break;
            case 'ATPLLI':
                body = `Dear ${props[0]}, You have been assigned a ticket - ${props[1]}, Priority - ${props[2]}, Category - ${props[3]}, Description - ${props[4]}. Thank you.`;
                DltTemplateId = '1007954309881109937';
                from = 'ATPLLI';
                break;
            case 'ATPLOP':
                body = `${props[0]} is the Outpass OTP. Please use the OTP at Exit gate.`;
                DltTemplateId = '1007275140981605467';
                from = 'ATPLOP';
                break;
            default:
                break;
        }

        if (locals.isLive == 1 && DltTemplateId != '' && from != '') {
            var options = {
                url: "https://" + process.env.SMS_KEY + ":" + process.env.SMS_TOKEN + "@api.exotel.in/v1/Accounts/" + process.env.SMS_SID + "/Sms/send.json",
                method: 'POST',
                formData: {
                    From: from,
                    DltTemplateId,
                    To: to,
                    SmsType,
                    Body: body
                }
            };
            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        } else {
            resolve(false)
        }
    });
}