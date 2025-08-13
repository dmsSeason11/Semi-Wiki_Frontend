import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";
import Mypage from "./pages/Mypage/mypage";

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
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Header />
      <Footer />
    </>
  );
}

export default App;
