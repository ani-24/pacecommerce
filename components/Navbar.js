import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { CgMenuGridO } from "react-icons/cg";
import { FaTimesCircle } from "react-icons/fa";

const Navbar = () => {
  const [sidenav, setSidenav] = useState(false);
  return (
    <>
      <div className="sticky top-0 left-0 bg-white shadow-lg z-40">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <Image
                src="/pace_logo.webp"
                height={56.82}
                width={150}
                alt="Logo"
                className="cursor-pointer"
              />
            </Link>
            <div
              className="flex items-center cursor-pointer py-2 px-3 rounded-xl transition-all duration-200 hover:bg-gray-200 lg:hidden"
              onClick={() => {
                setSidenav(true);
              }}
            >
              <CgMenuGridO height={20} width={20} className="mr-1" />{" "}
              <span>Menu</span>
            </div>
            <ul className="hidden lg:flex">
              <li className="list-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="/about">
                  <a>About us</a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="/">
                  <a>Contact us</a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="https://paceinstitute.co.in">
                  <a>Pace English</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-[50%] h-screen fixed top-0 bg-white z-50 transition-all duration-700 ${
          sidenav ? "right-0" : "-right-full"
        }`}
      >
        <ul>
          <li
            className="sidenav-item flex items-center bg-green text-white hover:bg-green cursor-pointer"
            onClick={() => {
              setSidenav(false);
            }}
          >
            <FaTimesCircle className="mr-2" /> Close Navbar
          </li>
          <Link href="/">
            <a>
              <li
                className="sidenav-item"
                onClick={() => {
                  setSidenav(false);
                }}
              >
                Home
              </li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li
                className="sidenav-item"
                onClick={() => {
                  setSidenav(false);
                }}
              >
                About us
              </li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li
                className="sidenav-item"
                onClick={() => {
                  setSidenav(false);
                }}
              >
                Contact us
              </li>
            </a>
          </Link>
          <Link href="https://paceinstitute.co.in">
            <a>
              <li
                className="sidenav-item"
                onClick={() => {
                  setSidenav(false);
                }}
              >
                Pace English
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        className={`overlay ${
          sidenav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setSidenav(false);
        }}
      ></div>
    </>
  );
};

export default Navbar;
