const Student = require('../../repositories/admin/Student');


// module.exports.list = function (req, res, next) {
//     Teachers.teacherList(req, function (data) {
//         res.send(data);
//     });
// };


module.exports.add = async function (req, res, next) {
    Student.add(req, res, function (data) {
        res.send(data);
    });
};


// module.exports.update = function (req, res, next) {
//     Teachers.update(req, res, function (data) {
//         res.send(data);
//     });
// };


// module.exports.delete = function (req, res, next) {
//     Teachers.delete(req, res, function (data) {
//         res.send(data);
//     });
// };
