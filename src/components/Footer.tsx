export default function Footer() {
  return (
    <>
      <div className="footerSocial">
        <nav
          aria-label="Navegación por redes sociales"
          className="footerSocialMenu"
        >
          <a
            href="https://www.instagram.com/estiven_0425/"
            title="Perfil de Instagram"
            className="footerSocialMenuItem"
            target="_blank"
          >
            <i className="bi bi-instagram footerSocialMenuItemIcon"></i>
          </a>
          <a
            href="https://www.facebook.com/estiven.montoyatorres.5"
            title="Perfil de Facebook"
            className="footerSocialMenuItem"
            target="_blank"
          >
            <i className="bi bi-facebook footerSocialMenuItemIcon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/estiven-montoya-torres-b77a03254"
            title="Perfil de Linkedin"
            className="footerSocialMenuItem"
            target="_blank"
          >
            <i className="bi bi-linkedin footerSocialMenuItemIcon"></i>
          </a>
          <a
            href="https://www.t.me/estiven0425"
            title="Perfil de Telegram"
            className="footerSocialMenuItem"
            target="_blank"
          >
            <i className="bi bi-telegram footerSocialMenuItemIcon"></i>
          </a>
        </nav>
        <p className="footerSocialText">
          Puedes encontrarme y contactar conmigo a traves de mis redes sociales
        </p>
      </div>
      <div className="footerInfo">
        <h2 className="footerInfoTitle">Información</h2>
        <ul className="footerInfoList">
          <li className="footerInfoListItem">Teléfono: +57 3242018817</li>
          <li className="footerInfoListItem">
            E-mail: estivenmoto6@gmail.com.com
          </li>
          <li className="footerInfoListItem">
            <a
              className="footerInfoListItemLink"
              download="cv-estiven0425.pdf"
              href="/cv.pdf"
              title="Descargar currículum"
            >
              Currículum
            </a>
          </li>
          <li className="footerInfoListItem">Medellín - Colombia</li>
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
              title="Navegar a acerca de mi"
            >
              Acerca de mi
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainService"}
              title="Navegar a destrezas"
            >
              Destrezas
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainGallery"}
              title="Navegar a proyectos"
            >
              Proyectos
            </a>
          </li>
          <li className="footerNavigationListItem">
            <a
              className="footerNavigationListItemLink"
              href={"#mainContact"}
              title="Navegar a contáctame"
            >
              Contáctame
            </a>
          </li>
        </ul>
      </nav>
      <p className="footerCopyright">
        Realizado por:
        <a
          className="footerCopyrightLink"
          href={"https://github.com/estiven0425"}
          title="Navegar a mi perfil de GitHub"
        >
          {" "}
          estiven0425
        </a>
      </p>
    </>
  );
}
