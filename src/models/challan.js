import mongoose, { Schema, models } from "mongoose";

const challanSchema = new Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // wallet: {
    //   type: Number,
    //   default: "0",
    // },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
  }
  //   { timestamps: true }
);

const Challans = models.Challans || mongoose.model("Challans", challanSchema);
export default Challans;
