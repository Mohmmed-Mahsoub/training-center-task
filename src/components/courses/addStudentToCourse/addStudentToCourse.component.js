import { useState, useEffect } from "react";
import SearchInput from "../serachInput/serachInput.component";
import axios from "axios";
import { usePrevious } from "../../../helpers/customHooks/usePrev";
import SearchResultContainer from "../searchResultContainer/searchResultContainer.component";
const AddStudentToCourse = ({ course_name, course_id }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchResults, setSearchResults] = useState(false);

  // select the prev state or the initial state
  const prevQuery = usePrevious(query);

  useEffect(() => {
    //ONLY when query changed and avoide first render and when serching
    if (prevQuery !== undefined && prevQuery !== query && query !== "") {
      setLoading(true);
      const delayDebounceFn = setTimeout(async () => {
        try {
          const searchResultsData = await axios.get(
            `${process.env.REACT_APP_STUDENTS_API}/search?name=${query}*`
          );
          const preperDataBeforSet = searchResultsData?.data.map(
            (studentData) => {
              return {
                ...studentData,
                state: false,
              };
            }
          );
          setSearchResults(preperDataBeforSet);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
      //when clear serch
    } else if (prevQuery !== undefined && prevQuery !== query && query === "") {
      setSearchResults(false);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="row mt-3">
      <div className="col-3">add user to course</div>
      <div className="col-9">
        <SearchInput query={query} setQuery={setQuery} />
        <SearchResultContainer
          loading={loading}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          course_name={course_name}
          course_id={course_id}
        />
      </div>
    </div>
  );
};

export default AddStudentToCourse;
