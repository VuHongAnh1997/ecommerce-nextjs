import BreadScrumbCategories from "@/components/breadscrumb-categories/BreadScrumbCategories";

const Products = ({ params }: { params: { slug: number } }) => {
  return (
    <section className="products-container">
      <BreadScrumbCategories categorySelectedId={params.slug} />
    </section>
  );
};

export default Products;
