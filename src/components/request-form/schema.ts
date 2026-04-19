import * as Yup from "yup";

export const initialValues: RequestFormValues = {
  title: "",
  description: "",
};

export const requestSchema = Yup.object({
  title: Yup.string().min(3, "Title is too short").required("Title is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});

export type RequestFormValues = Yup.InferType<typeof requestSchema>;
