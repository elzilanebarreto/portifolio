import Destaque from "../../components/destaque/Destaque";
import Sobre from "../../components/sobre/Sobre";

function Home() {
  return (
    <>
      <Destaque />

      <section id="sobre">
        <Sobre />
      </section>
    </>
  );
}

export default Home;
