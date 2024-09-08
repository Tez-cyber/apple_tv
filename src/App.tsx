import Header from "./components/Header";
import { Hero } from "./components/section/Hero";
import { Usps } from "./components/section/Usps";
import { VideoCarousel } from "./components/section/Video-carousel";

export default function App() {
  return (
    <>
      <Header />
      {/* ==== Project layout */}
      <main className="">
        <div className="bg-bgDark relative z-10">
          <Hero />
          <Usps />
        </div>
        {/* <div className="">
          <Container>3 col layout</Container>
        </div> */}
        <VideoCarousel />
        {/* <div className="h-[300vh]"></div> */}
      </main>
    </>
  );
}
