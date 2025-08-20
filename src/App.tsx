import { Outlet } from "react-router";
import CommonLayout from "./components/layout/commonLayout";
// import { generateRoutes } from "./utils/generateRoutes";
// import { adminSidebarItems } from "./routes/adminSidebarItems";

function App() {
  // console.log(generateRoutes(adminSidebarItems));
  return (
    <>
      <CommonLayout>
        <h2>this is Home</h2>
        <Outlet/>
      </CommonLayout>
    </>
  );
}

export default App;
