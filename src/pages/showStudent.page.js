import { useParams } from "react-router-dom";
import useSWR from "swr";
import MainLoader from "../components/general/mainLoader/mainLoader.component";
import ShowUserComp from "../components/users/showUser/showUser.component";

const ShowStudent = () => {
  //get the id prams
  const { id } = useParams();
  //fetch user data by SWR to easy handle fetching and caching data if there isn't any changes to avoid unnessary requests
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR(
    `${process.env.REACT_APP_STUDENTS_API}/search?id=${id}`,
    fetcher
  );
  return (
    <section
      style={{
        minHeight: "100vh",
      }}
    >
      {isLoading ? (
        <MainLoader />
      ) : error ? (
        <div> An error has occurred.</div>
      ) : userData[0]?.id ? (
        <ShowUserComp userData={userData[0]} />
      ) : (
        "not found"
      )}
    </section>
  );
};

export default ShowStudent;
