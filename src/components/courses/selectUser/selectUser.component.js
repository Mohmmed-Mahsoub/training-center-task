import { Form } from "react-bootstrap";

const SelectUser = ({ usersData: { name, id, state }, handleSelect }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>

      <td>
        <Form.Check
          type="checkbox"
          checked={state}
          id={id}
          onClick={() => handleSelect(id, state)}
        />
      </td>
    </tr>
  );
};

export default SelectUser;
