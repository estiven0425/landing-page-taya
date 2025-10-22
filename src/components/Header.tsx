import img from "../assets/img/logo.png";

export default function Header() {
  return (
    <>
      <img
        alt="Logo de TALCOS de Yarumal S.A.S"
        className="headerImg"
        decoding="async"
        src={img}
      ></img>
      <nav
        aria-label="Menú de navegación"
        className="headerNav"
        role="navigation"
      >
        <a className="headerNavItem" href={"#header"} title="Navegar a inicio">
          Inicio
        </a>
        <a
          className="headerNavItem"
          href={"#mainAboutUs"}
          title="Navegar a acerca de nosotros"
        >
          Acerca de nosotros
        </a>
        <a
          className="headerNavItem"
          href={"#mainService"}
          title="Navegar a servicios"
        >
          Servicios
        </a>
        <a
          className="headerNavItem"
          href={"#mainGallery"}
          title="Navegar a galería"
        >
          Galería
        </a>
        <a
          className="headerNavItem"
          href={"#mainContact"}
          title="Navegar a contáctanos"
        >
          Contáctanos
        </a>
      </nav>
    </>
  );
}
