import BreadScrumb from "@/components/breadscrumb/BreadScrumb";

export default function NewArrivalsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-3 max-w-[1440px] m-auto">
      <div className="max-w-screen-xl px-6 m-auto">
        <BreadScrumb />
      </div>

      {children}
    </section>
  );
}
