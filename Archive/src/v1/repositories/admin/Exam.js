const ExamModels = require("../../models/admin/Exam");
const CoursesModels = require("../../models/admin/courses");
const moment = require("moment");

module.exports.add = async function (req, res, next) {
  const examdetails = {
    title: req.body.title,
    date: moment(req.body.date, "MM-DD-YYYY").toDate(),
    starttime: moment(req.body.starttime, "YYYY-MM-DDTHH:mm:ss.sssZ").toDate(),
    duration: req.body.duration,
    totalquestion: req.body.totalquestion,
    marks: req.body.marks,
    courseId: req.body.courseId,
  };
  console.log("totalquestion", examdetails.totalquestion);
  const courses = await CoursesModels.findById(examdetails.courseId);
  console.log("exam", courses._id);
  if (!courses) {
    return next({
      status: 0,
      message: trans.lang("message.teacher_not_found"),
    });
  }
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
  console.log("exam", examData);
  examData.save(async function (error, data) {
    if (error) {
      return next({
        status: 0,
        message: trans.lang("message.something_went_wrong"),
      });
    } else {
      return next({
        status: 1,
        message: trans.lang("message.course.add_success"),
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
    courseId: "$_courseId.title",
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
          localField: "title", // Field in the ExamModels collection to match
          foreignField: "title", // Field in the Course collection to match
          as: "courseData", // The name of the new field to store the matched course data
        },
      },
    ],
    async function (err, data) {
      ExamModels.aggregate(
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
// module.exports.delete = async function (req, res, next) {
//   const documentid = req.params.id;
//   console.log("Id", documentid);
//   CoursesModels.findByIdAndDelete(documentid).then(function (data, err) {
//     if (err) {
//       return next({
//         status: 0,
//         message: trans.lang("message.something_went_wrong"),
//       });
//     }
//     console.log("data", data);
//     if (!data) {
//       return next({
//         status: 0,
//         message: trans.lang("message.student.not_found"),
//       });
//     }

//     return next({
//       status: 1,
//       message: trans.lang("message.student.delete_success"),
//     });
//   });
// };

// module.exports.update = async function (req, res, next) {
//   console.log("Dob", req.body.dob);
//   const courseData = {
//     title: req.body.title,
//     description: req.body.description,
//     status: 1,
//   };
//   const documentId = req.params.id;
//   //   console.log("Data", studentData);
//   //   console.log("Id", documentId);
//   CoursesModels.findByIdAndUpdate(documentId, courseData, {
//     new: true,
//     useFindAndModify: false,
//   }).then(function (data, err) {
//     if (err) {
//       return next({
//         status: 0,
//         message: trans.lang("message.something_went_wrong"),
//       });
//     }
//     console.log("data", data);
//     if (!data) {
//       return next({
//         status: 0,
//         message: trans.lang("message.course.not_found"),
//       });
//     }

//     return next({
//       status: 1,
//       message: trans.lang("message.course_updated_success"),
//     });
//   });
// };
