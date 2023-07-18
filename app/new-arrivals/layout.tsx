import Banner from "@/components/banner/Banner";

export default function NewArrivalsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Banner />

      {children}
    </section>
  );
}
