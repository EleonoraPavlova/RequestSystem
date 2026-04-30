import * as Yup from "yup";

export const initialValues: RequestFormValues = {
  title: "",
  description: "",
};

export const createRequestSchema = (t: (_key: string) => string) =>
  Yup.object({
    title: Yup.string()
      .min(3, t("validation_title_too_short"))
      .required(t("validation_title_required")),
    description: Yup.string()
      .min(10, t("validation_description_too_short"))
      .required(t("validation_description_required")),
  });

export type RequestFormValues = Yup.InferType<ReturnType<typeof createRequestSchema>>;
