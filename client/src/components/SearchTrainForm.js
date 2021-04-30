import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "../Css/SearchTrainForm.css";

const SearchTrainForm = () => {
  const initialValues = {
    trainType: "",
    locationFrom: "",
    locationTo: "",
    departureDate: "",
  };
  const validationSchema = Yup.object({
    trainType: Yup.string().required("Field Required"),
    locationFrom: Yup.string().required("Field Required"),
    trainType: Yup.string().required("Field Required"),
    departureDate: Yup.string().required("Field Required"),
  });
  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(values, errors, handleChange, handleSubmit, handleBlur, isSubmitting, setSubmitting) => (
        <Form className="Search-field">
          <div className="form-group">
            <label htmlFor="trainType">Train Type</label>
            <Field as="select" name="trainType">
              <option value="">Select...</option>
              <option value="inter-county">Inter County</option>
              <option value="express">Express</option>
            </Field>
            <div className="error-display">
              <ErrorMessage name="trainType" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="locationFrom">From</label>
            <Field as="select" name="locationFrom">
              <option value="">Select...</option>
              <option value="nairobi">Nairobi Terminus</option>
              <option value="mombasa">Mombasa Terminus</option>
              <option value="voi">Voi</option>
              <option value="mtito andei">Mtito Andei</option>
              <option value="mariakani">Mariakani</option>
              <option value="miaseny">Miaseny</option>
              <option value="kibwezi">Kibwezi</option>
              <option value="emali">Emali</option>
              <option value="athi river">Athi River</option>
            </Field>
            <div className="error-display">
              <ErrorMessage name="locationFrom" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="locationTo">To</label>
            <Field as="select" name="locationTo">
              <option value="">Select...</option>
              <option value="nairobi">Nairobi Terminus</option>
              <option value="mombasa">Mombasa Terminus</option>
              <option value="voi">Voi</option>
              <option value="mtito andei">Mtito Andei</option>
              <option value="mariakani">Mariakani</option>
              <option value="miaseny">Miaseny</option>
              <option value="kibwezi">Kibwezi</option>
              <option value="emali">Emali</option>
              <option value="athi river">Athi River</option>
            </Field>
            <div className="error-display">
              <ErrorMessage name="locationTo" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="departureDate">departure date</label>
            <Field type="date" name="departureDate" />
            <div className="error-display">
              <ErrorMessage name="departureDate" />
            </div>
          </div>

          <button type="submit" className="button-hero-lg">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchTrainForm;
