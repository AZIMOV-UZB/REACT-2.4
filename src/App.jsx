import { Route, Routes } from "react-router-dom";
import Layout from "./companents/layout/Layout";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import User from "./pages/admin/User";
import Profil from "./pages/admin/Profil";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route index element={<Home />} />
            <Route path="/Admin/*" element={<Admin/>}>
          <Route path="profil" element={<Profil/>} />
          <Route path="user" element={<User/>} />
        </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
