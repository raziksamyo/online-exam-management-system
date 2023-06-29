// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Teacher from "layouts/teacher";
import Student from "layouts/student";
import Courses from "layouts/courses";
import Exam from "layouts/exam";
import Result from "layouts/result";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Teacher",
    key: "teacher",
    icon: <Icon fontSize="small">Teacher</Icon>,
    route: "/teacher",
    component: <Teacher />,
  },
  {
    type: "collapse",
    name: "Student",
    key: "student",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/student",
    component: <Student />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <Icon fontSize="small">courses</Icon>,
    route: "/courses",
    component: <Courses />,
  },
  {
    type: "collapse",
    name: "Exam",
    key: "exam",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/exam",
    component: <Exam />,
  },
  {
    type: "collapse",
    name: "Result",
    key: "result",
    icon: <Icon fontSize="small">result</Icon>,
    route: "/result",
    component: <Result />,
  },
];

export default routes;
