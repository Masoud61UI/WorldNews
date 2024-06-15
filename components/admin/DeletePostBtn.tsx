"use client";

import { DeletePostAction } from "@/lib/actions";
import { DeleteBtnProps } from "@/lib/definitions";
import { GoTrash } from "react-icons/go";

export default function DeletePostBtn({ id }: DeleteBtnProps) {
  return (
    <button
      className="rounded-md bg-gray-100 p-4 text-red-500 shadow-md hover:bg-red-500 hover:text-white transition duration-180 ease-out hover:ease-in"
      onClick={(e) => {
        e.preventDefault();
        DeletePostAction(id);
      }}
    >
      <GoTrash className="size-5" />
    </button>
  );
}
