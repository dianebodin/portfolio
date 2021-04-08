import React, { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkRegex = (regex, state, elementId) => {
    let isElement = document.getElementById(elementId);
    if (state.match(regex)) {
      isElement.style.display = "none";
      return true;
    } else {
      isElement.style.display = "block";
      isElement.style.animation = "dongle 1s";
      setTimeout(() => {
        isElement.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const isPhone = () => checkRegex(/^[0-9]{10}$/, phone, "not-phone");

  const isEmail = () => checkRegex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, email, "not-email");

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameS = document.getElementById("name");
    let phoneS = document.getElementById("phone");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    if (name && isPhone() && isEmail() && message) {
      const templateId = process.env.REACT_APP_PATH_TEMPLATE;

      nameS.classList.remove("red");
      phoneS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      sendFeedback(templateId, {
        name,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Veuillez remplir les champs correctement.";
      formMess.style.background = "#fe9a9a";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!phone) {
        phoneS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send(process.env.REACT_APP_PATH_SERVICE, templateId, variables)
      .then(() => {
        formMess.innerHTML = "Message envoyé !";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById("name").classList.remove("error");
        document.getElementById("phone").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(() => formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer.");
  };

  return (
    <form className="contact-form">
      <h2>contactez-moi</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
        />
        <div className="phone-content">
          <label id="not-phone">Numéro de téléphone non valide</label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone *"
            value={phone}
          />
        </div>
        <div className="email-content">
          <label id="not-email">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <input
        className="button hover"
        type="submit"
        value="envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message" />
    </form>
  );
};

export default ContactForm;