import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Bharathraj Gowda - Next.js Dashboard Template",
  description: "This is Next.js Signin Page Bharathraj Gowda Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
