"use client";

import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "public/images/logo.png";
import React, { useState } from "react";
import Cart from "../cart/Cart";
import MobileHeader from "../mobile-header/MobileHeader";
import Navbar from "../narbar/Navbar";
import SearchInput from "../search-input/SearchInput";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const router = useRouter();

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Perform search logic or update state
  };

  return (
    <>
      <header className="bg-black text-white h-20 md:px-10 px-2 relative">
        <div className="h-full flex max-w-screen-2xl">
          <div
            className="p-2.5 hidden md:block cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src={logo} alt="Logo image" style={{ maxWidth: "107px" }} />
          </div>

          <Navbar />

          <div className="w-2/6 md:hidden flex items-center">
            <Bars3Icon
              className="h-6 w-6 text-gray-500"
              onClick={handleOpenMenu}
            />
          </div>
          <div className="w-2/6 md:hidden flex items-center grow">
            <Image
              src={logo}
              alt="Logo image"
              width={107}
              height={57}
              className="mr-5"
            />
          </div>

          <nav className="nav-right flex items-center grow-0">
            <div className="hidden md:block">
              <SearchInput onSearch={handleSearch} />
            </div>

            <Cart />
            <UserIcon
              className="h-6 w-6 text-gray-500 ml-6 cursor-pointer"
              onClick={() => router.push("/auth/login")}
            />
          </nav>
        </div>
      </header>
      <MobileHeader isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
