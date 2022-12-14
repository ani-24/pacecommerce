import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { CgMenuGridO } from "react-icons/cg";
import { FaTimesCircle } from "react-icons/fa";

import { useRouter } from "next/router";

const Navbar = () => {
  const [sidenav, setSidenav] = useState(false);
  const router = useRouter();
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
                priority={true}
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
                  <a className={router.pathname === "/" ? "active" : ""}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="/about">
                  <a className={router.pathname === "/about" ? "active" : ""}>
                    About us
                  </a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="/contact">
                  <a className={router.pathname === "/contact" ? "active" : ""}>
                    Contact us
                  </a>
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
            className="sidenav-item flex items-center bg-green text-white hover:bg-green cursor-pointer p-4"
            onClick={() => {
              setSidenav(false);
            }}
          >
            <FaTimesCircle className="mr-2" /> Close Navbar
          </li>
          <li
            className="sidenav-item"
            onClick={() => {
              setSidenav(false);
            }}
          >
            <Link href="/">
              <a
                className={`sidenav-link ${
                  router.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li
            className="sidenav-item"
            onClick={() => {
              setSidenav(false);
            }}
          >
            <Link href="/about">
              <a
                className={`sidenav-link ${
                  router.pathname === "/about" ? "active" : ""
                }`}
              >
                About us
              </a>
            </Link>
          </li>
          <li
            className="sidenav-item"
            onClick={() => {
              setSidenav(false);
            }}
          >
            <Link href="/contact">
              <a
                className={`sidenav-link ${
                  router.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact us
              </a>
            </Link>
          </li>
          <li
            className="sidenav-item"
            onClick={() => {
              setSidenav(false);
            }}
          >
            <Link href="https://paceinstitute.co.in">
              <a className="sidenav-link">Pace English</a>
            </Link>
          </li>
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
