export const dynamic = "force-dynamic";

import Head from "next/head";
import BrowserCheck from "./section/browser-check";
import SectionPage from "./section/page";

export default function Page() {
  return (
    <>
      <Head>
        <title>Undangan Resti & Komeng</title>
        <meta name="description" content="Save The Date - Resti & Komeng" />
        {/* Open Graph */}
        <meta property="og:title" content="Undangan Resti & Komeng" />
        <meta
          property="og:image"
          content="https://wedding-Resti-Komeng.vercel.app/assets/images/image-5.webp"
        />{" "}
        <meta
          property="og:url"
          content="https://wedding-resti-komeng.vercel.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Undangan Resti & Komeng" />
        <meta
          name="twitter:image"
          content="https://wedding-resti-komeng.vercel.app/assets/images/image-5.webp"
        />
      </Head>
      <BrowserCheck />
      <SectionPage />{" "}
    </>
  );
}
