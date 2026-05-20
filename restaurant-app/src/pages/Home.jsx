import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}