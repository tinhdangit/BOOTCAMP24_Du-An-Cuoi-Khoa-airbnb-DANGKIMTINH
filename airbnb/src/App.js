import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefauLayout from "./layouts/defauLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import ListRoom from "pages/ListRoom/ListRoom";
import DetailRoom from "pages/DetailRoom/DetailRoom";
import { UserPage } from "pages/UserPage/UserPage";
import {
  DefaulManager,
  UserManager,
} from "pages/UserManager/DefaulManagerPage";
import InforoomManagerPage from "pages/InforoomManagerPage/InforoomManagerPage";
import LocalManagerPage from "pages/LocalManagerPage/LocalManagerPage";
import UserManagerPage from "pages/UserManagerPage/UserManagerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefauLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/listroom" element={<ListRoom />} />
        </Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/listroom" element={<ListRoom />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/detailroom/:idroom" element={<DetailRoom />}></Route>
        {/* <Route path="/users/:idusers" element={<UserPage />}></Route> */}

        <Route path="/admin" element={<DefaulManager />}>
          <Route path="quanlithongtinvitri" element={<LocalManagerPage />} />
          {/* <Route path="user" element={<UserPage />} /> */}
          <Route path="quanlithongtinphong" element={<InforoomManagerPage />} />
          <Route path="quanlinguoidung" element={<UserManagerPage />} />
          <Route index element={<UserManagerPage />} />
        </Route>

        <Route
          path="/quanlithongtinphong"
          element={<LocalManagerPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
