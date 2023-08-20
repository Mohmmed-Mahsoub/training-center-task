import axios from "axios";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { showToast } from "../../../helpers/showToast";
import { mutate } from "swr";

const AllStudentsList = ({
  usersData: { name, id, email, telephone, address },
}) => {
  const [loadingDel, setLoadingDel] = useState(false);

  const handleDelUser = async (id) => {
    setLoadingDel(true);

    //delet user
    try {
      const res = await axios.delete(
        `https://sheetdb.io/api/v1/9wtqfny1g7km6/id/${id}`
      );
      if (res?.data?.deleted) {
        setLoadingDel(false);
        // Manually trigger revalidation for the specified key to fetch new data after delete to avoid show caching data for a moment when navigate even if it was deleted
        mutate("https://sheetdb.io/api/v1/9wtqfny1g7km6");
        //show success after delete
        showToast({
          type: "success",
          messgae: "success to delete user",
        });
      }
    } catch (error) {
      setLoadingDel(false);
      console.log(error);
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{telephone}</td>
      <td>{address}</td>
      <td>
        <Link to={`/showStudent/${id}`}>
          <Button>
            <i className="fs-6 fs-sm-5">
              <FaEye />
            </i>
          </Button>
        </Link>
      </td>
      <td>
        <Button onClick={() => handleDelUser(id)}>
          {loadingDel ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <i className="fs-6 fs-sm-5">
              <FaTrashAlt />{" "}
            </i>
          )}
        </Button>
      </td>
    </tr>
  );
};

export default AllStudentsList;
