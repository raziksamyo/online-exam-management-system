const CoursesModels = require("../../models/admin/courses");
const TeacherModels = require("../../models/admin/Teacher");

module.exports.add = async function (req, res, next) {
  const { title, description, teacherId } = req.body;
  //   console.log(courseData);
  const teacher = await TeacherModels.findById(teacherId);
  // console.log("teacher", teacher);
  if (!teacher) {
    return next({
      status: 0,
      message: trans.lang("message.teacher_not_found"),
    });
  }
  const courseData = new CoursesModels({
    title,
    description,
    teacher: teacher._id,
    status: 1,
  });
  // console.log("courses", courseData);
  courseData.save(async function (error, data) {
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

module.exports.courseList = async function (req, next) {
  let s_data = {};

  var project = {
    title: "$title",
    description: "$description",
    teacherId: "$teacherId",
    status: "$status",
  };

  // console.log("id", _id);
  CoursesModels.aggregate(
    [
      { $match: s_data },
      { $sort: { _id: -1 } },
      { $project: project },
      {
        $lookup: {
          from: "teachers",
          localField: "teacherId",
          foreignField: "_id", // Field in the Course collection to match
          as: "teacherData", // The name of the new field to store the matched course data
        },
      },
      // console.log("lookup", lookup),
    ],
    async function (err, data) {
      CoursesModels.aggregate(
        [{ $match: s_data }, { $sort: { _id: -1 } }, { $project: project }],
        async function (err, cdata) {
          if (data.length > 0) {
            var dataArray = []; // Create an empty array

            await data.reduce(function (promiesRes, row, index) {
              return promiesRes.then(async function () {
                // Perform any necessary operations on `row` here
                // For example, you can modify or filter the data
                console.log("row", row);
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
