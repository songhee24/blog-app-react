import "./App.css";
import Header from "./components/Header/index.jsx";
import { Container } from "@mui/material";
import { Home } from "./pages/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/*<FullPost />*/}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </Container>
    </>
  );
}

export default App;
