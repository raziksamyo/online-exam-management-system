// Material Dashboard 2 React example components
import DashboardMain from "components/Dashboard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DashboardMain />
    </DashboardLayout>
  );
}

export default Dashboard;
