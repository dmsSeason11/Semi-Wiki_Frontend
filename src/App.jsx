import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";
import SignUpContainer from "./pages/SignUp/signupContainer";
import Mypage from "./pages/Mypage/mypage";
import PostDetail from "./pages/PostDetail/PostDetail.jsx";
import PostForm from "./pages/PostForm/PostForm.jsx";
import PostEditForm from "./pages/PostEditForm/PostEditForm.jsx";
import MyBoard from "./pages/Write Board/writeboard.jsx";
import { createGlobalStyle } from "styled-components";
import { GlobalEditorStyle } from "./pages/PostForm/PostForm.styles.js";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Board searchTerm={searchTerm} />
            </Layout>
          }
        />
        <Route
          path="/mypage/:accountId"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Mypage />
            </Layout>
          }
        />
        <Route
          path="/board/:id"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <PostDetail />
            </Layout>
          }
        />
        <Route
          path="/mypage/:accountId/list"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <MyBoard />
            </Layout>
          }
        />
        <Route
          path="/postform"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <GlobalEditorStyle />
              <PostForm />
            </Layout>
          }
        />
        <Route
          path="/posteditform/:id"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
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
