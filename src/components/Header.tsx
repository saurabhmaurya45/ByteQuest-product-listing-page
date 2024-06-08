"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "../assets/Frame 51.png";
import userIcon from "../assets/Frame 52.png";
import wishlistIcon from "../assets/Frame 53.png";
import cartIcon from "../assets/Frame 54.png";

const navbarData = [
  {
    id:1,
    url: "#",
    description: "Bags"
  },
  {
    id:2,
    url: "#",
    description: "Travel"
  },
  {
    id:3,
    url: "#",
    description: "Accessories"
  },
  {
    id:4,
    url: "#",
    description: "Gifting"
  },
  {
    id:5,
    url: "#",
    description: "Jewelery"
  },
];

const Header = () => {
  return (
    <header className="w-[100%-24rem] h-[105px] flex items-center flex-col bg-[#0C0C0C] fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-24 z-10">
      <div className="w-full flex justify-between items-center p-2 py-4">
        <h1 className="text-[#E5DFD9] text-xl font-[100] tracking-[10px] font-[Comme]">
          TANNA TRIM
        </h1>
        <div className="socials flex items-center gap-4">
          <div className="search">
            <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
          </div>
          <div className="user">
            <Image src={userIcon} alt="User Icon" width={24} height={24} />
          </div>
          <div className="wishlist">
            <Image
              src={wishlistIcon}
              alt="Wishlist Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="cart">
            <Image src={cartIcon} alt="Cart Icon" width={24} height={24} />
          </div>
        </div>
      </div>
      <nav className="w-full flex justify-center items-center p-2 text-[#E5DFD9]">
        <ul className="w-full justify-center flex gap-5 text-sm">
          {
            navbarData.map((nav)=><Link href={nav.url} key={nav.id}><li>{nav.description}</li></Link>)
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
