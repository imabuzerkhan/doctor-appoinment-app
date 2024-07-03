import Image from "next/image";
import Hero from "@/_components/Hero";
import CategorySearch from "@/_components/CategorySearch";
import Faq from "@/_components/Faq";
import Footer from "@/_components/Footer";
import PopularDoctor from "@/_components/PopularDoctor";

export default function Home() {
  return (
   <>
   <Hero></Hero>
   <CategorySearch/>
  <PopularDoctor/>
   <Faq></Faq>
   <Footer></Footer>
   </>
  );
}
