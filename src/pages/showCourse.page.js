import { useParams } from "react-router-dom";
import useSWR from "swr";
import ShowCourseComp from "../components/courses/showCourse/showCourse.component";

const ShowCourse = () => {
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
        minHeight: "100vh",
      }}
    >
      {isLoading ? (
        <div> Loading...</div>
      ) : error ? (
        <div> An error has occurred.</div>
      ) : courseData[0]?.id ? (
        <ShowCourseComp courseData={courseData[0]} />
      ) : (
        "not found"
      )}
    </section>
  );
};

export default ShowCourse;
