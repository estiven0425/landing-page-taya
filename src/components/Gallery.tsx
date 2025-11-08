import shairSena from "../assets/img/shair-sena.png";
import w3School from "../assets/img/w3school.png";
import talcosdeYarumal from "../assets/img/talcos-yarumal.png";
import crudTAYA from "../assets/img/crud-taya.png";
import gitHub from "../assets/img/github.png";
import personalLandingPage from "../assets/img/personal-landing-page.png";

export default function Gallery() {
  const images = [
    {
      caption: "Proyecto universitario",
      description:
        "Noticiero local desarrollado en React(create-react-app en JSX), Express(JS) y con base de datos en MySQL",
      src: shairSena,
      url: "https://github.com/estiven0425/SHAIR-SENA",
    },
    {
      caption: "Portafolio con cursos",
      description:
        "Portafolio donde se encuentran los cursos que he realizado en W3School con todos mis apuntes y ejemplos de código",
      src: w3School,
      url: "https://github.com/estiven0425/Portafolio",
    },
    {
      caption: "Software de gestión empresarial",
      description:
        "Software para gestionar y administrar la empresa, con gestión de turnos, informes, inventario, analítica de datos y demás, desarrollado en React(Vite en JSX), Express(Express-generator en JS), CSS modular y con base de datos en MySQL",
      src: talcosdeYarumal,
      url: "https://github.com/estiven0425/TALCOS_Yarumal",
    },
    {
      caption: "Software de gestión de base de datos para TALCOS de Yarumal",
      description:
        "Software complementario para TALCOS de Yarumal que permite realizar funciones CRUD y generar informes sin automatizar datos, desarrollado en React(Vite en TSX), Express(Express-generator en TS), SASS modular y con base de datos en MySQL",
      src: crudTAYA,
      url: "https://github.com/estiven0425/crud_taya",
    },
    {
      caption: "Calculadora sencilla para dominar TS",
      description:
        "Calculadora sencilla para dominar TypeScript, desarrollado en React(Vite en TSX), SASS modular y con docker",
      src: gitHub,
      url: "https://github.com/estiven0425/calculator",
    },
    {
      caption: "Portafolio web para mis presentación",
      description:
        "Página web para presentar mis proyectos, desarrollado en React(Vite en TSX) y SASS modular",
      src: personalLandingPage,
      url: "https://github.com/estiven0425/personal-landing-page",
    },
  ];

  return (
    <>
      <h2 className="mainGalleryTitle">
        <span>Proyectos</span>
      </h2>
      <p className="mainGalleryText">
        Estos son los proyectos que he desarrollado de manera individual
      </p>
      <article className="mainGalleryArticle">
        {images.map((image, index) => (
          <figure className="mainGalleryArticleFigure" key={index}>
            <img
              alt={image.caption}
              className="mainGalleryArticleFigureImg"
              decoding="async"
              src={image.src}
              title={image.caption}
            />
            <figcaption className="mainGalleryArticleFigureCaption">
              {image.description} <br />
              <a
                className="mainGalleryArticleFigureCaptionLink"
                href={image.url ? image.url : "#"}
                target="_blank"
                title="Ir a repositorio"
              >
                {image.url}
              </a>
            </figcaption>
          </figure>
        ))}
      </article>
    </>
  );
}
