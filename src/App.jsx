import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./Layout";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";
import SignUpContainer from "./pages/SignUp/signupContainer";
import Mypage from "./pages/Mypage/mypage";
import PostDetail from "./pages/PostDetail/postDetail";
import PostForm from "./pages/PostForm/PostForm.jsx";
import PostEditForm from "./pages/PostEditForm/PostEditForm.jsx";
import { GlobalEditorStyle } from "./pages/PostForm/PostForm.styles.js";
import MyBoard from "./pages/Write Board/writeboard.jsx";

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
          path="/mypage/:accountId"
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
          path="/mypage/:accountId/list"
          element={
            <Layout>
              <MyBoard />
            </Layout>
          }
        />
        <Route
          path="/postform"
          element={
            <Layout>
              <GlobalEditorStyle />
              <PostForm />
            </Layout>
          }
        />
        <Route
          path="/posteditform"
          /*:postId"*/
          element={
            <Layout>
              <GlobalEditorStyle />
              <PostEditForm />
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
