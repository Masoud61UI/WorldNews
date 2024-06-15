"use client";

import Link from "next/link";
import SubmitButton from "../ui/SubmitButton";
import { CreateUserAction } from "@/lib/actions";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  return (
    <div className="flex flex-col justify-center text-black sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold">
            عضویت در{" "}
            <Link href={"/"} className="text-green-600">
              خبرنامه
            </Link>
          </h2>
        </div>
        <form
          action={async (formData) => {
            const email = formData.get("email");
            const password = formData.get("password");
            const res = await CreateUserAction(formData);

            if (res?.success) {
              await signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
              });
            }
          }}
        >
          <div className="space-y-6 font-medium">
            <div>
              <label className="text-sm mb-2 block font-medium text-gray-700">
                نام و نام خانوادگی
              </label>
              <input
                name="name"
                type="text"
                className="bg-white border font-medium border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-400"
                placeholder="مسعود بهروزی"
              />
            </div>
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
            <SubmitButton text={"ثبت نام"} />
          </div>
          <p className="text-sm mt-6 text-center text-gray-600">
            از قبل حساب کاربری دارید؟{" "}
            <Link
              href="/login"
              className="text-green-500 font-semibold hover:underline ml-1"
            >
              از اینجا وارد شوید
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
