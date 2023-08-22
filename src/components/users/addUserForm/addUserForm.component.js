import styles from "./AddUserForm.module.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { showToast } from "../../../helpers/showToast";

const AddUserForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (userInputs) => {
    setLoading(true);
    //add user
    try {
      const res = await axios.post(`${process.env.REACT_APP_STUDENTS_API}`, {
        data: [
          {
            id: uuid(),
            ...userInputs,
          },
        ],
      });
      if (res?.data?.created) {
        setLoading(false);
        //reset form inputs
        setValue("name", "");
        setValue("email", "");
        setValue("telephone", "");
        setValue("address", "");
        //show success message
        showToast({
          type: "success",
          messgae: "success to add user",
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={`row ${styles.row}`}>
      <div className={`col-12 ${styles.formColumn}`}>
        <div className={`${styles.formCont} p-sm-5 p-3`}>
          <h1 className="mb-3 text-center">Add user</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGridUserName">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "This field is required",
                })}
              />
              {errors.name && (
                <p className="input-error-massage">{errors.name.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridUserEmail">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "This field is required",
                })}
              />
              {errors.email && (
                <p className="input-error-massage">{errors.email.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridTelephone">
              <Form.Label className="fw-bold">Telephone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Telephone"
                {...register("telephone", {
                  required: "This field is required",
                })}
              />
              {errors.telephone && (
                <p className="input-error-massage">
                  {errors.telephone.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridUserAddress">
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                {...register("address", {
                  required: "This field is required",
                })}
              />
              {errors.address && (
                <p className="input-error-massage">{errors.address.message}</p>
              )}
            </Form.Group>

            <div className="submitBtnContainer d-flex justify-content-center mt-4">
              <Button className="w-100 p-3" variant="primary" type="submit">
                {loading ? "loading..." : "Add user"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
