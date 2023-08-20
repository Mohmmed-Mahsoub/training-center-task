import { Container } from "react-bootstrap";
import AddCourseForm from "../components/courses/addCourseForm/addCourseForm.component";

const AddCourse = () => {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <AddCourseForm />
      </Container>
    </section>
  );
};

export default AddCourse;
