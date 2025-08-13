import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./Layout";
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
        <Route
          path="/"
          element={
            <Layout>
              <Board />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
