import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Student from "../pages/Student/Student";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Mentor from "../pages/Mentor/Mentor";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoute;
