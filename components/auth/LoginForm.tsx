"use client";

import Link from "next/link";
import { CheckUserInputs } from "@/lib/actions";
import { signIn } from "next-auth/react";
import { useState } from "react";
import SubmitButton from "../ui/SubmitButton";

export default function LoginForm() {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="flex flex-col justify-center text-black sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold">
            ورود به{" "}
            <Link href={"/"} className="text-green-600">
              خبرنامه
            </Link>
          </h2>
        </div>
        <form
          action={async (formdata) => {
            const email = formdata.get("email");
            const password = formdata.get("password");
            const res = await CheckUserInputs(formdata);

            if (!res?.success) {
              setLoginStatus(true);
            } else {
              signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
              });
            }
          }}
        >
          <div className="space-y-6 font-medium">
            {loginStatus && (
              <p className="text-red-500 text-sm font-medium mt-2">
                ایمیل یا رمز عبور وارد شده اشتباه است.
              </p>
            )}
            <div>
              <label className="text-sm mb-2 block font-medium text-gray-700">
                ایمیل
              </label>
              <input
                name="email"
                type="text"
                className="bg-white border font-medium border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-400"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block font-medium text-gray-700">
                رمز عبور
              </label>
              <input
                name="password"
                type="password"
                className="bg-white border font-medium border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-400"
                placeholder="رمز خود را وارد کنید"
              />
            </div>
          </div>
          <div className="!mt-10">
            <SubmitButton text="ورود" />
          </div>
          <p className="text-sm mt-6 text-center text-gray-600">
            حساب کاربری ندارید؟{" "}
            <Link
              href="/register"
              className="text-green-500 font-semibold hover:underline ml-1"
            >
              ثبت نام کنید
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
