const Sobre = () => {
  return (
    <div className="flex flex-col justify-center gap-5 p-10">
      <h2 className="text-center text-(--quinternaria) text-5xl font-bold">Sobre Mim</h2>

      <div className="flex flex-col lg:flex-row justify-around gap-10">

        <div className="flex justify-center items-center p-2">
          <img className="border-4 rounded-full border-(--quaternaria) hover:border-(--quinternaria)" src="https://media.licdn.com/dms/image/v2/D4D03AQEFCRWHfqh6Mg/profile-displayphoto-scale_200_200/B4DZgLef.gGkAY-/0/1752539202030?e=1768435200&v=beta&t=QjI_JUn4sBKz84PKOylmCWanXKj15dxEIxv14H7KZm0" alt="Imagem do linkedin" />
        </div>

        <div className="flex flex-1 flex-col gap-2 text-(--terciara) text-justify p-10">
          <p>
            Sou uma Desenvolvedora Full Stack em constante evolução, apaixonada por
            tecnologia e pela criação de soluções que realmente fazem a diferença.
            Graduada em Matemática Pura e Aplicada e formada no Bootcamp Full Stack
            da Generation Brasil, desenvolvi uma base sólida que une lógica, análise
            e prática no desenvolvimento de aplicações web.
          </p>
          <p>
            Atuo tanto no front-end quanto no back-end, utilizando tecnologias como
            Java, Spring Boot, JavaScript, TypeScript, React, Node.js e MySQL. Meu
            foco é construir sistemas funcionais, bem estruturados e intuitivos,
            desde a modelagem de dados até a experiência final do usuário.
          </p>
          <p>
            Minha trajetória me tornou uma profissional organizada, curiosa e
            determinada, sempre buscando aprender, melhorar e entregar resultados
            com qualidade. Acredito no poder da tecnologia para transformar
            processos e conectar pessoas, e quero seguir construindo projetos que
            unam propósito, eficiência e inovação.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
