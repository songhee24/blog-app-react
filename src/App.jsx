import React from "react";
import Header from "./components/Header/index.jsx";
import { Container } from "@mui/material";
import {
  AddPost,
  FullPost,
  Home,
  Login,
  Registration,
} from "./pages/index.jsx";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authSlice.js";
import XSSHelper from "./components/XSSHelper.jsx";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/xss-helper" element={<XSSHelper />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
