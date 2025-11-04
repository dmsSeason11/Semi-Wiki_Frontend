import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signup.jsx";
import PostDetail from "./pages/PostDetail/PostDetail.jsx";
import PostForm from "./pages/PostForm/PostForm.jsx";
import PostEditForm from "./pages/PostEditForm/PostEditForm.jsx";
import MyBoard from "./pages/Write Board/writeboard.jsx";
import { createGlobalStyle } from "styled-components";
import { GlobalEditorStyle } from "./pages/PostForm/PostForm.styles.js";
import "./styles/pretendard.css";

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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
