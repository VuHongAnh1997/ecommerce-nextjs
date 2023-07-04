"use client";
import Image from "next/image";
import logo from "public/images/logo.png";
import React, { useState } from "react";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white h-20 flex justify-center">
      <div className="h-full max-w-screen-xl flex justify-between flex-1">
        <nav className={`${styles["nav-left"]} flex items-center`}>
          <Image
            src={logo}
            alt="Logo image"
            width={107}
            height={57}
            className="mr-5"
          />
          <div className="mr-5">new arrivals</div>
          <div className="mr-5">special offer</div>
          <div className="mr-5">sản phẩm</div>
          <div className="mr-5">bộ sưu tập</div>
          <div className="mr-5">feedback</div>
        </nav>
        <nav className="nav-right"></nav>
      </div>
    </header>
  );
};

export default Header;
