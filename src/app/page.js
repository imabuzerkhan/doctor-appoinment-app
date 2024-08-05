import Hero from "@/_components/Hero";
import CategorySearch from "@/_components/CategorySearch";
import Faq from "@/_components/Faq";

import PopularDoctor from "@/_components/PopularDoctor";
import Testimonial from "@/_components/Testimonial";
import DisBanner from "@/_components/DisBanner";
import Latestblog from "@/_components/Latestblog";

export default function Home() {
  return (
   <>
   <Hero></Hero>
   <CategorySearch/>
  <PopularDoctor/>
  <DisBanner/>
  <Latestblog/>
   <Faq></Faq>
   <Testimonial/>
   </>
  );
}
