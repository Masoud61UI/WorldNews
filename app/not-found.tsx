"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function notFound() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      window.location.reload();
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <div className="text-center my-40 space-y-6">
      <h1>مشکلی پیش آمد. لطفاً بعداً دوباره امتحان کنید.</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button
          className="px-7 py-3 rounded-md border border-gray-300 text-green-500 font-semibold hover:bg-black transition duration-180 ease-out hover:ease-in"
          ref={buttonRef}
          onClick={handleClick}
        >
          دوباره امتحان کنید
        </button>
        <Link
          href="/"
          className="rounded-md bg-black px-7 py-3 text-base font-semibold text-green-500 hover:opacity-90 transition duration-180 ease-out hover:ease-in"
        >
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
