import Dashboard from "../../components/DashBoardUser/Dashboard";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import DashboardAdmin from "@/components/Admin/DashboardAdmin";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  await connectMongoDB();
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const userdata = await User.findOne({ email });
  const data = JSON.parse(JSON.stringify(userdata));

  return email && data?.isAdmin ? (
    <DashboardAdmin />
  ) : email && !data?.isAdmin ? (
    <Dashboard />
  ) : (
    ""
  );
}
