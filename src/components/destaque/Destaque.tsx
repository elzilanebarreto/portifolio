import TextType from "../animatexto/TextType";
import SpotlightCard from "../cards/SpotlightCard";

const Destaque = () => {
  return (
    <div className="flex flex-col p-10 lg:flex-row justify-around gap-5">
      <div className="flex flex-col gap-3 flex-2 lg:max-w-3xl">
        <h2 className="text-(--quaternaria) text-5xl font-bold">
          Elzilane Barreto
        </h2>
        <h3 className="text-(--quinternaria) text-4xl font-extrabold">
          <TextType
            text={["Desenvolvedora Full-Stack", "Analista de Dados"]}
            typingSpeed={75}
            pauseDuration={1800}
            showCursor={true}
            cursorCharacter="_"
          />
        </h3>
        <p className="text-(--terciara) text-justify">
          Profissional de tecnologia com atuação em Desenvolvimento Full Stack e
          Análise de Dados, unindo programação e visão analítica para gerar
          soluções completas. Possuo experiência no ecossistema Java e
          JavaScript, com back-end em NestJS e Spring Boot na construção de APIs
          escaláveis. No front-end, utilizo React, TypeScript e Tailwind
          para criar interfaces modernas. Na área de dados, aplico análise,
          organização e interpretação de informações para apoiar decisões. Busco
          sempre entregar soluções eficientes, bem estruturadas e orientadas a
          resultados.
        </p>
      </div>

      <div className="flex flex-1 lg:max-w-xl">
        <SpotlightCard
          className="custom-spotlight-card text-(--terciara) flex gap-2 flex-col"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h4 className="text-center text-(--quinternaria) font-bold">
            Projeto em Destaque
          </h4>

          <h2 className="text-2xl text-justify">
            VeloFit - Gerenciamento de Academias
          </h2>

          <p>
            Aplicação front-end moderna em React + TypeScript para gestão de
            serviços e categorias, integrada a um back-end externo via Axios.
          </p>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Destaque;
