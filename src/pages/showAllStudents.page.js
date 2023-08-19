import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Button, Container, Table } from "react-bootstrap";
import { FaTrashAlt, FaEye } from "react-icons/fa";
const ShowAllStudents = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="topBar py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <h2 className="fs-3">All Students</h2>
          <Link to="/addStudent">
            <Button>
              <span>Add Student</span>
              <i className="ms-2 fs-6 fs-sm-5">
                <AiOutlineAppstoreAdd />
              </i>
            </Button>
          </Link>
        </Container>
      </div>
      <Container>
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>view</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>

              <td>
                <Link to="/showStudent/20">
                  <Button>
                    <i className="fs-6 fs-sm-5">
                      <FaEye />
                    </i>
                  </Button>
                </Link>
              </td>
              <td>
                <Button>
                  <i className="fs-6 fs-sm-5">
                    <FaTrashAlt />
                  </i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default ShowAllStudents;
