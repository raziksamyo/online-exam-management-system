const StudentModels = require("../../models/admin/Student");
const moment = require("moment");

module.exports.add = async function (req, res, next) {
  const studentData = new StudentModels({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    contactNumber: req.body.contactNumber,
    dob: moment(req.body.dob, "MM-DD-YYYY").toDate(),
    address: req.body.address,
    status: 1,
  });
  console.log(studentData);
  studentData.save(async function (error, data) {
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

module.exports.studentList = async function (req, next) {
  let s_data = {};

  var project = {
    name: "$name",
    email: "$email",
    password: "$password",
    gender: "$gender",
    contactNumber: "$contactNumber",
    dob: "$dob",
    address: "$address",
    status: "$status",
  };

  StudentModels.aggregate(
    [{ $match: s_data }, { $sort: { _id: -1 } }, { $project: project }],
    async function (err, data) {
      StudentModels.aggregate(
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
  const documentid = req.params.id;
  console.log("Id", documentid);
  StudentModels.findByIdAndDelete(documentid).then(function (data, err) {
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
        message: trans.lang("message.student.not_found"),
      });
    }

    return next({
      status: 1,
      message: trans.lang("message.student.delete_success"),
    });
  });
};

module.exports.update = async function (req, res, next) {
  // console.log("Dob", req.body.dob);
  const studentData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    contactNumber: req.body.contactNumber,
    dob: req.body.dob,
    address: req.body.address,
    status: 1,
  };
  const documentId = req.params.id;
  //   console.log("Data", studentData);
  //   console.log("Id", documentId);
  StudentModels.findByIdAndUpdate(documentId, studentData, {
    new: true,
    useFindAndModify: false,
  }).then(function (data, err) {
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
      message: trans.lang("message.student_updated_success"),
    });
  });
  
};
