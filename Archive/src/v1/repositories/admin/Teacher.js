const TeacherModels = require("../../models/admin/Teacher");
const moment = require("moment");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

module.exports.add = async function (req, res, next) {
  const TeacherData = new TeacherModels({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    contactNumber: req.body.contactNumber,
    experience: req.body.experience,
    joinDate: moment(req.body.joinDate, "MM-DD-YYYY").toDate(),
    dob: moment(req.body.dob, "MM-DD-YYYY").toDate(),
    address: req.body.address,
    qualification: req.body.qualification,
    status: 1,
  });
  console.log(TeacherData);
  TeacherData.save(async function (error, data) {
    if (error) {
      return next({
        status: 0,
        message: trans.lang("message.something_went_wrong"),
      });
    } else {
      return next({
        status: 1,
        message: trans.lang("message.teacher.add_success"),
      });
    }
  });
};

module.exports.teacherList = async function (req, next) {
  let s_data = {};

  var project = {
    name: "$name",
    email: "$email",
    password: "$password",
    gender: "$gender",
    contactNumber: "$contactNumber",
    experience: "$experience",
    joinDate: "$joinDate",
    dob: "$dob",
    address: "$address",
    qualification: "$qualification",
    status: "$status",
  };

  TeacherModels.aggregate(
    [{ $match: s_data }, { $sort: { _id: -1 } }, { $project: project }],
    async function (err, data) {
      TeacherModels.aggregate(
        [{ $match: s_data }, { $sort: { _id: -1 } }, { $project: project }],
        async function (err, cdata) {
          if (data.length > 0) {
            var dataArray = []; // Create an empty array

            await data.reduce(function (promiesRes, row, index) {
              return promiesRes.then(async function () {
                // Perform any necessary operations on `row` here
                // For example, you can modify or filter the data

                dataArray.push(row); // Add `row` to the `dataArray` using `push()`

                // Continue with the next iteration
              });
            }, Promise.resolve(null));

            next(dataArray); // Pass the populated `dataArray` to `next()`
          } else {
            next({
              msg: "data not found",
            });
          }
        }
      );
    }
  );
};
module.exports.delete = async function (req, res, next) {
  // console.log("Id", req.params.id);
  const teacherData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    contactNumber: req.body.contactNumber,
    experience: req.body.experience,
    joinDate: req.body.joinDate,
    dob: req.body.dob,
    address: req.body.address,
    qualification: req.body.qualification,
  };
  // console.log("teacher", teacherData);
  TeacherModels.deleteOne({ _id: req.params.id }, teacherData).then(function (
    data,
    err
  ) {
    if (err) {
      return next({
        status: 0,
        message: trans.lang("message.something_went_wrong"),
      });
    }
    console.log("data", data);
    if (!data) {
      return next({
        status: 0,
        message: trans.lang("message.teacher.not_found"),
      });
    }

    return next({
      status: 1,
      message: trans.lang("message.teacher.delete_success"),
    });
  });
};
