import { BrowserRouter, Route, Routes } from "react-router-dom";
import FloatingLines from "./components/background/floatinglines/FloatingLines";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contatos from "./pages/contatos/Contatos";
import Home from "./pages/home/Home";
import Comunidade from "./pages/projetos/comunidade/Comunidade";
import Projetos from "./pages/projetos/Projetos";
import VeloFit from "./pages/projetos/velofit/VeloFit";
import VeloGo from "./pages/projetos/velogo/VeloGo";

const App = () => {
  return (
    <>
      {/* <Navbar/> */}

      {/* <div className="min-h-screen bg-(--terciara)"></div> */}

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={[10, 15, 20]}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <BrowserRouter>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/velofit" element={<VeloFit />} />
            <Route path="/projetos/velogo" element={<VeloGo />} />
            <Route path="/projetos/comunidade" element={<Comunidade />} />
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
