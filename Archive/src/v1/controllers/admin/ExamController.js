const Exam = require("../../repositories/admin/Exam");

module.exports.list = function (req, res, next) {
  Exam.examList(req, function (data) {
    console.log("data", data);
    res.send(data);
  });
};

module.exports.add = async function (req, res, next) {
  Exam.add(req, res, function (data) {
    res.send(data);
  });
};
