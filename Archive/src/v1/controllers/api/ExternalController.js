const Unit = require('../../repositories/api/Unit');
const Group = require('../../repositories/api/Group');
const UnitCompany = require('../../repositories/api/UnitCompany');
const MailjetHelper = require('../../helpers/MailjetHelper');
const ExotelSmsHelper = require('../../helpers/ExotelSmsHelper');
const NotificationHelper = require('../../helpers/NotificationHelper');
const tinyurl = require("tinyurl-shorten");
const ejs = require('ejs');

module.exports.sendEmail = async function (req, res, next) {
    if (req.body.type == 'login') {
        const html = await ejs.renderFile(locals.emailTemplate + 'login.ejs', { code: req.body.otp });
        await MailjetHelper.send(req.body.name ?? '', req.body.email, 'KavachApp Login OTP ', html);
    } else if (req.body.type == 'report') {
        const html = await ejs.renderFile(`${locals.emailTemplate}report.ejs`, { code: req.body.otp, report_name: req.body.report_name });
        await MailjetHelper.send(req.body.name ?? '', req.body.email, 'OTP to download KavachApp Reports  ', html);
    }
    res.send({ status: 1, message: 'Email sent successfully' });
};

module.exports.sendSms = async function (req, res, next) {
    if (req.body.type == 'login') {
        await ExotelSmsHelper.send(req.body.contact_number, 'VIRAGA', [req.body.otp]);
    } else if (req.body.type == 'assign') {
        await ExotelSmsHelper.send(req.body.contact_number, 'ATPLLI', [
            req.body.name,
            req.body.ticket,
            req.body.priority,
            req.body.category,
            req.body.description
        ]);
    } else if (req.body.type == 'download') {
        await ExotelSmsHelper.send(req.body.contact_number, 'VIRAVI', req.body.code);
    } else if (req.body.type == 'invite_visitor') {
        const unitData = await Unit.getById(req.userdata.unit_id);
        const groupData = await Group.getById(unitData.group);
        const unitCompanyData = await UnitCompany.getByUnitId(req.userdata.unit_id);
        const locationUrl = await tinyurl(`https://www.google.com/maps/?q=${unitCompanyData.latitude},${unitCompanyData.longitude}`);
        req.body.group_name = groupData.name;
        req.body.locationUrl = locationUrl;
        await ExotelSmsHelper.send(req.body.contact_number, 'VIRAKA', [
            req.body.name,
            req.body.group_name,
            req.body.start_date,
            req.body.time,
            req.body.code,
            req.body.locationUrl
        ]);
    } else if (req.body.type == 'entry_visitor' || req.body.type == 'entry_delivery' ||
        req.body.type == 'entry_material' || req.body.type == 'outpass_create' || req.body.type == 'rise_gatepass') {
        await ExotelSmsHelper.send(req.body.contact_number, 'VIRAMA', [req.body.name]);
    } else if (req.body.type == 'outpass_approve') {
        await ExotelSmsHelper.send(req.body.contact_number, 'ATPLOP', [req.body.code]);
    }
    res.send({ status: 1, message: 'SMS sent successfully' });
};

module.exports.sendNotification = async function (req, res, next) {
    if (req.body.token != undefined && req.body.token != '') {
        await NotificationHelper.send(req.body.title ?? '', req.body.message ?? '', req.body.token, req.body.code ?? '');
    }
    res.send({ status: 1, message: 'Notification sent successfully' });
};