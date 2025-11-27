import SpotlightCard from "../cards/SpotlightCard";

const Destaque = () => {
  return (
    <div className="flex flex-col p-10 lg:flex-row justify-around gap-5">

      <div className="flex flex-col gap-3 flex-2 lg:max-w-3xl">
        <h2 className="text-(--terciara) text-5xl font-bold">
          Elzilane Barreto
        </h2>
        <h3 className="text-(--quinternaria) text-4xl font-extrabold">
          Desenvolvedora Full Stack
        </h3>
        <p className="text-(--terciara) text-justify">
          Desenvolvedora Full Stack com experiência tanto no ecossistema Java quanto em JavaScript. No back-end, trabalho com Java e Spring Boot na criação de APIs estruturadas e escaláveis. No front-end, atuo com React, TypeScript, NestJS e Tailwind para desenvolver interfaces modernas e fluidas. Busco sempre entregar soluções completas, funcionais e alinhadas às melhores práticas de desenvolvimento.
        </p>
      </div>

      <div className="flex flex-1 lg:max-w-xl">
        <SpotlightCard className="custom-spotlight-card text-(--terciara) flex gap-2 flex-col" spotlightColor="rgba(0, 229, 255, 0.2)">
          <h4 className="text-center text-(--quinternaria) font-bold">Projeto em Destaque</h4>

          <h2 className="text-2xl text-justify">VeloFit - Gerenciamento de Academias</h2>

          <p>
            Aplicação front-end moderna em React + TypeScript para gestão de serviços e categorias, integrada a um back-end externo via Axios.
          </p>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Destaque;
