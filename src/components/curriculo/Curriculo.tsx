import { HiOutlineDocumentText } from "react-icons/hi";
import Botao from "../botao/Botao";

function Curriculo() {
  return (
    <div className="flex flex-col w-full my-5">
          <div className="md:px-10 lg:px-15 xl:px-20 flex justify-end">
              <a href="/ElzilaneBarreto_curriculo.pdf" rel="noopener noreferrer" target="_blank" className="flex">
                <Botao texto="Acesse Meu Currículo" Icon={HiOutlineDocumentText}/>
              </a>
          </div>
    </div>
  );
}

export default Curriculo;
