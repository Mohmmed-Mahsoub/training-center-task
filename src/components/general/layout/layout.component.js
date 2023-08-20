import Footer from "../footer/footer.component";
import NavbarComp from "../navbar/navbar.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
