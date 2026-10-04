"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <div>
      {session?.user ? (
        <div className="">
          <div className="flex items-center gap-4">
            <div className=" avatar flex flex-col gap-2 items-center">
              <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                {user?.image && (
                  <Image
                    src={user?.image}
                    alt={user?.name ?? "User avatar"}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
              </div>
              <h1 className="text-sm font-bold text-red-700">{user?.name}</h1>
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-secondary bg-red-700 font-semibold text-white"
            >
              লগ আউট
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link href="/sign-in">
            <button className="btn border-none bg-white">সাইন ইন</button>
          </Link>
          <Link href="/sign-up">
            <button className="btn btn-secondary bg-red-700 font-semibold text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
