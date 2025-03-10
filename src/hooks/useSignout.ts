import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const useSignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return handleSignOut;
};

export default useSignOut;
