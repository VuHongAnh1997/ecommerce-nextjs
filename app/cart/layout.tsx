import BreadScrumb from "@/components/breadscrumb/BreadScrumb";

export default function CartLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="cart-container max-w-[1200px] pt-3 m-auto">
      <div className="max-w-screen-xl px-6 m-auto hidden md:block">
        <BreadScrumb />
      </div>

      {children}
    </section>
  );
}
