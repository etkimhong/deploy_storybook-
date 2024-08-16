"use client";

import React, { useState, useEffect } from "react";
import Pagination from "../molecules/Pagination";
import ProductCart from "../organisms/Productcart";
import Loading from "./Loading";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const PaginatedList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.products.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {displayedProducts.map((product) => (
            <li key={product.id}>
              <ProductCart product={product} />
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default PaginatedList;
