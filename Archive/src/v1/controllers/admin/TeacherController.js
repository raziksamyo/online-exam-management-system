const Teachers = require("../../repositories/admin/Teacher");

module.exports.list = function (req, res, next) {
  Teachers.teacherList(req, function (data) {
    res.send(data);
  });
};

module.exports.add = async function (req, res, next) {
  Teachers.add(req, res, function (data) {
    console.log(data);
    res.send(data);
  });
};

module.exports.update = function (req, res, next) {
  Teachers.update(req, res, function (data) {
    console.log(data);
    res.send(data);
  });
};

module.exports.delete = function (req, res, next) {
  Teachers.delete(req, res, function (data) {
    console.log(data);
    res.send(data);
  });
};
