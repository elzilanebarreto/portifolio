import FloatingLines from "./components/background/floatinglines/FloatingLines";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projetos from "./pages/projetos/Projetos";
import VeloFit from "./pages/projetos/velofit/VeloFit";
import VeloGo from "./pages/projetos/velogo/VeloGo";
import Comunidade from "./pages/projetos/comunidade/Comunidade";

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
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/velofit" element={<VeloFit />} />
            <Route path="/projetos/velogo" element={<VeloGo />} />
            <Route path="/projetos/comunidade" element={<Comunidade />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
