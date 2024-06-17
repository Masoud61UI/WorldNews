"use client";

import { useState, useRef, useEffect } from "react";

export default function Refresh() {
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
    <button
      className="px-7 py-3 rounded-md border border-gray-300 text-green-500 font-semibold hover:bg-black transition duration-180 ease-out hover:ease-in"
      ref={buttonRef}
      onClick={handleClick}
    >
      دوباره امتحان کنید
    </button>
  );
}
