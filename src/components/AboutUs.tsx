import img from "../assets/img/about-us.jpg";

export default function AboutUs() {
  return (
    <>
      <article className="mainAboutUsArticle">
        <h2 className="mainAboutUsArticleTitle">
          <span>Acerca</span> de nosotros
        </h2>
        <p className="mainAboutUsArticleText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          aspernatur deserunt dolores ea eligendi eos facere facilis hic ipsum
          molestiae porro possimus quae qui quibusdam reprehenderit, rerum
          soluta ut. Inventore.
        </p>
      </article>
      <figure className="mainAboutUsFigure">
        <img
          alt="Equipo de trabajo de TALCOS de Yarumal S.A.S"
          className="mainAboutUsFigureImg"
          decoding="async"
          loading="lazy"
          src={img}
        />
      </figure>
    </>
  );
}
