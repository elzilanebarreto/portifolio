import Destaque from "../../components/destaque/Destaque";
import Habilidades from "../../components/habilidades/Habilidades";
import Sobre from "../../components/sobre/Sobre";

function Home() {
  return (
    <>
      <Destaque />

      <section id="sobre" className='smooth'>
        <Sobre />
      </section>

      <section id="habilidades" className='smooth'>
        <Habilidades />
      </section>
    </>
  );
}

export default Home;
