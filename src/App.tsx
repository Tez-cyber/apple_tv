import { Container } from "./components/Container";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      {/* ==== Project layout */}
      <main className="">
        <div className="h-[200vh]">
          <Container>Hero component</Container>
        </div>
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