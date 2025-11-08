import AboutUs from "../components/AboutUs.tsx";
import Contact from "../components/Contact.tsx";
import Certified from "../components/Certified.tsx";
import Footer from "../components/Footer.tsx";
import Gallery from "../components/Gallery.tsx";
import Header from "../components/Header.tsx";
import Home from "../components/Home.tsx";
import Service from "../components/Service.tsx";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/app.scss";

export default function App() {
  return (
    <>
      <header className="header" id="header">
        <Header />
      </header>
      <main className="main" id="main" role="main">
        <section aria-labelledby="mainHome" className="mainHome" id="mainHome">
          <Home />
        </section>
        <section className="mainAboutUs" id="mainAboutUs">
          <AboutUs />
        </section>
        <section className="mainService" id="mainService">
          <Service />
        </section>
        <section className="mainCertified" id="mainCertified">
          <Certified />
        </section>
        <section className="mainGallery" id="mainGallery">
          <Gallery />
        </section>
        <section className="mainContact" id="mainContact">
          <Contact />
        </section>
      </main>
      <footer className="footer" id="footer">
        <Footer />
      </footer>
    </>
  );
}
