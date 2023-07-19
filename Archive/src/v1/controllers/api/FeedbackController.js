const Feedback = require('../../repositories/api/Feedback');
const MailjetHelper = require('../../helpers/MailjetHelper');

exports.sendFeedbackMail = async function (req, res, next) {
    const feedbackData = await Feedback.getByUnitId(req.userdata.unit_id);
    if (!feedbackData || feedbackData.length === 0) {
        res.status(200).json({ status: 0, message: trans.lang('message.feedback.unit_not_found') });
    }
    const message = `Name : ${req.body.name}<br/>Contact Number : ${req.body.mobile_no}<br/>Email : ${req.body.email}<br/><br/>${req.body.description}`;
    const result = await MailjetHelper.send("Kavachapp", feedbackData.email, req.body.subject, message, feedbackData.moderator_email);
    if (result) {
        res.status(200).json({ status: 1, message: trans.lang('message.feedback.mail_success') });
    } else {
        res.status(200).json({ status: 0, message: trans.lang('message.feedback.mail_failed') });
    }
}