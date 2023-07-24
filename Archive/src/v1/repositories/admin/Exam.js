const ExamModels = require("../../models/admin/Exam");
const CoursesModels = require("../../models/admin/courses");
const moment = require("moment");

module.exports.add = async function (req, res, next) {
  const examdetails = {
    title: req.body.title,
    date: moment(req.body.date, "YYYY-MM-DDTHH:mm:ss.sssZ").toDate(),
    starttime: moment(req.body.starttime, "YYYY-MM-DDTHH:mm:ss.sssZ").toDate(),
    duration: req.body.duration,
    totalquestion: req.body.totalquestion,
    marks: req.body.marks,
    courseId: req.body.courseId,
  };
  const courses = await CoursesModels.findById(examdetails.courseId);
  console.log("exam", courses._id);
  if (!courses) {
    return next({
      status: 0,
      message: trans.lang("message.teacher_not_found"),
    });
  }
  // console.log("date", examdetails.date);
  const examData = new ExamModels({
    title: examdetails.title,
    date: examdetails.date,
    starttime: examdetails.starttime,
    duration: examdetails.duration,
    totalquestion: examdetails.totalquestion,
    marks: examdetails.marks,
    courseId: courses._id,
    status: 1,
  });
  examData.save(async function (error, data) {
    // console.log("data", data);
    if (error) {
      return next({
        status: 0,
        message: trans.lang("message.something_went_wrong"),
      });
    } else {
      return next({
        status: 1,
        // message: trans.lang("message.course.add_success"),
      });
    }
  });
};

module.exports.examList = async function (req, next) {
  let s_data = {};
  var project = {
    title: "$title",
    date: "$date",
    starttime: "$starttime",
    duration: "$duration",
    totalquestion: "$totalquestion",
    marks: "$marks",
    courseId: "$courseId",
    // courseTitle: "$_co.title",
    status: "$status",
  };

  ExamModels.aggregate(
    [
      { $match: s_data },
      { $sort: { _id: -1 } },
      { $project: project },
      {
        $lookup: {
          from: "courses", // Collection name of the Course schema
          localField: "courseId", // Field in the ExamModels collection to match
          foreignField: "_id", // Field in the Course collection to match
          as: "_co", // The name of the new field to store the matched course data
        },
      },
    ],
    async function (err, data) {
      ExamModels.aggregate(
        [{ $match: s_data }, { $sort: { _id: -1 } }, { $project: project }],
        async function (err, cdata) {
          if (data.length > 0) {
            await data
              .reduce(function (promiesRes, row, index) {
                return promiesRes.then(function (data_d) {
                  return new Promise(async function (resolve, reject) {
                    resolve(row);
                  });
                });
              }, Promise.resolve(null))
              .then(function (arrayOfResults) {
                return next({
                  status: 1,
                  message: trans.lang("message.loaded_success"),
                  data: data,
                });
              });
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

module.exports.update = async function (req, res, next) {
  // console.log("Dob", req.body.dob);
  const examData = {
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
  ExamModels.findByIdAndUpdate(documentId, studentData, {
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

module.exports.delete = async function (req, res, next) {
  const documentid = req.params.id;
  // console.log("Id", documentid);
   ExamModels.findByIdAndDelete(documentid).then(function (data, err) {
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

