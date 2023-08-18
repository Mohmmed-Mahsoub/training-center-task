import Footer from "../footer/footer.component";
import NavbarComp from "../navbar/navbar.component";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
