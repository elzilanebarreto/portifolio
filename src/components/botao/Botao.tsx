import type { ElementType } from "react";

interface BotaoProps {
  Icon?: ElementType;
  texto: string;
}

function Botao({ texto, Icon }: BotaoProps) {
  return (
    <div className="text-(--primaria) bg-(--quinternaria) border-2 border-(--quinternaria) hover:bg-(--quaternaria) font-bold hover:text-(--secundaria) hover:border-(--primeria) px-3 py-2 rounded-3xl flex items-center gap-2">
      {Icon && <Icon className="text-xl" />}
      <span>{texto}</span>
    </div>
  );
}

export default Botao;
