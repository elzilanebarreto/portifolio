import FloatingLines from "./components/background/floatinglines/FloatingLines";
import Navbar from "./components/navbar/Navbar";

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

      <Navbar />
    </>
  );
};

export default App;
