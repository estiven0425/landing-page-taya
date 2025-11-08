import css from "../assets/img/css.svg";
import expressJS from "../assets/img/express.svg";
import git from "../assets/img/git.svg";
import html from "../assets/img/html.svg";
import js from "../assets/img/js.svg";
import nodeJS from "../assets/img/nodejs.svg";
import mySQL from "../assets/img/mysql.svg";
import php from "../assets/img/php.svg";
import reactJS from "../assets/img/react.svg";
import sass from "../assets/img/sass.svg";
import ts from "../assets/img/ts.svg";

export default function Service() {
  return (
    <>
      <h2 className="mainServiceTitle">
        Mis <span>destrezas</span>
      </h2>
      <article className="mainServiceContainer">
        <div className="mainServiceContainerItem">
          <i className="bi bi-exclamation-circle-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Analítica</h3>
          <p className="mainServiceContainerItemDescription">
            Analizar un problema, una causa, una necesidad, el porque y el como
            para poder desarrollar una solución
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-file-earmark-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Documentación</h3>
          <p className="mainServiceContainerItemDescription">
            Crear diagramas, casos de uso, historias de usuario, fichas
            técnicas, manuales de usuario y técnicos para los proyectos a
            desarrollar
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-bug-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">
            Solución de problemas
          </h3>
          <p className="mainServiceContainerItemDescription">
            Establecer una solución para el problema identificado y documentado
            y desarrollar un software que satisfaga esas necesidades
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-magic mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Diseño web</h3>
          <p className="mainServiceContainerItemDescription">
            Diseñar una interfaz de usuario para el software desarrollado la
            cual permita a los usuarios interactuar con el software, entenderlo
            y usarlo correctamente
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-boxes mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Arquitectura web</h3>
          <p className="mainServiceContainerItemDescription">
            Diseñar toda la infraestructura, organización y estructura del
            código fuente para poder desarrollar un software que cumpla con las
            necesidades del cliente y con buenas prácticas
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-list-columns-reverse mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Semántica</h3>
          <p className="mainServiceContainerItemDescription">
            Usar las etiquetas HTML y sintaxis de programación correctas y más
            adecuadas para poder obtener una buena accesibilidad, rendimiento y
            SEO
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-globe-americas-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Buenas prácticas</h3>
          <p className="mainServiceContainerItemDescription">
            Aplicar normas para tener unas correctas convenciones de código y
            que sea escalable, y entendible por otros desarrolladores
          </p>
        </div>
      </article>
      <article className="mainServiceContainer">
        <div className="mainServiceContainerItem">
          <img
            alt="HTML"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={html}
            title="HTML (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="CSS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={css}
            title="CSS (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="JavaScript"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={js}
            title="JavaScript (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="SASS/SCSS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={sass}
            title="SASS/SCSS (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="TypeScript"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={ts}
            title="TypeScript (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="ReactJS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={reactJS}
            title="ReactJS (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="ExpressJS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={expressJS}
            title="ExpressJS (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="NodeJS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={nodeJS}
            title="NodeJS (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="MySQL"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={mySQL}
            title="MySQL (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="PHP"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={php}
            title="PHP (Bajo)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="Git"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={git}
            title="Git (Intermedio)"
          />
        </div>
      </article>
    </>
  );
}
