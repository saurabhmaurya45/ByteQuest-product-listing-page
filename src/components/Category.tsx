"use client";
import Image from "next/image";
import React from "react";
import categoryIcon1 from "../assets/Frame 461.png";
import categoryIcon2 from "../assets/Frame 50.png";
import categoryIcon3 from "../assets/Frame 49.png";
import categoryIcon4 from "../assets/Frame 13.png";
import categoryIcon5 from "../assets/Frame 49(1).png";
import categoryIcon6 from "../assets/Frame 49(2).png";
import categoryIcon7 from "../assets/Frame 22.png";
import categoryIcon8 from "../assets/Frame 20.png";
import categoryIcon9 from "../assets/Frame 46.png";
import Link from "next/link";

const categoryData = [
  {
    icon: categoryIcon1,
    title: "All Bags",
    id: 1,
  },
  {
    icon: categoryIcon2,
    title: "Vanity Pouch",
    id: 2,
  },
  {
    icon: categoryIcon3,
    title: "Tote Bag",
    id: 3,
  },
  {
    icon: categoryIcon4,
    title: "Duffle Bags",
    id: 4,
  },
  {
    icon: categoryIcon5,
    title: "Laptop Sleeve",
    id: 5,
  },
  {
    icon: categoryIcon6,
    title: "Massenger Bags",
    id: 6,
  },
  {
    icon: categoryIcon7,
    title: "Slings Bags",
    id: 7,
  },
  {
    icon: categoryIcon8,
    title: "Handbags",
    id: 8,
  },
  {
    icon: categoryIcon9,
    title: "Bucket Bag",
    id: 9,
  },
];

const Category = () => {
  return (
    <section className="category-list h-[130px] mt-6 p-4 flex overflow-x-scroll items-center gap-[3.25rem]  overflow-y-hidden no-scrollbar">
      {categoryData.map((category) => {
        return (
          <>
            <Link href={"#"} key={category.id}>
              <div className="single-category h-32 flex justify-center flex-col gap-4">
                <div className="icon min-w-[5.5rem] h-24">
                  <Image src={category.icon} alt={category.title} />
                </div>
                <p className="content text-[13px] text-nowrap text-center">
                  {category.title}
                </p>
              </div>
            </Link>
          </>
        );
      })}
    </section>
  );
};

export default Category;
