import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Header />
      <Footer />
    </>
  );
}

export default App;
