import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import IndexView from "../pages";
import UserView from "../pages/user";

const AppRouter = () => {
  let loginAccess = null;
  if (localStorage.getItem("user") !== undefined) {
    loginAccess = localStorage.getItem("user");
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexView />}></Route>
        <Route path="/ingreso" element={<IndexView />}></Route>
        <Route path="/usuario" element={loginAccess !== null ? <UserView /> : <Navigate  to="/" replace />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
