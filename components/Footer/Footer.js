import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer class="footer text-gray-600 body-font  bottom-0 w-full">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              className="ml-3 text-xl"
              src="/assets/logo.png"
              width="120"
              height="50"
              alt="logo"
            />
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Be the first to access new companies contact details with New Start
            Data. Be the first to access new companies contact details with New
            Start Data.
          </p>
        </div>
        <div class="w-full flex justify-between md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Start Seacrh</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Start Seacrh</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Start Seacrh</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="py-10 text-center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
