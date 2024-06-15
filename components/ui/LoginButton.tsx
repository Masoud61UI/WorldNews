"use client";

import { useFormStatus } from "react-dom";

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none transition duration-180 ease-out hover:ease-in"
    >
      ورود
    </button>
  );
}
