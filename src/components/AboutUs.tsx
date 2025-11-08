import img from "../assets/img/about-us.jpeg";

export default function AboutUs() {
  return (
    <>
      <article className="mainAboutUsArticle">
        <h2 className="mainAboutUsArticleTitle">
          <span>Acerca</span> de mi
        </h2>
        <p className="mainAboutUsArticleText">
          Mi nombre es Estiven Montoya, tengo 20 años y soy de la ciudad de
          Medellín, Colombia. Me crié y crecí en esta ciudad, realizé mis
          estudios escolares y universitarios aquí, esta ciudad me ha visto
          crecer personal y profesionalmente. <br />
          <br />
          Soy un desarrollador de software fullstack enfocado en crear
          aplicaciones web, me encanta aprender cosas nuevas, afrontar desafios,
          demostrar mis capacidades y que las personas a las que ayudo queden
          satisfechas con mi trabajo. <br />
          <br />
          Desde siempre me ha interesado la tecnología y el desarrollo de
          software es algo que descubrí a los 16 años, y desde entonces he
          estado aprendiendo y creando cosas. Empecé con HTML, CSS y JavaScript
          y fuí perfeccionandome en esos lenguajes, luego al llegar a la
          universidad tuve la oportunidad de aprender más sobre el desarrollo de
          software, análisis y bases de datos, pudiendo agregar a mis
          conocimientos lenguajes nuevos como PHP y MySQL, además del uso de
          herramientas como Git y GitHub. <br />
          <br />
          En esa epoca de exploración encontraría lo que sería mi lugar feliz,
          React, todo el ecosistema de NodeJS me cautivo y decidí enfocarme en
          esto, aprendí a usar React, Express, MySQL, Canvas, Bootstrap y a ser
          capaz de analizar, diseñar y crear un software completo para
          solucionar problemas. Además de haber realizado múltiples cursos en
          lenguajes como HTML, CSS, SASS, JS, PHP, MySQL y React en la página
          web de{" "}
          <a
            className="mainAboutUsArticleTextLink"
            href="https://www.w3profile.com/estiven0425/"
            title="Enlace a W3School"
          >
            W3School
          </a>
          {". "}
          <br />
          <br />
          Presenté mi proyecto universitario desplegado a nivel LAN y fué
          considerado de los mejores de la carrera universitaria, en el pude
          poner en práctica mis conocimientos en HTML, CSS, JavaScript, React,
          Express y MySQL. <br /> <br />
          Luego trabajé con una empresa desarrollando todo un software complejo
          para automatizar y solucionar múltiples necesidades que presentaban,
          eso y mis ganas de aprender me llevaron a aprender y dominar nuevas
          tecnologías, además de las que ya conocía, React en vite, Express con
          Express-generator, SASS, CSS modular, buena semántica, buena
          arquitectura y figma me permitieron ser más profesional, además de eso
          desarrollé otro software complementario para realizar funciones CRUD y
          algunas otras del software principal pero sin automatizaciones, en ese
          aprendí TypeScript (TSX para React y TS para Express).
        </p>
      </article>
      <figure className="mainAboutUsFigure">
        <img
          alt="Estiven Montoya en un museo de arte"
          className="mainAboutUsFigureImg"
          decoding="async"
          src={img}
        />
      </figure>
    </>
  );
}
