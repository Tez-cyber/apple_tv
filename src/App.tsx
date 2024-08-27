import Header from "./components/Header";

export default function App() {
  return (
      <>
        <Header />
        {/* ==== Project layout */}
        <main className="">
            <div className="h-[200vh]">Hero component</div>
            <div>usps</div>
            <div className="">3 col layout</div>
            <div className="">Carousel with posters</div>
        </main>
      </>
  );
}