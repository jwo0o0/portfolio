import Head from "next/head";

import { Info } from "@/components/Info/Info";
import { Projects } from "@/components/Projects/Projects";
import { Experiences } from "@/components/Experiences/Experiences";
import { Highlights } from "@/components/Highlights/Highlights";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>개발자 김정우 ^O^</title>
        <meta
          name="description"
          content="개발자 김정우를 소개합니다 ٩(๑❛ᴗ❛๑)۶"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Info />
      <Projects />
      <Experiences />
      <Highlights />
      <ScrollToTop />
    </>
  );
}
