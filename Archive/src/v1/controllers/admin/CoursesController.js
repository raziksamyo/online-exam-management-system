const Courses = require("../../repositories/admin/Courses");

module.exports.list = function (req, res, next) {
  Courses.courseList(req, function (data) {
    res.send(data);
  });
};

module.exports.add = async function (req, res, next) {
  Courses.add(req, res, function (data) {
    res.send(data);
  });
};

module.exports.update = function (req, res, next) {
  Courses.update(req, res, function (data) {
    res.send(data);
  });
};

// module.exports.delete = function (req, res, next) {
//   Teachers.delete(req, res, function (data) {
//     console.log(data);
//     res.send(data);
//   });
// };

module.exports.delete = function (req, res, next) {
  Courses.delete(req, res, function (data) {
    console.log(data);
    res.send(data);
  });
};
