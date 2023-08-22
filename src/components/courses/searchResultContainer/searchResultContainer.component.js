import { Button, Table } from "react-bootstrap";
import NoItemPlaceholder from "../../general/noItemPlaceholder/noItemPlaceholder.component";
import SelectUser from "../../courses/selectUser/selectUser.component";
import { useState } from "react";
import { showToast } from "../../../helpers/showToast";
import axios from "axios";
const SearchResultContainer = ({
  loading,
  searchResults,
  setSearchResults,
  course_name,
  course_id,
}) => {
  const [selectedUserData, setSelectedUserData] = useState({});
  const [loadingSave, setLoadingSave] = useState(false);
  console.log(
    "process.env.REACT_APP_STUDENTS_TO_COURSE_API",
    process.env.REACT_APP_STUDENTS_TO_COURSE_API
  );

  const handleSelect = (id, state) => {
    const serchResultsAfterChangeSelectedStudentState = searchResults.map(
      (student) => {
        if (student.id === id && !student.state) {
          setSelectedUserData(student);
          return { ...student, state: !state };
        } else if (student.id === id && student.state) {
          setSelectedUserData({});
          return { ...student, state: !state };
        }
        // otherwise return object as is
        return { ...student, state: false };
      }
    );
    setSearchResults(serchResultsAfterChangeSelectedStudentState);
  };

  const handleSaveSelectedUser = async () => {
    setLoadingSave(true);
    //add user to course
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_STUDENTS_TO_COURSE_API}`,
        {
          data: [
            {
              course_id,
              course_name,
              student_id: selectedUserData.id,
              student_name: selectedUserData.name,
            },
          ],
        }
      );
      if (res?.data?.created) {
        setLoadingSave(false);

        //show success message
        showToast({
          type: "success",
          messgae: "success to add user to the course",
        });
      }
    } catch (error) {
      setLoadingSave(false);
      console.log(error);
    }
  };
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : searchResults?.length > 0 ? (
        <>
          <Table hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {searchResults?.map((usersData) => {
                return (
                  <SelectUser
                    usersData={usersData}
                    key={usersData.id}
                    handleSelect={handleSelect}
                  />
                );
              })}
            </tbody>
          </Table>
          <Button onClick={handleSaveSelectedUser}>
            {loadingSave ? "loading..." : "add"}
          </Button>
        </>
      ) : searchResults?.length == 0 ? (
        <div>no matched user</div>
      ) : (
        <NoItemPlaceholder text="Search fo a student" size="fs-5" />
      )}
    </div>
  );
};

export default SearchResultContainer;
