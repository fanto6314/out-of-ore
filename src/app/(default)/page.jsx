import Hero from "../../components/Hero"
import AboutOutOfOre from "../../components/AboutOutOfOre";
import News from "../../components/News"
import Faqs from "../../components/Faqs"
import Screenshot from "../../components/Screenshot";

export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <Hero />
      </section>
      <section className="w-full bg-black bg-opacity-50 z-10">
        <AboutOutOfOre />
        <Screenshot />
        <News />
        <Faqs />
      </section>
    </>
  );
}
