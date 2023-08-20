import styles from "./AddCourseForm.module.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { showToast } from "../../../helpers/showToast";
import { isStartDateAfterOrEqualToday } from "../../../helpers/utilites/isStartDateAfterOrEqualToday";
import { isEndDateAfterOrEqualStart } from "../../../helpers/utilites/isEndDateAfterOrEqualStart";

const AddCourseForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = async (courseInputs) => {
    setLoading(true);
    //add course
    try {
      const res = await axios.post(`https://sheetdb.io/api/v1/owv6j5nrau720`, {
        data: [
          {
            id: uuid(),
            ...courseInputs,
          },
        ],
      });
      if (res?.data?.created) {
        setLoading(false);
        //reset form inputs
        setValue("course_name", "");
        setValue("capacity", "");
        setValue("status", "Not Started");
        setValue("start_date", "");
        setValue("end_date", "");
        //show success message
        showToast({
          type: "success",
          messgae: "success to add couese",
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
          <h1 className="mb-3 text-center">Add Course</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <Form.Group className="mb-3" controlId="formGridCourseName">
                  <Form.Label className="fw-bold">Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Course Name"
                    {...register("course_name", {
                      required: "This field is required",
                    })}
                  />
                  {errors.course_name && (
                    <p className="input-error-massage">
                      {errors.course_name.message}
                    </p>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-6">
                <Form.Group className="mb-3" controlId="formGridCapacity">
                  <Form.Label className="fw-bold">Capacity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Capacity"
                    {...register("capacity", {
                      required: "This field is required",
                    })}
                  />
                  {errors.capacity && (
                    <p className="input-error-massage">
                      {errors.capacity.message}
                    </p>
                  )}
                </Form.Group>
              </div>
              <div className="col-xs-12 col-6">
                <Form.Label className="fw-bold">Status</Form.Label>
                <Form.Select
                  className="mb-sm-3"
                  placeholder="Status"
                  {...register("status", {
                    required: "This field is required",
                  })}
                >
                  <option value={"Not Started"}>Not Started</option>
                  <option value={"Started"}>Started</option>
                  <option value={"Canceled"}>Canceled</option>
                </Form.Select>
                {errors.status && (
                  <p className="input-error-massage">{errors.status.message}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-6">
                <Form.Group className="mb-3" controlId="formGridStartDate">
                  <Form.Label className="fw-bold">Start Date</Form.Label>
                  <Form.Control
                    className="text-sm-center text-end"
                    type="date"
                    {...register("start_date", {
                      required: "This field is required",
                      validate: {
                        validDate: (value) =>
                          isStartDateAfterOrEqualToday(value) ||
                          "Start date must be equal to or after today",
                      },
                    })}
                  />
                  {errors.start_date && (
                    <p className="input-error-massage">
                      {errors.start_date.message}
                    </p>
                  )}
                </Form.Group>
              </div>
              <div className="col-xs-12 col-6">
                <Form.Group className="mb-3" controlId="formGridEndDate">
                  <Form.Label className="fw-bold">End Date</Form.Label>
                  <Form.Control
                    className="text-sm-center text-end"
                    type="date"
                    {...register("end_date", {
                      required: "This field is required",
                      validate: {
                        validDate: (value) =>
                          isEndDateAfterOrEqualStart(
                            getValues("start_date"), // Get the value of the start_date field
                            value
                          ) ||
                          "End date must be equal to or after the start date",
                      },
                    })}
                  />
                  {errors.end_date && (
                    <p className="input-error-massage">
                      {errors.end_date.message}
                    </p>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="submitBtnContainer d-flex justify-content-center mt-4">
              <Button className="w-100 p-3" variant="primary" type="submit">
                {loading ? "loading..." : "Add Course"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;
