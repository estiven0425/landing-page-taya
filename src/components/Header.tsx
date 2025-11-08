export default function Header() {
  return (
    <>
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
          title="Navegar a acerca de mi"
        >
          Acerca de mi
        </a>
        <a
          className="headerNavItem"
          href={"#mainService"}
          title="Navegar a destrezas"
        >
          Destrezas
        </a>
        <a
          className="headerNavItem"
          href={"#mainCertified"}
          title="Navegar a certificados"
        >
          Certificados
        </a>
        <a
          className="headerNavItem"
          href={"#mainGallery"}
          title="Navegar a proyectos"
        >
          Proyectos
        </a>
        <a
          className="headerNavItem"
          href={"#mainContact"}
          title="Navegar a contáctame"
        >
          Contáctame
        </a>
      </nav>
    </>
  );
}
