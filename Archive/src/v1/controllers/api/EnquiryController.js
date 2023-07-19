const ejs = require('ejs');
const MailjetHelper = require('../../helpers/MailjetHelper');

exports.addEnquiry = async function (req, res, next) {
    const html = await ejs.renderFile(`${locals.views}/email_template/request_demo.ejs`, { body: req.body });
    const mail = await MailjetHelper.send(req.body.firstName ?? '', req.body.email, 'Request a Demo!', html);
    res.send({ status: 1, message: '' });
};