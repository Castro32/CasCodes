import React, { useRef } from 'react';
import "./Contact.css";
import { MdEmail } from 'react-icons/md';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contacts">
      <h2>Contact Me</h2>
      <div className="container">
        <div className="contact__form">
          <h3>Get In Touch</h3
