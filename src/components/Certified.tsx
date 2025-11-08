export default function Certified() {
  return (
    <>
      <h2 className="mainCertifiedTitle">
        Mis <span>certificados</span>
      </h2>
      <article className="mainCertifiedContainer">
        <div className="mainCertifiedContainerItem">
          <a
            className="mainCertifiedContainerItemLink"
            download="diploma-bachiller-academico-estiven0425.pdf"
            href="/certified-high-school.jpg"
            title="Descargar diploma"
          >
            <i className="bi bi-file-arrow-down-fill mainCertifiedContainerItemLinkIcon"></i>
          </a>
          <p className="mainCertifiedContainerItemDescription">
            Bachiller académico
          </p>
        </div>
        <div className="mainCertifiedContainerItem">
          <a
            className="mainCertifiedContainerItemLink"
            download="diploma-tecnico-estiven0425.pdf"
            href="/certified-technical.jpg"
            title="Descargar diploma"
          >
            <i className="bi bi-file-arrow-down-fill mainCertifiedContainerItemLinkIcon"></i>
          </a>
          <p className="mainCertifiedContainerItemDescription">
            Técnico en programación de software
          </p>
        </div>
        <div className="mainCertifiedContainerItem">
          <a
            className="mainCertifiedContainerItemLink"
            download="diploca-tecnologo-estiven0425.pdf"
            href="/certified-university.jpg"
            title="Descargar diploma"
          >
            <i className="bi bi-file-arrow-down-fill mainCertifiedContainerItemLinkIcon"></i>
          </a>
          <p className="mainCertifiedContainerItemDescription">
            Tecnólogo en análisis y desarrollo de software
          </p>
        </div>
      </article>
    </>
  );
}
