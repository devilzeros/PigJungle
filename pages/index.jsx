import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import { useRouter } from 'next/router';
import SlideHome from 'container/home/home-banner';
import HomeAbout from 'container/home/home-about';
import HomeVideo from 'container/video/video-views';
import VideoGallery from 'container/home/home-videogallery';
export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>HOME | Io Design And Home</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <SlideHome />
        <HomeAbout />
        <HomeVideo />
        <VideoGallery />
      </div>
    </>
  );
}
HomePage.layout = IndexLayout;