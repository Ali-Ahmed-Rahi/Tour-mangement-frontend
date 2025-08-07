import { Outlet } from "react-router";
import CommonLayout from "./components/layout/commonLayout";

function App() {
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
