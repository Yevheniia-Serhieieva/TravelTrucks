"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";

type FormValues = {
  name: string;
  email: string;
  date: string;
  comment: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.string().required("Booking date is required"),
  comment: Yup.string(),
});

export default function BookingForm() {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className={css.booking}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.field}>
              <Field name="name" type="text" placeholder="Name*" />
            </div>

            <div className={css.field}>
              <Field name="email" type="email" placeholder="Email*" />
            </div>

            <div className={css.field}>
              <Field name="date" type="date" placeholder="Booking date*" />
            </div>

            <div className={css.field}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                rows={4}
              />
            </div>

            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
