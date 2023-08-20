import { Container } from "react-bootstrap";
import AddUserForm from "../components/users/addUserForm/addUserForm.component";

const AddStudent = () => {
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
        <AddUserForm />
      </Container>
    </section>
  );
};

export default AddStudent;
