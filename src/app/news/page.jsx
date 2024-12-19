import NewsHero from "@/components/NewsHero";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <>
      <section className="relative h-full bg-[#0c0c0c]">
        <NewsHero />
      </section>
      <section className="w-full bg-[#0c0c0c] z-10 h-full">
        <NewsList />
      </section>
    </>
  );
}