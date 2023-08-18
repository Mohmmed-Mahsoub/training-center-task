import { Container } from "react-bootstrap";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container className={`py-3 text-center`}>
        Copyright &copy; {new Date().getFullYear()} powered by Mohamed
      </Container>
    </footer>
  );
};

export default Footer;
