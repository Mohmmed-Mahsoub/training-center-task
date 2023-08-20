import { Container } from "react-bootstrap";
import styles from "./ShowUser.module.css";

const ShowUserComp = ({
  userData: { name, id, email, telephone, address },
}) => {
  return (
    <Container className="mt-4">
      <h1>{name}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex p-3">
            <span className={`fw-bold ${styles.fitCont}`}>id : </span>
            <span className="ms-2">{id}</span>
          </div>
          <div className="d-flex p-3">
            <span className={`fw-bold ${styles.fitCont}`}>email : </span>
            <span className="ms-2">{email}</span>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex p-3">
            <span className={`fw-bold ${styles.fitCont}`}>telephone : </span>
            <span className="ms-2">{telephone}</span>
          </div>
          <div className="d-flex p-3">
            <span className={`fw-bold ${styles.fitCont}`}>address : </span>
            <span className="ms-2">{address}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShowUserComp;
