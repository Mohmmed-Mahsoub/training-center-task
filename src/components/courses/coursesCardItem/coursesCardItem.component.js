import { Button } from "react-bootstrap";
import styles from "./CoursesCardItem.module.css";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const CoursesCardItem = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
      <Link to="/showCourse/20">
        <div className={styles.cardContContainer}>
          <h3 className="fw-bold fs-5 text-center position-relative">
            Course Name
          </h3>
          <div
            className={`${styles.categoryControlsContainer} d-flex justify-content-center position-relative`}
          >
            <Link to="/editCourse/20">
              <Button
                className={`d-flex align-items-center justify-content-center ${styles.adjust} ${styles.categoryControl}`}
              >
                <i className="d-flex justify-content-center">
                  <FiEdit />{" "}
                </i>
              </Button>
            </Link>
            <Button className={`${styles.delete} ${styles.categoryControl}`}>
              <i className="d-flex justify-content-center">
                <FaTrashAlt />{" "}
              </i>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesCardItem;
