"use client";

import { SubmitBtnProps } from "@/lib/definitions";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: SubmitBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-4 text-sm font-semibold rounded bg-black text-green-500 hover:opacity-90 focus:outline-none transition duration-180 ease-out hover:ease-in"
    >
      {text}
    </button>
  );
}
