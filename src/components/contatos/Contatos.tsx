import Botao from "../botao/Botao";

const Contatos = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 m-4"> 

      <h3 className="text-center text-(--quaternaria) text-4xl font-bold m-3">Vamos criar algo incrível juntos?</h3>

      <p className="text-center text-(--branco) p-5">Estou disponível para novos desafios e projetos inovadores. Se você tem uma ideia ou uma proposta de colaboração, adoraria ouvir e ajudar a torná-la real.</p>

      <div className="flex justify-around gap-5 p-4">
        <a href="mailto:elzilanecardoso24@gmail.com" className="text-2xl" target="_blank">
          <Botao texto="E-mail"/>
        </a>
        <a href="https://www.linkedin.com/in/elzilanebarreto/" className="text-2xl" target="_blank">
          <Botao texto="Linkedin"/>
        </a>
      </div>
    </div>);
};

export default Contatos;
