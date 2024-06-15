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
        className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800"
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