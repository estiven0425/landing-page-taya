import { useRef, useState } from "react";
import * as React from "react";

import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Enviando mensaje...");

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,

        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setStatus("¡Mensaje enviado!");

          form.current?.reset();
        },
        (error) => {
          console.error(error);

          setStatus("Error al enviar");
        },
      );
  };

  return (
    <>
      <article className="mainContactArticle">
        <h2 className="mainContactArticleTitle">Contáctame</h2>
        <form
          ref={form}
          className="mainContactArticleForm"
          method="POST"
          onSubmit={sendEmail}
        >
          <fieldset className="mainContactArticleFormFieldset">
            <input
              className="mainContactArticleFormFieldsetInput"
              id="mainContactArticleFormFieldsetName"
              name="name"
              placeholder="Nombre"
              required
              type="text"
            />
            <input
              className="mainContactArticleFormFieldsetInput"
              id="mainContactArticleFormFieldsetEmail"
              placeholder="Correo electrónico"
              name="email"
              required
              type="email"
            />
          </fieldset>
          <textarea
            className="mainContactArticleFormTextarea"
            id="mainContactArticleFormFieldsetMessage"
            name="message"
            placeholder="Mensaje"
            required
          ></textarea>
          <button
            className="mainContactArticleFormButton"
            disabled={status === "Enviando mensaje..."}
            type="submit"
          >
            Enviar
          </button>
          <p
            aria-live="polite"
            className="mainContactArticleFormStatus"
            role="status"
          >
            {status}
          </p>
        </form>
      </article>
      <aside className="mainContactIframe">
        <iframe
          allowFullScreen
          aria-label="Mapa de Medellín"
          className="mainContactIframeMap"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.37000314496!2d-75.62249698629489!3d6.244201841754472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Medellin%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1762631864501!5m2!1sen!2sco"
          title="Mapa de Medellín"
        ></iframe>
      </aside>
    </>
  );
}
