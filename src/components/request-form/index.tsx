import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import { useT } from "talkr";

import { createRequestSchema, initialValues } from "./schema";
import styles from "./request-form.module.css";

import { addRequest } from "@/services/requestSlice";
import AlertHeroui from "@/components/alert";
import { useAppDispatch } from "@/services/hooks";
import Button from "@/components/button";
import { useActionLogger } from "@/shared/hooks/useActionLogger";

const RequestForm = (): ReactElement => {
  const { T: t } = useT();
  const logAction = useActionLogger("User");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: createRequestSchema(t),
    onSubmit: async (values, { resetForm }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(addRequest(values));
      logAction("action_create_click");
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
            {t("form_title_label")}
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className={styles.input}
            placeholder={t("form_title_placeholder")}
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
            {t("form_description_label")}
          </label>
          <textarea
            id="description"
            name="description"
            className={styles.input}
            placeholder={t("form_description_placeholder")}
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
          {formik.isSubmitting ? t("form_sending") : t("form_send")}
        </Button>

        {formik.status?.success && <p className="success-msg">{formik.status.message}</p>}
      </form>
      {isAlertVisible && <AlertHeroui title={t("alert_request_created")} color={"success"} />}
    </>
  );
};

export default RequestForm;
