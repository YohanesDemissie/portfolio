import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Contact.css'

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="contacts-container">
        <h1 class="contact-header">Looking for a Web + Mobile Dev?</h1>
        <div class="address-container">
          You can contact me via email <u><a class="contact-links" href="mailto:yohanes2o6@gmail.com">Yohanes
          Demissie</a></u>,
          via <u><a class="contact-links" href="https://www.linkedin.com/in/yohanes-demissie/" target="#">Linked
          In</a></u>,<br />
          @YohanesDemissie via <u><a class="contact-links" href="https://codefellows.slack.com">Slack</a></u>,
          with your name, company, and any questions, comments or potential opportunities. Thank you.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;