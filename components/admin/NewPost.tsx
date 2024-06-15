"use client";

import { useRef } from "react";
import SubmitButton from "../ui/SubmitButton";
import { CreatePostAction } from "@/lib/actions";

export default function NewPost() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formRef.current?.reset();

        await CreatePostAction(formData);
      }}
    >
      <div className="space-y-6 font-medium">
        <div>
          <label className="text-sm mb-2 block font-medium text-gray-700">
            عنوان
          </label>
          <input
            name="title"
            type="text"
            className="bg-white border font-medium border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-400"
            placeholder="پست جدید"
          />
        </div>
        <div>
          <label className="text-sm mb-2 block font-medium text-gray-700">
            توضیحات
          </label>
          <textarea
            name="body"
            rows={5}
            className="bg-white border font-medium border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-400"
            placeholder="متن توضیحات پست"
          />
        </div>
        <div>
          <label className="text-sm mb-2 block font-medium text-gray-700">
            تصویر
          </label>
          <input
            name="image"
            type="text"
            className="bg-white border font-medium border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-400 text-left"
            placeholder="URL"
          />
        </div>
      </div>
      <div className="!mt-10">
        <SubmitButton text={"اضافه کردن"} />
      </div>
    </form>
  );
}
