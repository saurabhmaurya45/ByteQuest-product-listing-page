import React from "react";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import cartIcon from "../assets/Group 450.png";


const ProductCard = ({ product }) => {
  return (
    <>
      <div
        key={product.id}
        className="card w-auto h-[484px]  shadow-md rounded-lg overflow-hidden"
      >
        <div className="image w-[280px] h-[374px] overflow-hidden relative">
          <div className=" absolute top-4 right-4 text-black text-4xl ">
            {/* <Image src={bookmarkIcon} alt="bookmark" className="" /> */}
            <IoBookmarkOutline/>
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover "
            style={{borderRadius:"10px 10px 0px 0px "}}
          />
        </div>
        <div className="info p-2 py-5 bg-[#141414] text-white relative">
          <h2 className="text-lg  font-medium  text-nowrap text-clip mb-2 ">
            {product.title}
          </h2>
          <div className="price flex gap-1 items-center py-4">
            <span>
              <FaIndianRupeeSign />
            </span>
            <p className="text-[18.8px] font-bold  ">
              {Math.round(product.price)}
            </p>
            <sub className="text-xs line-through ">
              {Math.round(product.price)}
            </sub>
            <sub className="text-xs  text-[#2FC14F]">(50% Off)</sub>
          </div>
          <div className=" absolute bottom-6 right-1">
            <Image src={cartIcon} alt="add to cart" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
