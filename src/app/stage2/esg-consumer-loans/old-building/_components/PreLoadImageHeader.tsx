
import Head from "next/head";

export default function PreLoadImageHeader() {

  return <Head>
    <link
      rel="preload"
      href="/assets/stage2/oldBuilding-feature1-inner-image.png"
      as="image"
    />
    <link
      rel="preload"
      href="/assets/stage2/oldBuilding-feature2-inner-image.png"
      as="image"
    />
    <link
      rel="preload"
      href="/assets/stage2/oldBuilding-feature3-inner-image.png"
      as="image"
    />
  </Head>
}