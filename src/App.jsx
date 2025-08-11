import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Board from "./pages/Board/board";

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
      </Routes>
    </>
  );
}

export default App;