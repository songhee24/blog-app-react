import "./App.css";
import Header from "./components/Header/index.js";
import { Container } from "@mui/material";
import { Home } from "./pages/index.js";

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
