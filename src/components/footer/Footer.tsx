/* eslint-disable prefer-const */
const Footer = () => {

  let data = new Date().getFullYear()

  return (
    <div className="flex shadow-md justify-center bg-(--terciara)/10">
      <p className="text-(--quaternaria) p-5">
        &copy; {data} | Elzilane Barreto | Todos os Direitos Reservados
      </p>
    </div>
  );
};

export default Footer;
