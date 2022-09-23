import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/assets/logo.png" width="120" height="50" alt="logo" />
      </div>
      <nav className="nav-link ">
        <ul className="flex lg:flex md:flex sm:hidden">
          <Link href="/">
            <li className="headline7 menu-link link-hover">Start Search</li>
          </Link>

          <Link href="/about">
            <li className="headline7 menu-link link-hover">About</li>
          </Link>
          <Link href="/contact">
            <li className="headline7 menu-link link-hover">Contact</li>
          </Link>
          <Link href="/auth/signin">
            <li className="headline7 menu-link link-hover">Login</li>
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
