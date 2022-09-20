import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 px-20 bg-indigo-500 ...">
      <div className="logo">
        <Image src="/assets/logo.png" width="120" height="50" alt="logo" />
      </div>
      <nav>
        <ul className="flex justify-evenly">
          <Link href="/">
            <li className="menu-link">Start Search</li>
          </Link>
          <Link href="/about">
            <li className="menu-link">About</li>
          </Link>
          <Link href="/registration">
            <li className="menu-link">Contact</li>
          </Link>
          <Link href="/signin">
            <li className="menu-link">Login</li>
          </Link>
          {/* <Link href="/newpassword">
            <li className="menu-link">New password</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
