import { Container } from "./components/Container";
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
        <div className="bg-bgDark">
          <Hero />
          <Usps />
        </div>
        {/* <div className="">
          <Container>3 col layout</Container>
        </div> */}
        <VideoCarousel />
      </main>
    </>
  );
}