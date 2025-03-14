import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from './../emailjs.config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' }); // Réinitialisation des champs
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Échec de l\'envoi du message.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message :
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit" disabled={!isFormValid}>Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;