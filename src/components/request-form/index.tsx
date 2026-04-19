import { useFormik } from "formik";
import { ReactElement, useState } from "react";

import { initialValues, requestSchema } from "./schema";
import styles from "./request-form.module.css";

import { Button } from "@/components/button";
import { addRequest } from "@/services/requestSlice";
import AlertHeroui from "@/components/alert";
import { useAppDispatch } from "@/services/hooks";

const RequestForm = (): ReactElement => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: requestSchema,
    onSubmit: async (values, { resetForm }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(addRequest(values));
      console.log("Form Submitted:", values);

      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 4000);

      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className={styles.input}
            placeholder="Enter title..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <span className={styles.error}>{formik.errors.title}</span>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className={styles.input}
            placeholder="Describe your request..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <span className={styles.error}>{formik.errors.description}</span>
          ) : null}
        </div>

        <Button
          type="submit"
          variant="primary"
          isLoading={formik.isSubmitting}
          disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
          className={styles.btn}
        >
          {formik.isSubmitting ? "Sending..." : "Send"}
        </Button>

        {formik.status?.success && <p className="success-msg">{formik.status.message}</p>}
      </form>
      {isAlertVisible && <AlertHeroui title={"Request created successfully!"} color={"success"} />}
    </>
  );
};

export default RequestForm;
