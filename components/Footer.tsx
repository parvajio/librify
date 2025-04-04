import { Code, Github, UserRoundSearch } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-gray-100">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-600">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <Link href={"/"}>Librify </Link>
          </li>
          <li>
            <Link href={"/library"}>library</Link>
          </li>
          <li>
            <Link href={"/library"}>Search Books</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="https://parvajio.vercel.app"
              title="Portfolio"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50"
            >
              <UserRoundSearch />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/parvajio"
              title="GitHub"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50"
            >
              <Github />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://leetcode.com/u/parvajio"
              title="LeetCode"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50"
            >
              <Code></Code>
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:mdparvajmosharof17@gmail.com"
              title="Gmail"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50"
            >
              <SiGmail></SiGmail>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
