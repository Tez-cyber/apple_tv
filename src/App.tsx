import { Container } from "./components/Container";
import Header from "./components/Header";
import { Hero } from "./components/section/Hero";

export default function App() {
  return (
    <>
      <Header />
      {/* ==== Project layout */}
      <main className="">
        <Hero />
        <div>
          <Container>usps</Container>
        </div>
        <div className="">
          <Container>3 col layout</Container>
        </div>
        <div className="">
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}