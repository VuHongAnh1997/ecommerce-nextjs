"use client";

import BreadScrumb from "@/components/breadscrumb/BreadScrumb";
import SubCategoryMobile from "@/components/category/SubCategoryMobile";
import SubCategoryWeb from "@/components/category/SubCategoryWeb";
import Pagination from "@/components/pagination/Pagination";
import Product from "@/components/product/Product";
import SearchCondition from "@/components/search-condition/SearchCondition";
import { useStore } from "@/store/store";
import { useEffect } from "react";

const Products = ({ params }: { params: { slug: number } }) => {
  const { productPaging, fetchProducts, categorySelected } = useStore();

  const handlePageChange = (page: number) => {
    alert(categorySelected?.id);
    fetchProducts({ size: 10, page: page, categoryId: params.slug });
  };

  useEffect(() => {
    // Fetch items with parameters (example)
    fetchProducts({ size: 10, page: 0, categoryId: params.slug });
  }, []);

  return (
    <section className="products-container max-w-[1200px] m-auto pt-5">
      <SubCategoryMobile />
      <div className="block md:flex justify-between">
        <div>
          <BreadScrumb />
          <SubCategoryWeb />
        </div>
        <SearchCondition />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productPaging &&
          productPaging.products &&
          productPaging.products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
      </div>

      <Pagination
        currentPage={productPaging.currentPage}
        totalPages={productPaging.totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Products;
