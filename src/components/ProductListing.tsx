import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import ProductCard from "./ProductCard";
import Link from "next/link";

// Define the shape of the product data
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}


export async function getProductData() {
    const res = await fetch('https://fakestoreapi.com/products')
    if(!res.ok) throw new Error("Failed to fetched the data ")
    return res.json()
}

const ProductListing = async () => {
    const productData =  await getProductData()

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
        {productData?.map((product:Product) => (
          <Link key={product.id} href={"#"}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
