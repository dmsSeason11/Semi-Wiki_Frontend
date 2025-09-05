import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function Layout({ children, searchTerm, setSearchTerm }) {
  return (
    <>
      <Header onSearch={setSearchTerm} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
