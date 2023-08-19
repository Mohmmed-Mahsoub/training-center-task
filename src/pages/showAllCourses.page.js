import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";
import CoursesCardItem from "../components/courses/coursesCardItem/coursesCardItem.component";

const ShowAllCourses = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="topBar py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <h2 className="fs-3">All Courses</h2>
          <Link to="/addCourse">
            <Button>
              <span>Add Course</span>
              <i className="ms-2 fs-6 fs-sm-5">
                <AiOutlineAppstoreAdd />
              </i>
            </Button>
          </Link>
        </Container>
      </div>
      <Container>
        <div className="row">
          <CoursesCardItem />
        </div>
      </Container>
    </section>
  );
};

export default ShowAllCourses;
