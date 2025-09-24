import Hero from "@/components/Hero";
import Depoimentos from "@/components/Depoimentos";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import CursosSections from "@/components/CursosSection";

export default function Home() {
  return (
    <div>
      <div id="inicio">
        <Hero />
      </div>
      <div id="sobre" className="bg-whte">
        <CursosSections />
      </div>
      <div id="depoimentos">
        <Depoimentos />
      </div>
      <div id="sobre">
        <Sobre />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
