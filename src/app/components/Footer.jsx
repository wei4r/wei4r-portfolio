import Link from "next/link";
import React from "react";
import { space_mono } from "../layout";

const Footer = () => {
  return (
    <footer className="flex justify-center footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className={`container p-8 flex justify-between ${space_mono.className}`}>
        <Link
          href={"/"}
          className="text-2xl lg:text-3xl text-yellow-500 font-semibold"
        >
          wei4r
        </Link>
        <p className="text-slate-700 text-center">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
