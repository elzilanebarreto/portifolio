import { Link } from "react-router-dom";
import SpotlightCard from "../../components/cards/SpotlightCard";
import Botao from "../../components/botao/Botao";

function Projetos() {
  return (
    <div className="flex flex-col m-5 text-amber-50 p-5">
      <h2 className="text-center text-(--quinternaria) text-5xl font-bold m-8">
        Projetos Feitos
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-5 p-2">
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="border-2 hover:border-(--secundaria) transition-all duration-300 ease-linear hover:scale-102"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-(--quinternaria) font-bold text-2xl">
              VeloFit - Gerenciamento de Academias
            </h3>
            <p className="text-justify text-(--quaternaria)">
              Aplicação de gestão de serviços fitness e categorias, para
              controle administrativo de matrículas e organização de centros de
              bem-estar.
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link
              to="/projetos/velofit"
            >
              <Botao texto="Ver Detalhes" />
            </Link>
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="border-2 hover:border-(--secundaria) transition-all duration-300 ease-linear hover:scale-102"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-(--quinternaria) font-bold text-2xl">
              VeloGo - Gerenciamento de Serviços de Transporte
            </h3>
            <p className="text-justify text-(--quaternaria)">
              Aplicação de gerenciamento de transporte e logística, para
              otimização de custos de viagem e gerenciamento centralizado de
              categorias de transporte.
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link
              to="/projetos/velogo">
              <Botao texto="Ver Detalhes" />
            </Link>
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="border-2 hover:border-(--secundaria) transition-all duration-300 ease-linear hover:scale-102"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-(--quinternaria) font-bold text-2xl">
              Renascer Mulher - Comunidade para Mulheres
            </h3>
            <p className="text-justify text-(--quaternaria)">
              Plataforma de rede de apoio e comunidade digital, para
              compartilhamento de experiências e suporte mútuo entre mulheres em
              fase de maternidade.
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link
              to="/projetos/comunidade">
              <Botao texto="Ver Detalhes" />
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Projetos;
