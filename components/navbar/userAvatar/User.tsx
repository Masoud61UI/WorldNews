"use client";

import { UserProps } from "@/lib/definitions";
import { signOut } from "next-auth/react";

export default function User({ name }: UserProps) {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <div className="flex size-10 items-center justify-center rounded-full border">
        <span className="text-2xl font-bold">{name[0]}</span>
      </div>
      <button
        className="px-4 py-2 font-semibold bg-black text-green-500 rounded-md hover:opacity-90 transition duration-180 ease-out hover:ease-in"
        onClick={(e) => {
          e.preventDefault();
          signOut({
            callbackUrl: "/",
          });
        }}
      >
        خروج
      </button>
    </div>
  );
}
