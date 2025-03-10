import RegisterForm from "@/components/auth/RegisterForm";
import { getServerSession } from "next-auth";
import { connectMongoDB } from "@/lib/mongodb";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  await connectMongoDB();
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return <RegisterForm />;
}
