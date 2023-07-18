"use client";

import Banner from "@/components/banner/Banner";
import Category from "@/components/category/Category";
import { getAllCategories } from "@/services/categoriesService";
import { useStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { updateCategories } = useStore();

  useEffect(() => {
    getAllCategories().then((res) => updateCategories(res));
  }, []);

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Banner />
      <Category />
    </div>
  );
}
