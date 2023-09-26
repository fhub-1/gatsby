// imports
// import Image from "next/image";
import { Button } from "./ui/button";
// import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { IoLogoWebComponent } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "gatsby";
import React from "react";

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link to="/">
        {/* <img
          alt="logo"
          className="cursor-pointer w-40"
          src="/images/logo.svg"
          height={100}
          width={170}
        /> */}
        <IoLogoWebComponent className="h" height={100} width={170} />
      </Link>
      <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link to="/">Home</Link>
        </Button>
        <Link to="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link to="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <Link to="https://github.com/benlhachemi/modifio.git">
        <Button
          variant="default"
          className="rounded-full w-fit bg-orange-600 gap-2 items-center hidden md:flex"
          size="lg"
        >
          <span>Github Repo</span>
          <span className="text-xl">
            <BsGithub />
          </span>
        </Button>
      </Link>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link to="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    About
                  </Button>
                </Link>
                <Link to="/privacy-policy">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Privacy Policy
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
