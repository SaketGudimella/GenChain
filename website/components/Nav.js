"use client";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className={`w-full px-[200px] py-[15px] bg-[white] [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)] flex items-center justify-between ${isNavOpen ? "openNav" : ""}`}>
      <i className="uil uil-bars navOpenBtn" onClick={toggleNav}></i>
      <h1 className="text-[25px] font-medium">GenChain</h1>
      <ul className="flex items-center gap-x-[20px] [list-style:none]">
        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
        <li>
          <Link href="/" id="inside">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" id="inside">
            Services
          </Link>
        </li>
        <li>
          <Link href="/" id="inside">
            Chat-bot
          </Link>
        </li>
        <li>
          <Link href="/login" id="inside">
            <button className="px-[20px] py-[10px] bg-[#007bff] text-[white] border-[none] rounded-[25px] cursor-pointer [transition:background-color_0.3s_ease]">Log-In/Out</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
