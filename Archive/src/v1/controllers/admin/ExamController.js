const Exam = require("../../repositories/admin/Exam");

module.exports.list = function (req, res, next) {
  Exam.examList(req, function (data) {
    // console.log("data", data);
    res.send(data);
  });
};

module.exports.add = async function (req, res, next) {
  Exam.add(req, res, function (data) {
    res.send(data);
  });
};

module.exports.update = async function (req, res, next) {
  Exam.update(req, res, function (data) {
    res.send(data);
  });
};

module.exports.delete = async function (req, res, next) {
  Exam.delete(req, res, function (data) {
    res.send(data);
  });
};
