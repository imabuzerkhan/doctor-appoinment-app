"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menutoggle from "./MenuToggle";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import DarkMode from "./Darkmode/Darkmode";
import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact Us", path: "/contact" },
    { id: 4, name: "Blog", path: "/blogpages" },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-md px-0 md:px-20">
      {/* Logo and Desktop Menu */}
      <div className="flex items-center gap-10 pl-4 pr-4 md:px-0">
        <Link href="/" passHref>
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={80}
            className="dark:text-white text-gray-800"
          />
        </Link>

        <ul className="md:flex gap-8 hidden">
          {menu.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="dark:text-white hover:text-blue-950 font-medium text-[#14424C]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Right Section: Dark Mode, Auth Buttons, and Mobile Menu */}
      <div className="flex items-center justify-center gap-2 px-4">
        <DarkMode />

        {/* Show Get Started button only when Signed Out */}
        <SignedOut>
          <SignInButton mode="redirect">
            <Button>Get Started</Button>
          </SignInButton>
        </SignedOut>

        {/* Show User Profile and Sign Out Button when Signed In */}
        <SignedIn>
          <div className="flex items-center gap-4">
            {/* Display User's profile picture and dropdown for editing */}
            <UserButton />
          </div>
        </SignedIn>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-2">
          {!toggle ? (
            <HiMenuAlt3
              onClick={Toggle}
              className="text-black dark:text-white text-[22px]"
            />
          ) : (
            <HiOutlineX
              onClick={Toggle}
              className="text-black dark:text-white text-[22px]"
            />
          )}
          {toggle && <Menutoggle menu={menu} closeMenu={closeMenu} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
