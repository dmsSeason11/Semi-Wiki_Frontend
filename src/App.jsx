import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./Layout";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";
import SignUpContainer from "./pages/SignUp/signupContainer";
import Mypage from "./pages/Mypage/mypage";
import PostDetail from "./pages/PostDetail/postDetail";
import Writeboard from "./pages/Write Board/Writeboard.jsx";

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
        <Route
          path="/"
          element={
            <Layout>
              <Board />
            </Layout>
          }
        />
        <Route
          path="/mypage"
          element={
            <Layout>
              <Mypage />
            </Layout>
          }
        />
        <Route
          path="/board/:id"
          element={
            <Layout>
              <PostDetail />
            </Layout>
          }
        />
        <Route
          path="/writeboard"
          element={
            <Layout>
              <Writeboard />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpContainer />} />
      </Routes>
    </>
  );
}

export default App;