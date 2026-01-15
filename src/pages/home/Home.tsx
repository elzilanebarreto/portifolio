import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Destaque from "../../components/destaque/Destaque";
import Habilidades from "../../components/habilidades/Habilidades";
import Sobre from "../../components/sobre/Sobre";
import Curriculo from "../../components/curriculo/Curriculo";
import Contatos from "../../components/contatos/Contatos";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>

      <Curriculo />

      <Destaque />

      <section id="sobre">
        <Sobre />
      </section>

      <section id="habilidades">
        <Habilidades />
      </section>

      <section id="contato">
        <Contatos />
      </section>
    </>
  );
}

export default Home;
