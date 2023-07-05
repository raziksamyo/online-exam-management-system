// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Teachers from "layouts/teachers";
import Students from "layouts/students";
import Courses from "layouts/courses";
import Exams from "layouts/exams";
import Results from "layouts/results";

// @mui icons
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardRoundedIcon />,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Teachers",
    key: "teachers",
    icon: <GroupsRoundedIcon />,
    route: "/teachers",
    component: <Teachers />,
  },
  {
    type: "collapse",
    name: "Students",
    key: "students",
    icon: <SchoolIcon />,
    route: "/students",
    component: <Students />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <LibraryBooksRoundedIcon />,
    route: "/courses",
    component: <Courses />,
  },
  {
    type: "collapse",
    name: "Exams",
    key: "exam",
    icon: <BorderColorRoundedIcon />,
    route: "/exams",
    component: <Exams />,
  },
  {
    type: "collapse",
    name: "Results",
    key: "result",
    icon: <AssignmentTurnedInRoundedIcon />,
    route: "/results",
    component: <Results />,
  },
];

export default routes;
