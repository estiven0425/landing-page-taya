import img from "../assets/img/about-us.jpg";

export default function Gallery() {
  const images = [
    { caption: "Equipo en la mina principal", src: img, url: "" },
    { caption: "Equipo en la mina principal", src: img, url: "" },
    { caption: "Equipo en la mina principal", src: img, url: "" },
    { caption: "Equipo en la mina principal", src: img, url: "" },
    { caption: "Equipo en la mina principal", src: img, url: "" },
    { caption: "Equipo en la mina principal", src: img, url: "" },
  ];

  return (
    <>
      <h2 className="mainGalleryTitle">
        <span>Galería</span>
      </h2>
      <p className="mainGalleryText">
        Estas son imágenes de nuestras minas, donde nace la magia y del equipo
        de trabajo que lo hace posible
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
              <a
                className="mainGalleryArticleFigureCaptionLink"
                href={image.url ? image.url : "#"}
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
