import { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {

  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_0zln1vg",
      "template_4epfo9o",
      form.current,
      "8aqrE6WbQ-apajt_s"
    ).then(
      () => {
        alert("Message sent successfully");
      },
      () => {
        alert("Error sending message");
      }
    );

    e.target.reset();
  };

  return (

   <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact-container">

        <h2 className="contact-title">{t("contactTitle")}</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder={t("contactName")}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder={t("contactEmail")}
            required
          />

          <textarea
            name="message"
            placeholder={t("contactMessage")}
            required
          />

       <button type="submit" className="contact-button">
  {t("contactSend")}
</button>
        </form>

      </div>

    </section>

  );

}

export default Contact;