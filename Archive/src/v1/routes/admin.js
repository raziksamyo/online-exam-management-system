const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// const Auth = require('../middleware/Auth');

// /* Authentication */
// const auth_controller = require('../controllers/admin/AuthController.js');
// router.get('/', auth_controller.index);
// router.get('/logout', auth_controller.logout);
// router.post('/login', auth_controller.login);
// router.post('/send_otp', auth_controller.sendOtp);
// router.post('/resend_otp', auth_controller.resendOtp);
// router.post('/verify_otp', auth_controller.verifyOtp);
// router.post('/new_password', auth_controller.newPassword);

// router.get('/change-password', Auth.admin, auth_controller.changePassword);
// router.post('/reset_password', Auth.admin, auth_controller.resetPassword);
// router.get('/edit-profile', Auth.admin, auth_controller.editProfile);
// router.post('/update_profile', Auth.admin, auth_controller.updateProfile);

/* Teacher */

const teacher_admin_controller = require("../controllers/admin/TeacherController");
router.get("/teacher/list", teacher_admin_controller.list);
router.post("/teacher/add", teacher_admin_controller.add);
router.post("/teacher/update/:id", teacher_admin_controller.update);
router.post("/teacher/delete/:id", teacher_admin_controller.delete);

/* Student */
const student_admin_controller = require("../controllers/admin/StudentController");
router.get("/student/list", student_admin_controller.list);
router.post("/student/add", student_admin_controller.add);
router.post("/student/update/:id", student_admin_controller.update);
router.post("/student/delete/:id", student_admin_controller.delete);

const course_admin_controller = require("../controllers/admin/CoursesController");
router.get("/course/list", course_admin_controller.list);
router.post("/course/add", course_admin_controller.add);
router.post("/course/update/:id", course_admin_controller.update);
router.post("/course/delete/:id", course_admin_controller.delete);

const exam_admin_controller = require("../controllers/admin/ExamController");
router.get("/exam/list", exam_admin_controller.list);
router.post("/exam/add", exam_admin_controller.add);
router.post("/exam/update/:id", exam_admin_controller.update);
router.post("/exam/delete/:id", exam_admin_controller.delete);

module.exports = router;
