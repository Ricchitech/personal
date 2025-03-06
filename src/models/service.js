import mongoose, { Schema, models } from "mongoose";

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    logo: {
      type: string,

      default:
        "https://seeklogo.com/images/T/the-karnataka-government-kannada-logo-1E81E14E5B-seeklogo.com.png",
    },
    state: {
      type: string,
      required: true,
      default: "KARNATAKA",
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = models.Service || mongoose.model("Service", serviceSchema);
export default Service;
