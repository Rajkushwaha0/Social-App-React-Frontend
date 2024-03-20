import { Route, Routes } from "react-router-dom";
import UserDetail from "../component/UserDetail/UserDetail";
import SocialApp from "../component/SocialApp";

function customRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SocialApp />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default customRoutes;
