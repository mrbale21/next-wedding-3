export const dynamic = "force-dynamic";

import Head from "next/head";
import BrowserCheck from "./section/browser-check";
import SectionPage from "./section/page";

export default function Page() {
  return (
    <>
      <Head>
        <title>Undangan Komeng & Resti</title>
        <meta name="description" content="Save The Date - Komeng & Resti" />
        {/* Open Graph */}
        <meta property="og:title" content="Undangan Komeng & Resti" />
        <meta
          property="og:image"
          content="https://wedding-Komeng-Resti.vercel.app/assets/images/image-5.webp"
        />{" "}
        <meta
          property="og:url"
          content="https://wedding-komeng-resti.vercel.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Undangan Komeng & Resti" />
        <meta
          name="twitter:image"
          content="https://wedding-komeng-resti.vercel.app/assets/images/image-5.webp"
        />
      </Head>
      <BrowserCheck />
      <SectionPage />{" "}
    </>
  );
}
