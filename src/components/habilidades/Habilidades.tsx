import { FaDocker, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import SpotlightCard from "../cards/SpotlightCard";
import {
  SiJavascript,
  SiPhp,
  SiC,
  SiSpring,
  SiNestjs,
  SiReact,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";

const Habilidades = () => {
  return (
    <div className="flex flex-col justify-center gap-5 p-10">
      <h2 className="text-center text-(--quinternaria) text-5xl font-bold">
        Habilidades
      </h2>

      <div className="flex flex-col lg:flex-row justify-around gap-4 p-2">
        {/* LINGUAGENS */}
        <div className="flex flex-col gap-4 p-3">
          <h4 className="text-amber-50 text-center text-3xl">Linguagens</h4>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <FaJava className="w-8 h-8" /> Java
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiJavascript className="w-8 h-8" /> JavaScript
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <FaPython className="w-8 h-8" /> Python
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiPhp className="w-8 h-8" /> PHP
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiC className="w-8 h-8" /> C / C++
            </div>
          </SpotlightCard>
        </div>

        {/* FRAMEWORKS */}
        <div className="flex flex-col  gap-4 p-3">
          <h4 className="text-amber-50 text-center text-3xl">Frameworks</h4>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiSpring className="w-8 h-8" /> Spring
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiNestjs className="w-8 h-8" /> NestJS
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiReact className="w-8 h-8" /> React
            </div>
          </SpotlightCard>
        </div>

        {/* BANCOS DE DADOS */}
        <div className="flex flex-col  gap-4 p-3">
          <h4 className="text-amber-50 text-center text-3xl">Banco de Dados</h4>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiMysql className="w-8 h-8" /> MySQL
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiMongodb className="w-8 h-8" /> MongoDB
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiPostgresql className="w-8 h-8" /> PostgreSQL
            </div>
          </SpotlightCard>
        </div>

        {/* CLOUD & DEVOPS */}
        <div className="flex flex-col gap-4 p-3">
          <h4 className="text-amber-50 text-center text-3xl">Cloud & DevOps</h4>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <FaDocker className="w-8 h-8" /> Docker
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <FaGitAlt className="w-8 h-8" /> Git
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex justify-center items-center gap-3 text-(--terciara)">
              <SiGithub className="w-8 h-8" /> GitHub
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
