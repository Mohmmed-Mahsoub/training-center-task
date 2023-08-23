import { Container } from "react-bootstrap";
import styles from "./ShowUser.module.css";

const ShowUserComp = ({
  userData: { name, id, email, telephone, address },
  allStudentsCourses,
  isLoadingUserCourses,
  studentCoursesError,
}) => {
  const studentCourses = allStudentsCourses?.filter((obj) => {
    return obj.student_id == id;
  });
  const uniqueCourseNames = [
    ...new Set(studentCourses?.map((course) => course.course_name)),
  ];

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
      <div className="row">
        <div className="col-12">
          {isLoadingUserCourses ? (
            <div>loading ...</div>
          ) : studentCoursesError ? (
            <div> An error has occurred.</div>
          ) : uniqueCourseNames && uniqueCourseNames.length > 0 ? (
            <div className="d-flex p-3">
              <span className={`fw-bold ${styles.fitCont}`}>
                studen's courses :{" "}
              </span>
              {uniqueCourseNames.map((course, index) => (
                <span className="ms-2" key={index}>
                  {course}
                  {index < uniqueCourseNames.length - 1 && ","}
                </span>
              ))}
            </div>
          ) : (
            <div className="d-flex p-3">
              <span className={`fw-bold ${styles.fitCont}`}>
                studen's courses :{" "}
              </span>
              <span className="ms-2">no courses</span>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ShowUserComp;
