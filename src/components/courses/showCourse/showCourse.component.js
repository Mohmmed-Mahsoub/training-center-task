import { Container } from "react-bootstrap";
import styles from "./ShowCourse.module.css";
import AddStudentToCourse from "../addStudentToCourse/addStudentToCourse.component";

const ShowCourseComp = ({
  courseData: { id, course_name, capacity, status, start_date, end_date },
}) => {
  return (
    <Container className="mt-4">
      <h1>{course_name}</h1>
      <div className="row">
        <div className="col-6">
          <div className="d-flex p-3">
            <span className="fw-bold">capacity : </span>
            <span className="ms-2">{capacity}</span>
          </div>
          <div className="d-flex p-3">
            <span className="fw-bold">status : </span>
            <span className="ms-2">{status}</span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex p-3">
            <span className="fw-bold">start date : </span>
            <span className="ms-2">{start_date}</span>
          </div>
          <div className="d-flex p-3">
            <span className="fw-bold">end date : </span>
            <span className="ms-2">{end_date}</span>
          </div>
        </div>
      </div>
      <AddStudentToCourse course_id={id} course_name={course_name} />
    </Container>
  );
};

export default ShowCourseComp;
