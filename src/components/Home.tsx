export default function Home() {
  return (
    <>
      <h1 className="mainHomeSlogan">¡Bienvenidos a mi portafolio web!</h1>
      <p className="mainHomeDescription">
        ¡Hola! Soy Estiven Montoya y en esta página web les contaré quien soy,
        mis destrezas y mis proyectos.
      </p>
      <a
        className="mainHomeButton"
        href={"#mainAboutUs"}
        title="Navegar a acerca de mi"
      >
        Conocerme
      </a>
    </>
  );
}
