// import * as Yup from "yup";
const Yup = require("yup");

export default class AnalyticValidation {
  static token = Yup.object({
    user: Yup.object({
      userId: Yup.string().required("You do not have access to this feature"),
      role: Yup.array(),
    }),
  });
  static single = Yup.object({
    params: Yup.object({
      id: Yup.string().required("id is required"),
    }),
  });
}
