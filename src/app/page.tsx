import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Download a Spotify&nbsp;<span className="text-[#1db954]">Canvas</span>
          </h1>
        </div>

        <SearchBox />
      </main>

      <Footer />
    </div>
  );
}
