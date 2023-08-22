import styles from "./EditCourseForm.module.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { showToast } from "../../../helpers/showToast";

const EditCourseForm = ({
  courseData: { id, course_name, capacity, status, start_date, end_date },
}) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  //set course data to inputs
  useEffect(() => {
    setValue("course_name", course_name);
    setValue("capacity", capacity);
    setValue("status", status);
    setValue("start_date", start_date);
    setValue("end_date", end_date);
  }, []);

  const onSubmit = async (courseInputs) => {
    setLoading(true);
    //edite course
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_COURSES_API}/id/${id}`,
        {
          data: {
            ...courseInputs,
          },
        }
      );
      if (res?.data?.updated) {
        setLoading(false);
        //show success message
        showToast({
          type: "success",
          messgae: "success to edit couese",
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
          <h1 className="mb-3 fw-bold">Edit Course</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <Form.Group className="mb-3" controlId="formGridCourseName">
                  <Form.Label>Course Name</Form.Label>
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
                  <Form.Label>Capacity</Form.Label>
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
                <Form.Label>Status</Form.Label>
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
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    className="text-sm-center text-end"
                    type="date"
                    {...register("start_date", {
                      required: "This field is required",
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
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    className="text-sm-center text-end"
                    type="date"
                    {...register("end_date", {
                      required: "This field is required",
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
                {loading ? "loading..." : "Edit Course"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditCourseForm;
