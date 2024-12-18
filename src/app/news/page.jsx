import NewsHero from "@/components/NewsHero";

export default function NewsPage() {

  return (
        <>
          <section className="relative h-screen bg-[#0c0c0c]">
            <NewsHero />
          </section>
          <section className="w-full bg-[#0c0c0c] z-10">
            bla
          </section>
        </>
  );
}
