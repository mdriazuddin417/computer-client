import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

import { publicRoutes } from "./routes/publicRoutes";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import privateRoutes from "./routes/privateRoutes";
import AddProduct from "../src/pages/AdminPage/AddProduct";
import MyProfile from "./pages/userPage/MyProfile";
import MyOrder from "./pages/userPage/MyOrder";
import AddReview from "./pages/userPage/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/addproduct" element={<AddProduct />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="myorder" element={<MyOrder />} />
            <Route path="addreview" element={<AddReview />} />
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
