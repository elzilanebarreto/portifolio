const Sobre = () => {
  return (
    <div className="flex flex-col justify-center gap-5 p-10">
      <h2 className="text-center text-(--quinternaria) text-5xl font-bold">
        Sobre Mim
      </h2>

      <div className="flex flex-col lg:flex-row justify-around gap-10">
        <div className="flex justify-center items-center p-2">
          <img
            className="border-4 rounded-full border-(--quaternaria) hover:border-(--quinternaria)"
            src="https://media.licdn.com/dms/image/v2/D4D03AQEFCRWHfqh6Mg/profile-displayphoto-scale_400_400/B4DZgLef.gGkAg-/0/1752539202030?e=1778716800&v=beta&t=E2YypslzGHCoKPvLoRZ7Dr_ZlM9t2Bw_TEA3vPUSuYc"
            alt="Imagem do linkedin"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 text-(--terciara) text-justify p-10">
          <p>
            Sou uma profissional de tecnologia em constante evolução, com
            atuação em Desenvolvimento Full Stack e Análise de Dados, apaixonada
            por criar soluções que gerem impacto real. Graduada em Matemática
            Pura e Aplicada e formada no Bootcamp Full Stack da Generation
            Brasil, desenvolvi uma base sólida que une raciocínio lógico,
            análise crítica e aplicação prática no desenvolvimento de sistemas e
            na interpretação de dados.
          </p>
          <p>
            No desenvolvimento, atuo tanto no front-end quanto no back-end,
            utilizando tecnologias como Java, Spring Boot, JavaScript,
            TypeScript, React, Node.js e MySQL/PostgreSQL, construindo aplicações
            completas, funcionais e bem estruturadas. Na área de dados, aplico
            minha formação em matemática para análise, organização e
            interpretação de informações, apoiando a tomada de decisões mais
            estratégicas.
          </p>
          <p>
            Sou organizada, curiosa e determinada, sempre buscando evoluir e
            gerar valor através da tecnologia e dos dados. Acredito no poder da
            união entre desenvolvimento e análise para otimizar processos, gerar
            insights e criar soluções mais inteligentes, com foco em eficiência,
            inovação e impacto positivo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
