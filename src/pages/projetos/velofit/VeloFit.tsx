import { FaArrowLeft } from "react-icons/fa";
import {
  SiEslint,
  SiGithub,
  SiJsonwebtokens,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Botao from "../../../components/botao/Botao";
import SpotlightCard from "../../../components/cards/SpotlightCard";

function VeloFit() {
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
            VeloFit - Gerenciamento de Academias
          </h2>

          <p className="text-(--terciara)">
            Aplicação web desenvolvida em grupo utilizando React e TypeScript
            para a gestão completa de uma academia. O projeto foca em uma
            interface intuitiva para controle de serviços e categorias. A equipe
            priorizou o desenvolvimento de componentes reutilizáveis com
            Tailwind CSS, garantindo uma aplicação performática, tipada e
            totalmente responsiva.
          </p>
        </div>

        <div className="flex flex-col mt-4 gap-4">
          <h3 className="text-(--quinternaria) font-bold text-2xl">
            Tecnologias Utilizadas
          </h3>

          <div className="flex flex-row flex-wrap gap-4 justify-center">
            {/* NestJS */}
            <SpotlightCard spotlightColor="rgba(224, 35, 78, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiNestjs className="text-2xl" /> NestJS
              </div>
            </SpotlightCard>

            {/* TypeScript */}
            <SpotlightCard spotlightColor="rgba(49, 120, 198, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiTypescript className="text-2xl" /> TypeScript
              </div>
            </SpotlightCard>

            {/* PostgreSQL */}
            <SpotlightCard spotlightColor="rgba(51, 103, 145, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiPostgresql className="text-2xl" /> PostgreSQL
              </div>
            </SpotlightCard>

            {/* MySQL */}
            <SpotlightCard spotlightColor="rgba(51, 103, 145, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiMysql className="text-2xl" /> MySQL
              </div>
            </SpotlightCard>

            {/* TypeORM */}
            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <span className="font-bold text-xs border border px-1 rounded">
                  ORM
                </span>{" "}
                TypeORM
              </div>
            </SpotlightCard>

            {/* JWT */}
            <SpotlightCard spotlightColor="rgba(251, 1, 91, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiJsonwebtokens className="text-2xl" /> JWT
              </div>
            </SpotlightCard>

            {/* ESLint */}
            <SpotlightCard spotlightColor="rgba(75, 50, 195, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiEslint className="text-2xl" /> ESLint
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(100, 108, 255, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiVite className="text-2xl" /> Vite
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(0, 216, 255, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiReact className="text-2xl" /> React
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(56, 189, 248, 0.2)">
              <div className="flex justify-center items-center gap-3 text-(--terciara)">
                <SiTailwindcss className="text-2xl" /> Tailwind CSS
              </div>
            </SpotlightCard>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/Grupo2-JS09/generation-react-veloFit"
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

export default VeloFit;
