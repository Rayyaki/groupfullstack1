import { Box } from "@chakra-ui/react";
import "./App.css";
import DashboardPage from "./pages/Dashboard";
import RegisterPage from "./pages/Register";
import { Routes } from "react-router-dom";
import routes from "./routes/router";

function App() {
  return (
    <>
      <Routes>{routes.map((val) => val)}</Routes>
      {/* <DashboardPage></DashboardPage>
      <RegisterPage></RegisterPage> */}
    </>
  );
}

export default App;
