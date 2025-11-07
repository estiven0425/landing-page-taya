export default function Footer() {
  return (
    <>
      <div className="footerSocial">
        <nav
          aria-label="Navegación por redes sociales"
          className="footerSocialMenu"
        >
          <a
            href="#"
            title="Perfil de Instagram"
            className="footerSocialMenuItem"
          >
            <i className="bi bi-instagram footerSocialMenuItemIcon"></i>
          </a>
          <a
            href="#"
            title="Perfil de Facebook"
            className="footerSocialMenuItem"
          >
            <i className="bi bi-facebook footerSocialMenuItemIcon"></i>
          </a>
          <a
            href="#"
            title="Perfil de Linkedin"
            className="footerSocialMenuItem"
          >
            <i className="bi bi-linkedin footerSocialMenuItemIcon"></i>
          </a>
        </nav>
        <p className="footerSocialText">
          Puedes encontrarnos y contactar con nosotros a traves de nuestras
          redes sociales
        </p>
      </div>
      <div className="footerInfo">
        <h2 className="footerInfoTitle">Información</h2>
        <ul className="footerInfoList">
          <li className="footerInfoListItem">PBX: 0000</li>
          <li className="footerInfoListItem">Teléfono: 0000</li>
          <li className="footerInfoListItem">
            E-mail: alcosdeyarumal@taya.com
          </li>
          <li className="footerInfoListItem">Dirección: CR 100 A #100A</li>
          <li className="footerInfoListItem">NIT: 0000</li>
        </ul>
      </div>
      <nav className="footerNavigation">
        <h2 className="footerNavigationTitle">Navegación</h2>
        <ul className="footerNavigationList">
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#header"}
              title="Navegar a inicio"
            >
              Inicio
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainAboutUs"}
              title="Navegar a acerca de nosotros"
            >
              Acerca de nosotros
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainService"}
              title="Navegar a servicios"
            >
              Servicios
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainGallery"}
              title="Navegar a galería"
            >
              Galería
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainContact"}
              title="Navegar a contáctanos"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <p className="footerCopyright">
        © {new Date().getFullYear()} Talcos de Yarumal S.A.S. Todos los
        derechos reservados.
      </p>
    </>
  );
}
