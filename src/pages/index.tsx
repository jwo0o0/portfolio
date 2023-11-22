import { Info } from "@/components/Info/Info";
import { Projects } from "@/components/Projects/Projects";
import { Experiences } from "@/components/Experiences/Experiences";
import { Highlights } from "@/components/Highlights/Highlights";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export default function Home() {
  return (
    <>
      <Info />
      <Projects />
      <Experiences />
      <Highlights />
      <ScrollToTop />
    </>
  );
}
