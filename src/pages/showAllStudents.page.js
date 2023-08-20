import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Button, Container, Table } from "react-bootstrap";
import useSWR from "swr";
import NoItemPlaceholder from "../components/general/noItemPlaceholder/noItemPlaceholder.component";
import MainLoader from "../components/general/mainLoader/mainLoader.component";
import AllStudentsList from "../components/users/allStudentsList/allStudentsList.component";

const ShowAllStudents = () => {
  //fetch all users by SWR to easy handle fetching and caching data if there isn't any changes to avoid unnessary requests
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: users,
    error,
    isLoading,
  } = useSWR("https://sheetdb.io/api/v1/9wtqfny1g7km6", fetcher);

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
        {isLoading ? (
          <MainLoader />
        ) : error ? (
          <div> An error has occurred.</div>
        ) : users?.length > 0 ? (
          <Table hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Address</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((usersData) => {
                return (
                  <AllStudentsList usersData={usersData} key={usersData.id} />
                );
              })}
            </tbody>
          </Table>
        ) : (
          <NoItemPlaceholder text="No users added yet" size="fs-5" />
        )}
      </Container>
    </section>
  );
};

export default ShowAllStudents;
