import React from "react";
import axios from "axios";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import ProductCard from "./ProductCard";
import { Product } from "./interface/productInterface";


export async function getProductData() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch the data");
  }
}

const ProductListing = async () => {
  const productData = await getProductData();

  return (
    <section className="mt-4 p-4">
      <div className="flex justify-between text-normal">
        <div className="flex items-center gap-1">
          Bags{" "}
          <span className=" ">
            <GoDotFill />
          </span>{" "}
          Backpacks
        </div>
        <div className="flex items-center gap-2">
          {productData?.length} products{" "}
          <span className="text-2xl ">
            <FiShare />
          </span>
        </div>
      </div>
      {/* product listing */}
      <div className="product-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 ">
        {productData?.map((product: Product) => (
          <Link key={product.id} href={"#"}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
