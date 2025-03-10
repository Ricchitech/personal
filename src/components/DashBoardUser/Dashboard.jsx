"use client";
import useSignOut from "@/hooks/useSignout";

export default function Dashboard() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Id: <span className="font-bold">asdfvkvdsakugkj</span>
        </div>
        <div>
          Name: <span className="font-bold">sdvfukivbidusfg</span>
        </div>
        <div>
          Email: <span className="font-bold">bhdfkjhgjdsg@gmail.com</span>
        </div>
        <button
          onClick={useSignOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Id: <span className="font-bold">{user.id}</span>
        </div>
        <div>
          Name: <span className="font-bold">{user.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{user.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div> */
}
