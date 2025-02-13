"use client";

import { useMemo, useState } from "react";
import Filter from "./Filter";
import ProductContent from "./ProductContent";

const initialProducts = [
  {
    id: 1,
    name: "Men's full sleeve Jacket",
    price: 125,
    size: "Large",
    category: "Outerwear",
    rating: 4,
    reviews: 25,
    stock: 0,
    image: "/images/products3.png",
  },
  {
    id: 2,
    name: "Women's T-shirt",
    price: 45,
    size: "Medium",

    category: "Tops",
    rating: 3,
    reviews: 15,
    stock: 0,
    image: "/images/product5.jpg",
  },
  {
    id: 3,
    name: "Kids' Sneakers",
    price: 80,
    size: "Small",

    category: "Footwear",
    rating: 5,
    reviews: 10,
    stock: 0,
    image: "/images/product6.jpg",
  },
  {
    id: 4,
    name: "Unisex Hoodie",
    price: 95,
    size: "Large",
    color: "Gray",
    category: "Outerwear",
    rating: 4,
    reviews: 20,
    stock: 0,
    image: "/images/product11.jpg",
  },
  {
    id: 5,
    name: "Women's Jeans",
    price: 75,
    size: "Medium",
    category: "Bottoms",
    rating: 4,
    reviews: 30,
    stock: 0,
    image: "/images/product7.jpg",
  },
  {
    id: 6,
    name: "Women's Jeans",
    price: 75,
    size: "Medium",
    category: "Bottoms",
    rating: 4,
    reviews: 30,
    stock: 0,
    image: "/images/product8.jpg",
  },
  {
    id: 7,
    name: "Women's Jeans",
    price: 75,
    size: "Medium",
    category: "Bottoms",
    rating: 4,
    reviews: 30,
    stock: 0,
    image: "/images/product6.jpg",
  },
  {
    id: 8,
    name: "Women's Jeans",
    price: 75,
    size: "Medium",
    category: "Bottoms",
    rating: 4,
    reviews: 30,
    stock: 0,
    image: "/images/product9.jpg",
  },
  {
    id: 9,
    name: "Women's Jeans",
    price: 75,
    size: "Medium",
    category: "Bottoms",
    rating: 4,
    reviews: 30,
    stock: 10,
    image: "/images/product10.jpg",
  },
];

export default function ProductFilters() {
  const [products] = useState(initialProducts);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(200);

  // Collapse state
  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const [isOpenSize, setIsOpenSize] = useState(true);
  const [isOpenColor, setIsOpenColor] = useState(true);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (!selectedSize || product.size === selectedSize) &&
        (!selectedColor || product.color === selectedColor) &&
        (!selectedCategory || product.category === selectedCategory) &&
        product.price <= priceRange
    );
  }, [products, selectedSize, selectedColor, selectedCategory, priceRange]);

  const resetFilters = () => {
    setSelectedSize("");
    setSelectedColor("");
    setSelectedCategory("");
    setPriceRange(200);
  };

  return (
    <div className="container mx-auto px-4 flex mt-20 ">
      {/* Left Sidebar */}
      <Filter
        resetFilters={resetFilters}
        selectedCategory={selectedCategory}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        isOpenCategory={isOpenCategory}
        isOpenSize={isOpenSize}
        isOpenColor={isOpenColor}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        products={products}
        filteredProducts={filteredProducts}
        setSelectedCategory={setSelectedCategory}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
        setIsOpenCategory={setIsOpenCategory}
        setIsOpenSize={setIsOpenSize}
        setIsOpenColor={setIsOpenColor}
      />

      {/* Right Content Area */}

      <ProductContent filteredProducts={filteredProducts} />
    </div>
  );
}
