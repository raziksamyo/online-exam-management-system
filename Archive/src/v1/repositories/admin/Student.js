const StudentModels = require('../../models/admin/Student');

module.exports.add = async function (req, res, next) {

    const StudentData = new StudentModels({
        Name: req.body.Name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        contactNumber: req.body.contactNumber,
        dob: moment(req.body.dob).valueOf(),
        address: req.body.address,
        status: 1
    });
    StudentData.save(async function (error, data) {
        if (error) {
            return next({
                status: 0,
                message: trans.lang("message.something_went_wrong"),
            });
        } else {
            return next({
                status: 1,
                message: trans.lang("message.student.add_success"),
            });
        }
    });
};

// module.exports.teacherList = async function (req, next) {
//     let s_data = {};

//     var project = {
//         "firstName": "$firstName",
//         "lastName": "$lastName",
//         "email": "$email",
//         "password": "password",
//         "gender": "gender",
//         "contactNumber": "contactNumber",
//         "experience": "experience",
//         "joinDate": "$joinDate",
//         "dob": "$dob",
//         "address": "address",
//         "status": "$status",
//     };
//     StudentModels.aggregate([
//         { $match: s_data },
//         { $sort: { _id: -1 } },
//         { $project: project },
//     ], async function (err, data) {
//         StudentModels.aggregate([
//             { $match: s_data },
//             { $sort: { _id: -1 } },
//             { $project: project },
//         ], async function (err, cdata) {

//             if (data.length > 0) {
//                 await data.reduce(function (promiesRes, row, index) {
//                     return promiesRes.then(function (data_d) {
//                         return new Promise(async function (resolve, reject) {
//                             resolve(row);
//                         });
//                     });
//                 }, Promise.resolve(null)).then(function (data) {
//                     next(data); return;
//                 });
//             } else {
//                 next({
//                     msg: "data not found "
//                 }); return;
//             }
//         });
//     });
// };



// module.exports.delete = async function (req, res, next) {

//     const teacherData = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password,
//         gender: req.body.gender,
//         contactNumber: req.body.contactNumber,
//         experience: req.body.experience,
//         joinDate: moment(req.body.joinData).valueOf(),
//         dob: moment(req.body.dob).valueOf(),
//         address: req.body.address,
//     };
//     StudentModels.deleteOne({ '_id': req.params.id }, teacherData).then(function (
//         data,
//         err
//     ) {
//         if (err) {
//             return next({
//                 status: 0,
//                 message: trans.lang("message.something_went_wrong"),
//             });
//         }
//         console.log(data)
//         if (!data) {
//             return next({
//                 status: 0,
//                 message: trans.lang("message.teacher.not_found"),
//             });
//         }
//         return next({
//             status: 1,
//             message: trans.lang("message.teacher.delete_success"),
//         });
//     });
// };

