import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSobre = () => {
    navigate("/#sobre");
    setIsOpen(false);
  };

  const scrollToHabilidade = () => {
    navigate("/#habilidades");
    setIsOpen(false);
  };

  const scrollToContato = () => {
    navigate("/#contato");
    setIsOpen(false);
  };

  return (
    <nav className="shadow-md bg-(--terciara)/8">
      <div
        className="container shadow-lg rounded-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center 
                      justify-end lg:justify-center"
      >
        {/* Botão hamburguer (mobile) */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 
                     hover:bg-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu grande (desktop) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <ul className="flex space-x-4">
            {/* <li>
              <Link to="/" className="text-(--secundaria) font-medium px-3 py-2 rounded-md bg-(--terciara) shadow-sm">Home</Link>
            </li> */}
            <li>
              <a
                className="text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md cursor-pointer"
                onClick={scrollToSobre}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md cursor-pointer"
                onClick={scrollToHabilidade}
              >
                Habilidades
              </a>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md"
              >
                {" "}
                Projetos{" "}
              </Link>
            </li>
            <li>
              <a
                className="text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md cursor-pointer"
                onClick={scrollToContato}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li>
              <a
                className="block text-(--secundaria) font-medium px-3 py-2 rounded-md bg-(--terciara) shadow-sm"
                onClick={scrollToSobre}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="block text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md"
                onClick={scrollToHabilidade}
              >
                Habilidades
              </a>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md"
              >
                {" "}
                Projetos{" "}
              </Link>
            </li>
            <li>
              <a
                className="block text-(--quaternaria) hover:bg-(--terciara) hover:text-(--primaria) px-3 py-2 rounded-md"
                onClick={scrollToContato}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
