import { Route } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import RegisterPage from "../pages/Register";

const routes = [
  <Route path="/" element={<DashboardPage />}></Route>,

  <Route path="/register" element={<RegisterPage />}></Route>,
];

export default routes;
