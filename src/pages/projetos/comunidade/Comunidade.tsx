import { FaArrowLeft, FaJava } from "react-icons/fa";
import {
  SiApachemaven,
  SiBootstrap,
  SiGithub,
  SiMysql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Botao from "../../../components/botao/Botao";
import SpotlightCard from "../../../components/cards/SpotlightCard";

function Comunidade() {
  return (
    <div className="m-10 p-8">
      <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="">
        <div className="flex">
          <Link to="/projetos" className="flex items-center gap-2">
            <FaArrowLeft className="text-(--quinternaria) hover:text-(--quaternaria)" />
            <span className="text-(--quinternaria) hover:text-(--quaternaria) font-black">
              Voltar para os Projetos
            </span>
          </Link>
        </div>

        <div className="flex flex-col mt-4 justify-center gap-3">
          <h2 className="text-center text-(--quaternaria) font-bold text-3xl">
            Renascer Mulher - Comunidade para Mulheres
          </h2>

          <p className="text-(--terciara) text-justify">
            Aplicação web de impacto social desenvolvida em grupo utilizando
            React e Bootstrap, projetada para criar um ambiente seguro de
            acolhimento e suporte para mulheres. O projeto foca na construção de
            uma comunidade digital interativa, permitindo o compartilhamento de
            experiências sobre maternidade, carreira e bem-estar através de um
            sistema de postagens e fóruns. A equipe estruturou um banco de dados
            robusto em MySQL para gerenciar interações e categorias, entregando
            uma plataforma responsiva voltada para o fortalecimento de redes de
            apoio feminino.
          </p>
        </div>

        <div className="flex flex-col mt-4 gap-4">
          <h3 className="text-(--quinternaria) font-bold text-2xl">
            Tecnologias Utilizadas
          </h3>

          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <SpotlightCard spotlightColor="rgba(0, 216, 255, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiReact className="text-2xl " /> React
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(111, 44, 236, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiBootstrap className="text-2xl" /> Bootstrap
              </div>
            </SpotlightCard>

            {/* --- BACKEND (JAVA/SPRING) --- */}
            <SpotlightCard spotlightColor="rgba(231, 33, 34, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <FaJava className="text-2xl" /> Java
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(109, 179, 63, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiSpringboot className="text-2xl" /> Spring Boot
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(51, 103, 145, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiMysql className="text-2xl" /> MySQL
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(192, 28, 40, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiApachemaven className="text-2xl" /> Maven
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <span className="font-bold text-xs border px-1 rounded ">
                  JPA
                </span>
                Spring Data JPA
              </div>
            </SpotlightCard>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/aguiarisabela/maternidade-recode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Botao texto="Repositório GitHub" Icon={SiGithub} />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default Comunidade;
