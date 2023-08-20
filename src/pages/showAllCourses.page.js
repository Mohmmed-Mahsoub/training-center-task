import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";
import CoursesCardItem from "../components/courses/coursesCardItem/coursesCardItem.component";
import MainLoader from "../components/general/mainLoader/mainLoader.component";
import NoItemPlaceholder from "../components/general/noItemPlaceholder/noItemPlaceholder.component";
import useSWR from "swr";
import { useEffect, useState } from "react";

const ShowAllCourses = () => {
  //fetch all courses by SWR to easy handle fetching and caching data if there isn't any changes to avoid unnessary requests
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: fetchedCourses,
    error,
    isLoading,
  } = useSWR("https://sheetdb.io/api/v1/owv6j5nrau720", fetcher);

  // State variable to store the processed data to easly change UI by change the state when delete course
  const [courses, setCourses] = useState([]);

  // Update the courses state after data is fetched
  useEffect(() => {
    if (fetchedCourses) {
      setCourses(fetchedCourses);
    }
  }, [fetchedCourses]);

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
        {isLoading ? (
          <MainLoader />
        ) : error ? (
          <div> An error has occurred.</div>
        ) : courses?.length > 0 ? (
          <div className="row">
            {courses?.map((coursesData) => {
              return (
                <CoursesCardItem
                  coursesData={coursesData}
                  key={coursesData.id}
                  setCourses={setCourses}
                  courses={courses}
                />
              );
            })}
          </div>
        ) : (
          <NoItemPlaceholder text="No Courses added yet" size="fs-5" />
        )}
      </Container>
    </section>
  );
};

export default ShowAllCourses;
