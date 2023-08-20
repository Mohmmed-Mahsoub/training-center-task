import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./CoursesCardItem.module.css";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { showToast } from "../../../helpers/showToast";

const CoursesCardItem = ({
  coursesData: { course_name, id },
  setCourses,
  courses,
}) => {
  const [loadingDel, setLoadingDel] = useState(false);

  const handleDelCourse = async (event, id) => {
    event.preventDefault(); //stop routiog only when press del btn
    setLoadingDel(true);

    //delet course
    try {
      const res = await axios.delete(
        `https://sheetdb.io/api/v1/owv6j5nrau720//id/${id}`
      );
      if (res?.data?.deleted) {
        setLoadingDel(false);
        //immediatly delete course to avoid need for reload page
        const restCoursesAfterDel = courses.filter(
          (course) => course.id !== id
        );
        setCourses(restCoursesAfterDel);
        //show success after delete
        showToast({
          type: "success",
          messgae: "success to delete couese",
        });
      }
    } catch (error) {
      setLoadingDel(false);
      console.log(error);
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
      <Link to={`/showCourse/${id}`}>
        <div className={styles.cardContContainer}>
          <h3 className="fw-bold fs-5 text-center position-relative">
            {course_name}
          </h3>
          <div
            className={`${styles.categoryControlsContainer} d-flex justify-content-center position-relative`}
          >
            <Link to={`/editCourse/${id}`}>
              <Button
                className={`d-flex align-items-center justify-content-center ${styles.adjust} ${styles.categoryControl}`}
              >
                <i className="d-flex justify-content-center">
                  <FiEdit />{" "}
                </i>
              </Button>
            </Link>
            <Button
              onClick={(event) => handleDelCourse(event, id)}
              className={`${styles.delete} ${styles.categoryControl}`}
            >
              {loadingDel ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className={styles.loading}
                />
              ) : (
                <i className="d-flex justify-content-center">
                  <FaTrashAlt />{" "}
                </i>
              )}
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesCardItem;
