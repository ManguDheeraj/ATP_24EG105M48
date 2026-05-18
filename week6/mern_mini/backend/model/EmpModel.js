import { Schema, model } from "mongoose";

const empSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of employee is required"],
    },
    email: {
      type: String,
      required: [true, "Email of employee is required"],
      unique: true,
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
    },
    designation: {
      type: String,
      required: [true, "Designation of employee is required"],
    },
    company: {
      type: String,
       required: [true, "Name of company is required"],
    },
  },
  {  versionKey: false, timestamps: true },
);

//export modekl
export const EmpModel = model("emp", empSchema);