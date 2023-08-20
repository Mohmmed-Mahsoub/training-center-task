import EditCourseForm from "../components/courses/editCourseForm/editCourseForm.component";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MainLoader from "../components/general/mainLoader/mainLoader.component";
import { Container } from "react-bootstrap";

const EditCourse = () => {
  //get the id prams
  const { id } = useParams();
  //fetch course data by SWR to easy handle fetching and caching data if there isn't any changes to avoid unnessary requests
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: courseData,
    error,
    isLoading,
  } = useSWR(
    `https://sheetdb.io/api/v1/owv6j5nrau720/search?id=${id}`,
    fetcher
  );

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
        {isLoading ? (
          <MainLoader />
        ) : error ? (
          <div> An error has occurred.</div>
        ) : courseData[0]?.id ? (
          <EditCourseForm courseData={courseData[0]} />
        ) : (
          "not found"
        )}
      </Container>
    </section>
  );
};

export default EditCourse;
