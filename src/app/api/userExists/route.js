import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("req data", req);
    await connectMongoDB();
    const { email } = await req.json();
    console.log("email", email);
    const user = await User.findOne({ email }).select("_id");
    // const userdata = await User.findOne({ email });
    // console.log("Admin info: ", userdata.isAdmin);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
