"use client";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
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
      toast.success("Sign Up successfully");
      redirect("/");
    }
    if (error) {
      toast.error(error?.message as string);
    }
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
          />

          <label className="label">Image</label>
          <input
            type="text"
            name="image"
            className="input outline-none w-md focus::border focus:border-red-700"
          />

          <label className="label">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input outline-none w-md focus::border focus:border-red-700"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            className="input outline-none w-md focus::border focus:border-red-700"
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
    </section>
  );
};

export default SignUpPage;
