import "./App.css";
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

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
