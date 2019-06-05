import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <div class="home-body-container">
        <section class="home-body-content">
          <h1 class="home-title">Check Me Out</h1>
          <p class="home-body-text">
              Welcome to my portfolio. Here I discuss some of the influences that have driven me towards my current passion as a software developer and engineer, in efforts to get know me as an individual as well. As you navigate through my (app/webstie) I hope you get an idea of where some of my fundementals and philosophies lie with my work ethic and find some similarities for future opportunities for us passionate creators, alike, to network. At the least, I hope I can inspire my viewers to do what they love, love what they do, and thrive in all their endeavors. Feel free to browse, reach out or leave feedback as you please. Thank you
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home;