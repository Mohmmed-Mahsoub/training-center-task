import { Spinner } from "react-bootstrap";
import styles from "./MainLoader.module.css";

const MainLoader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <Spinner
        className={styles.spinner}
        as="span"
        animation="border"
        role="status"
        aria-hidden="true"
      />
    </div>
  );
};

export default MainLoader;
