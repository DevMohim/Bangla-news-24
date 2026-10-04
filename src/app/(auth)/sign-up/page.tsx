"use client";
import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const form = e.target

    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      ...userData,
      callbackURL: "/",
    });

    if (data) {
      form.reset()
      toast.success("Sign Up successfully");
      redirect("/");
    }
    if (error) {
      toast.error(error?.message as string);
    }
  };

  const handleGoogleSignIn = async() => {
        const data = await signIn.social({
          provider: "google",
        });  
     }
     const handleGithubSignIn = async () => {
       const data = await signIn.social({
         provider: "github",
       });
     };
  return (
    <section>
      <h1 className="text-2xl text-red-700 font-semibold text-center">
        সাইন আপ
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset rounded-box w-md p-4">
          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input outline-none w-md focus::border focus:border-red-700"
            autoComplete="name"
          />

          <label className="label">Image</label>
          <input
            type="text"
            name="image"
            className="input outline-none w-md focus::border focus:border-red-700"
            autoComplete="off"
          />

          <label className="label">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input outline-none w-md focus::border focus:border-red-700"
            autoComplete="email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            className="input outline-none w-md focus::border focus:border-red-700"
            autoComplete="new-password"
            name="password"
          />

          <button type="submit" className="btn bg-red-700 text-white mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <p className="text-center">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/sign-in" className="text-red-700 font-semibold">
          সাইন ইন করুন
        </Link>
      </p>

      <div className="flex justify-center items-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] "
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign Up with Google
        </button>
      </div>
      <div className="flex justify-center items-center ">
        <button
          onClick={handleGithubSignIn}
          className="btn bg-black text-white border-black"
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Sign Up with GitHub
        </button>
      </div>
    </section>
  );
};

export default SignUpPage;
