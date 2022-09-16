import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5 bg-indigo-500 ...">
      <nav>
        <ul className="flex justify-evenly">
          <Link href="/">
            <li className="menu-link">Home</li>
          </Link>
          <Link href="/about">
            <li className="menu-link">About</li>
          </Link>
          <Link href="/registration">
            <li className="menu-link">Registration</li>
          </Link>
          <Link href="/signin">
            <li className="menu-link">SignIn</li>
          </Link>
          <Link href="/newpassword">
            <li className="menu-link">New password</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
